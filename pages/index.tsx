'use client';

import React, { useState } from 'react';
import OmegaPricingSidebar from '@/components/OmegaPricingSidebar';
import CarOverview from '@/components/CarOverview';
import QualityReport from '@/components/QualityReport';
import CarSpecifications from '@/components/CarSpecifications';
import EMICalculator from '@/components/EMICalculator';
import View360Modal from '@/components/View360Modal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
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
      {/* Omega Header */}
      <header className="bg-white border-b border-[#E5E5E5] sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#5C2BC9] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Ω</span>
              </div>
              <span className="text-[24px] font-bold text-[#1A1A1A]">Omega</span>
            </div>

            {/* Select City + Search */}
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
              <select className="px-4 py-2 border border-[#E5E5E5] rounded-lg text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#5C2BC9] bg-white min-w-[140px]">
                <option>Select city</option>
                <option>Gurgaon</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Pune</option>
              </select>
              
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search by body type"
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#5C2BC9]"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              <button className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#5C2BC9] transition-colors">
                Buy car
              </button>
              <button className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#5C2BC9] transition-colors">
                Sell car
              </button>
              <button className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#5C2BC9] transition-colors">
                More
              </button>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              {/* Shortlisted */}
              <button className="flex flex-col items-center gap-1 text-[#1A1A1A] hover:text-[#5C2BC9] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-[11px] font-medium">Shortlisted</span>
              </button>

              {/* Account */}
              <button className="flex flex-col items-center gap-1 text-[#1A1A1A] hover:text-[#5C2BC9] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[11px] font-medium">Account</span>
              </button>

              {/* Call us */}
              <div className="flex flex-col items-end">
                <span className="text-[11px] text-[#666666]">Call us at</span>
                <a href="tel:727-727-7275" className="text-[16px] font-bold text-[#5C2BC9] hover:underline">
                  727-727-7275
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-2 text-[12px]">
            <a href="#" className="text-[#5C2BC9] font-medium hover:underline uppercase">HOME</a>
            <span className="text-[#666666]">›</span>
            <a href="#" className="text-[#5C2BC9] font-medium hover:underline uppercase">USED CARS IN GURGAON</a>
            <span className="text-[#666666]">›</span>
            <a href="#" className="text-[#5C2BC9] font-medium hover:underline uppercase">MAHINDRA CARS</a>
            <span className="text-[#666666]">›</span>
            <span className="text-[#666666] uppercase">USED 2021 MAHINDRA THAR CARS</span>
          </div>
        </div>
      </div>

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

      {/* FAQ Section */}
      <div className="bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-[28px] font-bold text-[#1A1A1A] mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-6">
              <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-3">Q. When and where can I take a test drive?</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                With our test drive booking form, you can conveniently schedule a test drive at home or visit our hub to try out multiple cars. Once you book your preferred option, your relationship manager will call you to confirm the details before arriving at your location. To know more about home test drives, please click on the following <a href="#" className="text-[#5C2BC9] underline">link</a>.
              </p>
            </div>

            <div className="border-b border-[#E5E5E5] pb-6">
              <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-3">Q. What's the process for booking my car?</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Browse our extensive inventory, select your preferred car, and book a test drive. After the test drive, you can complete the booking online with minimal paperwork.
              </p>
            </div>

            <div className="border-b border-[#E5E5E5] pb-6">
              <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-3">Q. Will Omega help me with car finance?</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Yes, we have partnerships with leading banks and NBFCs to help you get the best car loan deals with competitive interest rates.
              </p>
            </div>

            <div className="border-b border-[#E5E5E5] pb-6">
              <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-3">Q. How does Omega's money back guarantee work?</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                We offer a no-questions-asked 5-day money back guarantee. If you're not satisfied with your purchase, you can return the car within 5 days for a full refund.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a href="#" className="text-[#5C2BC9] font-medium text-[14px] hover:underline">Browse Cars →</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white pt-12 pb-6">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Company */}
            <div>
              <h4 className="text-[14px] font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Who we are</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Customer reviews</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Car hub locations</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>

            {/* Column 2: Offerings */}
            <div>
              <h4 className="text-[14px] font-bold mb-4 text-white">Offerings</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Buy car</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Sell car</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Used car loan</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Car service</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Car insurance</a></li>
              </ul>
            </div>

            {/* Column 3: Car Servicing */}
            <div>
              <h4 className="text-[14px] font-bold mb-4 text-white">Car Servicing</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Periodic service</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">AC servicing</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Clutch & suspension</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Health check services</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Wheel care</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Washing & cleaning</a></li>
              </ul>
            </div>

            {/* Column 4: Tools */}
            <div>
              <h4 className="text-[14px] font-bold mb-4 text-white">Finance & Tools</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Service cost calculator</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">EMI calculator</a></li>
              </ul>
              <h4 className="text-[14px] font-bold mb-4 mt-6 text-white">Contact Us</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Trade with us</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Connect with us</a></li>
              </ul>
            </div>

            {/* Column 5: Policies */}
            <div>
              <h4 className="text-[14px] font-bold mb-4 text-white">Policies & Terms</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-[13px] text-[#CCCCCC] hover:text-white transition-colors">Terms & conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Buy Used Cars In Section */}
          <div className="border-t border-[#333333] pt-8 mb-8">
            <h4 className="text-[14px] font-bold mb-4 text-white">Buy Used car in</h4>
            <p className="text-[13px] text-[#CCCCCC] leading-relaxed">
              <a href="#" className="hover:text-white transition-colors">Delhi NCR</a> | <a href="#" className="hover:text-white transition-colors">Bangalore</a> | <a href="#" className="hover:text-white transition-colors">Hyderabad</a> | <a href="#" className="hover:text-white transition-colors">Mumbai</a> | <a href="#" className="hover:text-white transition-colors">Pune</a> | <a href="#" className="hover:text-white transition-colors">Delhi</a> | <a href="#" className="hover:text-white transition-colors">Gurgaon</a> | <a href="#" className="hover:text-white transition-colors">Noida</a> | <a href="#" className="hover:text-white transition-colors">Ahmedabad</a> | <a href="#" className="hover:text-white transition-colors">Chennai</a> | <a href="#" className="hover:text-white transition-colors">Kolkata</a> | <a href="#" className="hover:text-white transition-colors">Lucknow</a> | <a href="#" className="hover:text-white transition-colors">Jaipur</a> | <a href="#" className="hover:text-white transition-colors">Chandigarh</a> | <a href="#" className="hover:text-white transition-colors">Coimbatore</a> | <a href="#" className="hover:text-white transition-colors">Faridabad</a> | <a href="#" className="hover:text-white transition-colors">Ghaziabad</a>
            </p>
          </div>

          {/* Car Repair & Servicing Section */}
          <div className="border-t border-[#333333] pt-8 mb-8">
            <h4 className="text-[14px] font-bold mb-4 text-white">Car repair & servicing in</h4>
            <p className="text-[13px] text-[#CCCCCC] leading-relaxed">
              <a href="#" className="hover:text-white transition-colors">Delhi NCR</a> | <a href="#" className="hover:text-white transition-colors">Bangalore</a> | <a href="#" className="hover:text-white transition-colors">Hyderabad</a> | <a href="#" className="hover:text-white transition-colors">Mumbai</a> | <a href="#" className="hover:text-white transition-colors">Pune</a> | <a href="#" className="hover:text-white transition-colors">Delhi</a> | <a href="#" className="hover:text-white transition-colors">Gurgaon</a> | <a href="#" className="hover:text-white transition-colors">Noida</a> | <a href="#" className="hover:text-white transition-colors">Ahmedabad</a> | <a href="#" className="hover:text-white transition-colors">Chennai</a> | <a href="#" className="hover:text-white transition-colors">Kolkata</a>
            </p>
          </div>

          {/* About Omega */}
          <div className="border-t border-[#333333] pt-8 mb-8">
            <p className="text-[13px] text-[#CCCCCC] leading-relaxed mb-4">
              Omega is the most trusted way of buying and selling used cars. Choose from over 10K fully inspected second-hand car models. Select online and book a test drive at your home or at an Omega Car Hub near you. Get a no-questions-asked* 5-day money back guarantee and a free one-year comprehensive service warranty with Assured Resale Value on every Omega car.
            </p>
            <p className="text-[11px] text-[#999999]">(∗)subject to certain terms and conditions.</p>
          </div>

          {/* Social Links & Bottom Info */}
          <div className="border-t border-[#333333] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#CCCCCC] hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            <div className="text-center md:text-left">
              <p className="text-[11px] text-[#999999]">This page is managed by PureRide Technologies Private Limited.</p>
              <p className="text-[11px] text-[#999999] mt-1">© 2025 Valuedrive Technologies Private Limited. All rights reserved.</p>
              <p className="text-[11px] text-[#999999] mt-1">CIN: U74999HR2019PTC077781</p>
            </div>

            <div className="text-right">
              <a href="tel:727-727-7275" className="text-[18px] font-bold text-[#5C2BC9] hover:underline">727-727-7275</a>
              <p className="text-[11px] text-[#999999] mt-1">Get Instant Quotes</p>
            </div>
          </div>
        </div>
      </footer>

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
