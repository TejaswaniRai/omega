'use client';

import React, { useState, useRef } from 'react';
import { X, RotateCw, ZoomIn, ZoomOut, Maximize2, Box } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import ModelViewer to avoid SSR issues
const ModelViewer3D = dynamic(() => import('./ModelViewer3D'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
});

interface View360ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images360: string[];
  modelPath?: string; // Optional 3D model path
}

type ViewMode = '2d' | '3d';

const View360Modal: React.FC<View360ModalProps> = ({ 
  isOpen, 
  onClose, 
  images360,
  modelPath = '/images/360/mahindra-thar.glb' // Default 3D model path
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>('2d');
  const [has3DModel, setHas3DModel] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(false);

  // Check if 3D model exists
  React.useEffect(() => {
    if (modelPath) {
      fetch(modelPath, { method: 'HEAD' })
        .then(res => setHas3DModel(res.ok))
        .catch(() => setHas3DModel(false));
    }
  }, [modelPath]);

  // Auto-rotate functionality
  React.useEffect(() => {
    if (!isAutoRotating || !isOpen || viewMode === '3d') return;
    
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % images360.length);
    }, 150);
    
    return () => clearInterval(interval);
  }, [isAutoRotating, isOpen, images360.length, viewMode]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsAutoRotating(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const sensitivity = 3;
    
    if (Math.abs(deltaX) > sensitivity) {
      const direction = deltaX > 0 ? -1 : 1;
      setCurrentFrame((prev) => {
        const next = prev + direction;
        if (next < 0) return images360.length - 1;
        if (next >= images360.length) return 0;
        return next;
      });
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setIsAutoRotating(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = 3;
    
    if (Math.abs(deltaX) > sensitivity) {
      const direction = deltaX > 0 ? -1 : 1;
      setCurrentFrame((prev) => {
        const next = prev + direction;
        if (next < 0) return images360.length - 1;
        if (next >= images360.length) return 0;
        return next;
      });
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  const getCurrentAngle = () => {
    return Math.round((currentFrame / images360.length) * 360);
  };

  const getCurrentView = () => {
    const angle = getCurrentAngle();
    if (angle >= 337.5 || angle < 22.5) return 'Front View';
    if (angle >= 22.5 && angle < 67.5) return 'Front-Right';
    if (angle >= 67.5 && angle < 112.5) return 'Right Side';
    if (angle >= 112.5 && angle < 157.5) return 'Back-Right';
    if (angle >= 157.5 && angle < 202.5) return 'Back View';
    if (angle >= 202.5 && angle < 247.5) return 'Back-Left';
    if (angle >= 247.5 && angle < 292.5) return 'Left Side';
    return 'Front-Left';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-0 md:p-4">
      <div className="relative w-full h-full md:h-auto md:max-w-6xl bg-white md:rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
        >
          <X size={24} />
        </button>

        {/* Main Content */}
        <div className="flex flex-col h-full md:h-[90vh]">
          {/* Image Display Area */}
          {viewMode === '2d' ? (
            <div
              ref={containerRef}
              className="relative flex-1 bg-gray-100 overflow-hidden cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={images360[currentFrame]}
                  alt={`360 view frame ${currentFrame + 1}`}
                  className="max-w-full max-h-full object-contain transition-transform duration-200"
                  style={{ transform: `scale(${zoomLevel})` }}
                  draggable={false}
                />
              </div>

              {/* Current View Indicator */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-95 px-4 py-3 rounded-lg shadow-lg">
                <div className="text-xs text-gray-600 mb-1">Current View</div>
                <div className="font-bold text-primary text-lg">{getCurrentView()}</div>
                <div className="text-xs text-gray-500 mt-1">{getCurrentAngle()}°</div>
              </div>

              {/* Zoom Controls */}
              <div className="absolute top-4 right-16 flex flex-col gap-2">
                <button
                  onClick={handleZoomIn}
                  className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                  disabled={zoomLevel >= 3}
                >
                  <ZoomIn size={20} className={zoomLevel >= 3 ? 'text-gray-400' : 'text-gray-700'} />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                  disabled={zoomLevel <= 1}
                >
                  <ZoomOut size={20} className={zoomLevel <= 1 ? 'text-gray-400' : 'text-gray-700'} />
                </button>
                <button
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className={`p-2 rounded-lg shadow-lg transition-colors ${
                    isAutoRotating ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <RotateCw size={20} className={isAutoRotating ? 'animate-spin' : ''} />
                </button>
                {has3DModel && (
                  <button
                    onClick={() => setViewMode('3d')}
                    className="bg-secondary text-white p-2 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
                    title="Switch to 3D View"
                  >
                    <Box size={20} />
                  </button>
                )}
              </div>

              {/* Drag Instructions */}
              <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-3 rounded-full text-sm pointer-events-none">
                ← Drag to rotate 360° →
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 w-64 md:w-96">
                <div className="bg-gray-300 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full transition-all duration-100"
                    style={{ width: `${(currentFrame / images360.length) * 100}%` }}
                  />
                </div>
                <div className="text-center text-white text-xs mt-2">
                  Frame {currentFrame + 1} of {images360.length}
                </div>
              </div>
            </div>
          ) : (
            /* 3D Model Viewer */
            <div className="relative flex-1 bg-gray-100">
              <ModelViewer3D 
                modelPath={modelPath}
                alt="Mahindra Thar 3D Model"
                className="w-full h-full"
              />
              
              {/* 3D Mode Instructions */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-95 px-4 py-3 rounded-lg shadow-lg">
                <div className="text-xs text-gray-600 mb-1">3D Interactive View</div>
                <div className="font-bold text-primary text-sm">Drag to rotate freely</div>
                <div className="text-xs text-gray-500 mt-1">Scroll to zoom</div>
              </div>

              {/* Back to 2D Button */}
              <div className="absolute top-4 right-16">
                <button
                  onClick={() => setViewMode('2d')}
                  className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                  title="Switch to 2D View"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Bottom Control Bar */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {/* Fullscreen Button */}
              <button
                className="ml-auto p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => {
                  if (containerRef.current) {
                    containerRef.current.requestFullscreen?.();
                  }
                }}
              >
                <Maximize2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View360Modal;
