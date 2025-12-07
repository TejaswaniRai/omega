'use client';

import React, { useState } from 'react';
import OmegaPricingSidebar from '@/components/OmegaPricingSidebar';
import CarOverview from '@/components/CarOverview';
import QualityReport from '@/components/QualityReport';
import CarSpecifications from '@/components/CarSpecifications';
import EMICalculator from '@/components/EMICalculator';
import View360Modal from '@/components/View360Modal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SpinnyCarDetails() {
  const [activeTab, setActiveTab] = useState<'overview' | 'report' | 'specs'>('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [is360Open, setIs360Open] = useState(false);
  const [isEMICalculatorOpen, setIsEMICalculatorOpen] = useState(false);

  // Car images
  const carImages = [
    '/images/360/thar-360-01.jpg',
    '/images/360/thar-360-03.jpg',
    '/images/360/thar-360-05.jpg',
    '/images/360/thar-360-07.jpg',
  ];

  // 360 images
  const images360 = [
    '/images/360/thar-360-01.jpg',
    '/images/360/thar-360-02.jpg',
    '/images/360/thar-360-03.jpg',
    '/images/360/thar-360-04.jpg',
    '/images/360/thar-360-05.jpg',
    '/images/360/thar-360-06.jpg',
    '/images/360/thar-360-07.jpg',
    '/images/360/thar-360-08.jpg',
  ];

  const carDetails = {
    name: '2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD',
    kmsDriven: 28500,
    fuelType: 'Diesel',
    transmission: 'Manual',
    location: 'Sector 29, Gurgaon',
    price: 1326000,
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F7F7' }}>
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Two Column Layout: 70% Left | 30% Right */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* LEFT COLUMN (70%) - Image Gallery + Tabs + Content */}
          <div className="lg:col-span-7">
            {/* Image Gallery Section */}
            <div className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden mb-8">
              {/* Main Image */}
              <div className="relative aspect-[16/10] bg-gray-100">
                <img
                  src={carImages[currentImageIndex]}
                  alt="Car"
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={2.5} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-[#1A1A1A]" strokeWidth={2.5} />
                </button>

                {/* 360 View Button */}
                <button
                  onClick={() => setIs360Open(true)}
                  className="absolute bottom-4 right-4 bg-white/95 hover:bg-white px-4 py-2 rounded-[8px] shadow-md transition-all flex items-center gap-2"
                >
                  <span className="text-[14px] font-medium text-[#1A1A1A]">360° View</span>
                </button>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 p-4 overflow-x-auto">
                {carImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-16 rounded-[8px] overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex ? 'border-[#5C2BC9]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Reasons to Buy Section - BELOW Image Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E6FFF0] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#17C964]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] text-[15px] mb-2">Assured+ with 3-year warranty</h3>
                    <span className="inline-block bg-[#17C964] text-white text-[11px] px-2 py-0.5 rounded font-medium mb-2">India's first</span>
                    <p className="text-[13px] text-[#666666]">As good as new, with extra benefits</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E6FFF0] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#17C964]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] text-[15px] mb-2">Premium variant</h3>
                    <p className="text-[13px] text-[#666666]">Fully loaded variant offering the best of features</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-8">
              <div className="flex border-b border-[#E5E5E5]">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-4 px-6 text-[14px] font-bold uppercase tracking-wide transition-all ${
                    activeTab === 'overview'
                      ? 'text-[#5C2BC9] border-b-2 border-[#5C2BC9]'
                      : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('report')}
                  className={`flex-1 py-4 px-6 text-[14px] font-bold uppercase tracking-wide transition-all ${
                    activeTab === 'report'
                      ? 'text-[#5C2BC9] border-b-2 border-[#5C2BC9]'
                      : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Report
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`flex-1 py-4 px-6 text-[14px] font-bold uppercase tracking-wide transition-all ${
                    activeTab === 'specs'
                      ? 'text-[#5C2BC9] border-b-2 border-[#5C2BC9]'
                      : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Feature & Specs
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-[24px] font-bold text-[#1A1A1A] mb-8">Car Overview</h2>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                      <div>
                        <div className="text-[13px] font-regular text-[#666666] mb-2">Make Year</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">Aug 2021</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-regular text-[#666666] mb-2">Registration Year</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">Dec 2021</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-regular text-[#666666] mb-2">Fuel Type</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">Diesel (BSVI)</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-regular text-[#666666] mb-2">Km driven</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">28.5K km</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-regular text-[#666666] mb-2">Transmission</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">Manual</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-regular text-[#666666] mb-2">No. of Owner</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">1st Owner</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-regular text-[#666666] mb-2">Insurance Validity</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">Nov 2025</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-regular text-[#666666] mb-2">Insurance Type</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">Comprehensive</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-regular text-[#666666] mb-2">RTO</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">HR26</div>
                      </div>
                      <div className="col-span-3">
                        <div className="text-[13px] font-regular text-[#666666] mb-2">Car Location</div>
                        <div className="text-[16px] font-bold text-[#1A1A1A]">Sector 29, Gurgaon</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'report' && (
                  <div>
                    <QualityReport />
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div>
                    <CarSpecifications />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (30%) - Sticky Pricing Sidebar */}
          <div className="lg:col-span-3">
            <OmegaPricingSidebar
              carName={carDetails.name}
              kmsDriven={carDetails.kmsDriven}
              fuelType={carDetails.fuelType}
              transmission={carDetails.transmission}
              location={carDetails.location}
              price={carDetails.price}
              onCalculateEMI={() => setIsEMICalculatorOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* 360 View Modal */}
      <View360Modal
        isOpen={is360Open}
        onClose={() => setIs360Open(false)}
        images360={images360}
      />

      {/* EMI Calculator Modal */}
      {isEMICalculatorOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[14px] max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setIsEMICalculatorOpen(false)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#1A1A1A] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-8">
              <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-6">Calculate EMI</h2>
              <EMICalculator />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
