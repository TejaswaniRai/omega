'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Wrench, Car, Shield } from 'lucide-react';

const QualityReport: React.FC = () => {
  const [showFullReport, setShowFullReport] = useState(false);

  return (
    <div>
      <h2 className="text-[24px] font-bold text-[#1A1A1A] mb-8">
        Quality report
      </h2>

      {/* Car Condition */}
      <div className="mb-10">
        <h3 className="text-[18px] font-bold text-[#1A1A1A] mb-2">Car condition</h3>
        <p className="text-[13px] text-[#666666] mb-6">Based on 200 points inspection</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {['Core structure intact', 'Non-tampered odometer', 'Non flooded', 'Engine', 'Drivetrain', 'Body structure', 'Mechanical', 'Interior'].map((item) => (
            <span key={item} className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-[13px] flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
          <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-[13px]">Minor dent</span>
          <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-[13px]">Minor scratches</span>
        </div>

      </div>

      {/* Fixes Done */}
      <div className="mb-10">
        <h3 className="text-[18px] font-bold text-[#1A1A1A] mb-2">Fixes done</h3>
        <p className="text-[13px] text-[#666666] mb-4">Quality-driven fixes and upgrades</p>
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-[13px]">
          Repaired & repainted
          <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center font-semibold text-gray-900">4</span>
        </div>
      </div>

      {/* Tyre Life */}
      <div className="mb-8">
        <h3 className="text-[18px] font-bold text-[#1A1A1A] mb-4">Tyre life remaining</h3>
        
        <div className="flex gap-12 mb-6">
          <div>
            <p className="text-[13px] font-semibold text-[#666666] mb-2">Front</p>
            <p className="text-[13px] text-[#1A1A1A]">L-90%  R-90%</p>
          </div>
          
          <div>
            <p className="text-[13px] font-semibold text-[#666666] mb-2">Rear</p>
            <p className="text-[13px] text-[#1A1A1A]">L-90%  R-90%</p>
          </div>

          <div>
            <p className="text-[13px] font-semibold text-[#666666] mb-2">Spare</p>
            <p className="text-[13px] text-[#1A1A1A]">95%</p>
          </div>
        </div>

        <div className="text-teal-700 text-[13px] font-medium mb-8">
          No immediate servicing required<br/>
          <span className="text-[#666666]">(Inquire at test drive for more details)</span>
        </div>
      </div>

      {/* View Full Report Button */}
      <button 
        onClick={() => setShowFullReport(!showFullReport)}
        className="bg-[#5C2BC9] text-white py-3 px-8 rounded-[10px] font-medium text-[14px] hover:bg-[#4A23A3] transition-colors"
      >
        View full report
      </button>
    </div>
  );
};

export default QualityReport;
