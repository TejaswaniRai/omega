'use client';

import React, { useEffect, useRef } from 'react';

interface ModelViewerProps {
  modelPath: string;
  alt?: string;
  className?: string;
}

const ModelViewer3D: React.FC<ModelViewerProps> = ({ 
  modelPath, 
  alt = "3D Model",
  className = ""
}) => {
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    // Model-viewer is loaded via CDN in _document.tsx
  }, []);

  return (
    <model-viewer
      ref={modelViewerRef}
      src={modelPath}
      alt={alt}
      auto-rotate
      camera-controls
      touch-action="pan-y"
      className={`w-full h-full ${className}`}
      style={{ width: '100%', height: '100%' }}
      loading="eager"
      reveal="auto"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-orbit="45deg 75deg 2.5m"
      min-camera-orbit="auto auto 1m"
      max-camera-orbit="auto auto 10m"
      shadow-intensity="1"
      exposure="1"
      environment-image="neutral"
    >
      <div slot="progress-bar" className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading 3D Model...</p>
        </div>
      </div>
    </model-viewer>
  );
};

export default ModelViewer3D;
