'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Specification {
  label: string;
  value: string;
}

const CarSpecifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const keySpecs: Specification[] = [
    { label: 'Mileage (ARAI)', value: '15 kmpl' },
    { label: 'Ground clearance', value: '226 mm' },
    { label: 'Seating capacity', value: '4 units' },
    { label: 'Fuel tank capacity', value: '57 litres' },
    { label: 'Displacement', value: '2184 cc' },
  ];

  const allSpecs: Specification[] = [
    ...keySpecs,
    { label: 'Max Power', value: '130 bhp @ 3750 rpm' },
    { label: 'Max Torque', value: '320 Nm @ 1600-2800 rpm' },
    { label: 'Boot Space', value: '447 litres' },
    { label: 'Kerb Weight', value: '1847 kg' },
    { label: 'Wheelbase', value: '2450 mm' },
    { label: 'Turning Radius', value: '5.75 metres' },
    { label: 'No. of Cylinders', value: '4' },
    { label: 'Valves Per Cylinder', value: '4' },
    { label: 'Drive Type', value: '4WD' },
  ];

  const features = {
    'Comfort & convenience': [
      'Cruise control',
      'Steering mounted controls',
      'Driver height adjustable seat',
      'Power windows',
      'Central locking',
      'Keyless entry',
      'Air conditioner',
      'Dual zone climate control',
      'Rear AC vents',
    ],
    'Safety': [
      'Airbags',
      'ABS (Anti-lock Braking System)',
      'EBD (Electronic Brake-force Distribution)',
      'Traction control',
      'Hill hold control',
      'Hill descent control',
      'Electronic stability program',
      'Parking sensors',
      'Rear parking camera',
    ],
    'Entertainment & communication': [
      'Integrated (in-dash) music system',
      'Touch screen infotainment system',
      'Apple CarPlay / Android Auto',
      'GPS navigation system',
      'Bluetooth connectivity',
      'USB ports',
      'Steering mounted audio controls',
    ],
    'Exterior': [
      'Rear defogger',
      'Alloy wheels',
      'LED DRLs',
      'LED tail lights',
      'Roof rails',
      'Front fog lights',
      'Power adjustable exterior mirrors',
      'Body colored bumpers',
      'Chrome grille',
    ],
  };

  return (
    <div>
      <h2 className="text-[24px] font-bold text-[#1A1A1A] mb-8">
        Car Specifications
      </h2>

      {/* Key Specifications Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {(showAll ? allSpecs : keySpecs).map((spec, index) => (
          <div key={index} className="flex items-start gap-3">
            <svg className="w-10 h-10 text-purple-300 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <div>
              <p className="text-[12px] text-[#666666] mb-1">{spec.label}</p>
              <p className="text-[16px] font-bold text-[#1A1A1A]">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Specifications Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="border-2 border-[#5C2BC9] text-[#5C2BC9] py-3 px-8 rounded-[10px] font-semibold text-[14px] hover:bg-purple-50 transition-colors mb-12"
      >
        {showAll ? 'VIEW LESS SPECIFICATIONS' : 'VIEW ALL SPECIFICATIONS'}
      </button>

      {/* Top Features */}
      <h3 className="text-[24px] font-bold text-[#1A1A1A] mb-8">Top Features of this car</h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(features).map(([category, items]) => (
          <div key={category}>
            <h4 className="font-bold text-[#666666] mb-6 text-[13px] uppercase tracking-wide">
              {category}
            </h4>
            <ul className="space-y-4">
              {items.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[13px] text-[#1A1A1A]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSpecifications;
