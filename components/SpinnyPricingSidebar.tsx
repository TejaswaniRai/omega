import React from 'react';
import { MapPin, Shield } from 'lucide-react';
import EventPriceCalculator from './EventPriceCalculator';

interface SpinnyPricingSidebarProps {
  carName: string;
  kmsDriven: number;
  fuelType: string;
  transmission: string;
  location: string;
  price: number;
  onCalculateEMI: () => void;
}

const SpinnyPricingSidebar: React.FC<SpinnyPricingSidebarProps> = ({
  carName,
  kmsDriven,
  fuelType,
  transmission,
  location,
  price,
  onCalculateEMI,
}) => {
  const formatPrice = (amount: number) => {
    const lakh = amount / 100000;
    return `₹${lakh.toFixed(2)} Lakh`;
  };

  const formatKms = (kms: number) => {
    if (kms >= 1000) {
      return `${(kms / 1000).toFixed(1)}K km`;
    }
    return `${kms} km`;
  };

  return (
    <div className="w-full">
      {/* Sticky Container */}
      <div className="sticky top-8">
        {/* Car Title */}
        <h1 className="text-[22px] font-bold text-[#1A1A1A] leading-[1.3] mb-3">
          {carName}
        </h1>

        {/* Metadata Row */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[14px] font-medium text-[#666666]">
            {formatKms(kmsDriven)}
          </span>
          <span className="text-[#CCCCCC]">•</span>
          <span className="text-[14px] font-medium text-[#666666]">
            {fuelType}
          </span>
          <span className="text-[#CCCCCC]">•</span>
          <span className="text-[14px] font-medium text-[#666666]">
            {transmission}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-[#666666]" strokeWidth={2} />
          <span className="text-[14px] font-regular text-[#666666]">
            {location}
          </span>
        </div>

        {/* Assured+ Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F0F9FF] px-3 py-2 rounded-lg mb-6">
          <Shield className="w-4 h-4 text-[#5C2BC9]" strokeWidth={2} />
          <span className="text-[14px] font-medium text-[#5C2BC9]">
            Assured+
          </span>
        </div>

        {/* Price Box */}
        <div className="bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 mb-3">
          {/* Main Price */}
          <div className="mb-4">
            <div className="text-[28px] font-bold text-[#1A1A1A] mb-1">
              {formatPrice(price)}
            </div>
            <div className="text-[13px] font-regular text-[#666666]">
              + 1% TCS
            </div>
          </div>

          {/* EMI Section */}
          <div className="bg-[#F7F7F7] rounded-[10px] p-4 mb-4">
            <div className="flex items-start justify-between mb-3">
              <span className="text-[14px] font-medium text-[#1A1A1A]">
                EMI starts at
              </span>
              <span className="text-[14px] font-bold text-[#1A1A1A]">
                ₹22,345/mo
              </span>
            </div>
            <div className="inline-flex items-center bg-white px-3 py-1 rounded-full border border-[#E5E5E5]">
              <span className="text-[12px] font-regular text-[#666666]">
                @ 9.5% interest rate
              </span>
            </div>
          </div>

          {/* Calculate EMI Button */}
          <button
            onClick={onCalculateEMI}
            className="w-full bg-[#5C2BC9] hover:bg-[#4A23A3] text-white font-medium text-[15px] py-3 rounded-[10px] transition-colors mb-3"
          >
            Calculate your EMI
          </button>

          {/* Save Extra Bar */}
          <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-[8px] px-3 py-2 mb-3">
            <span className="text-[13px] font-regular text-[#991B1B]">
              Save extra ₹0 on exchange
            </span>
          </div>

          {/* Inventory Not Available */}
          <div className="bg-[#F3F4F6] border border-[#E5E7EB] rounded-[8px] px-3 py-2 mb-3">
            <span className="text-[13px] font-regular text-[#4B5563]">
              This inventory is no longer available at this price
            </span>
          </div>

          {/* View Similar Cars Button */}
          <button className="w-full bg-white hover:bg-[#F7F7F7] border-2 border-[#5C2BC9] text-[#5C2BC9] font-medium text-[15px] py-3 rounded-[10px] transition-colors mb-6">
            View Similar Cars
          </button>

          {/* Event Price Calculator */}
          <div className="border-t border-[#E5E5E5] pt-6">
            <EventPriceCalculator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinnyPricingSidebar;
