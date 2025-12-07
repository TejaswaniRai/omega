'use client';

import React, { useState, useEffect } from 'react';

const EMICalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(10608000);
  const [downPayment, setDownPayment] = useState(2652000);
  const [duration, setDuration] = useState(66);
  const [emi, setEmi] = useState(0);

  const carPrice = 13260000; // ₹13.26 Lakh = 1326000
  const minLoanAmount = 100000;
  const maxLoanAmount = carPrice;
  const minDownPayment = 0;
  const maxDownPayment = carPrice - 100000;
  const minDuration = 12;
  const maxDuration = 84;

  // Calculate EMI using the formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
  const calculateEMI = () => {
    const principal = loanAmount;
    const rateOfInterest = 9.5; // Annual rate in percentage
    const monthlyRate = rateOfInterest / 12 / 100;
    const numberOfMonths = duration;

    if (principal <= 0) {
      setEmi(0);
      return;
    }

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

    setEmi(Math.round(emiValue));
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, downPayment, duration]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-gray-900 mb-6">EMI Calculator</h3>

      {/* Loan Amount Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm text-gray-700">Loan Amount</label>
          <span className="text-lg font-bold text-primary">₹ {formatCurrency(loanAmount)}</span>
        </div>
        <input
          type="range"
          min={minLoanAmount}
          max={maxLoanAmount}
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-purple"
          style={{
            background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${((loanAmount - minLoanAmount) / (maxLoanAmount - minLoanAmount)) * 100}%, #e5e7eb ${((loanAmount - minLoanAmount) / (maxLoanAmount - minLoanAmount)) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>₹ {formatCurrency(minLoanAmount)}</span>
          <span>₹ {formatCurrency(maxLoanAmount)}</span>
        </div>
      </div>

      {/* Down Payment Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm text-gray-700">Down Payment*</label>
          <span className="text-lg font-bold text-primary">₹ {formatCurrency(downPayment)}</span>
        </div>
        <input
          type="range"
          min={minDownPayment}
          max={maxDownPayment}
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-purple"
          style={{
            background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${((downPayment - minDownPayment) / (maxDownPayment - minDownPayment)) * 100}%, #e5e7eb ${((downPayment - minDownPayment) / (maxDownPayment - minDownPayment)) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>₹ {formatCurrency(minDownPayment)}</span>
          <span>₹ {formatCurrency(maxDownPayment)}</span>
        </div>
      </div>

      {/* Duration Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm text-gray-700">Duration of Loan</label>
          <span className="text-lg font-bold text-primary">{duration} Months</span>
        </div>
        <input
          type="range"
          min={minDuration}
          max={maxDuration}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-purple"
          style={{
            background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${((duration - minDuration) / (maxDuration - minDuration)) * 100}%, #e5e7eb ${((duration - minDuration) / (maxDuration - minDuration)) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{minDuration} Months</span>
          <span>{maxDuration} Months</span>
        </div>
      </div>

      {/* EMI Display */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-secondary">₹{formatCurrency(emi)}</span>
          <span className="text-gray-600">per month</span>
        </div>
      </div>

      {/* View Loan Breakup */}
      <button className="text-primary font-semibold text-sm mb-4 flex items-center gap-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"/>
        </svg>
        View Loan Breakup
      </button>

      {/* Check Eligibility Button */}
      <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-800 transition-colors flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Check eligibility
      </button>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 mt-4">
        *Rate of interest can vary subject to credit profile. Loan approval is at the sole discretion of the finance partner
      </p>
      <p className="text-xs text-gray-500">
        **Processing fee and other loan charges are not included.
      </p>

      <style jsx>{`
        .slider-purple::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #7c3aed;
          border: 4px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          border-radius: 50%;
          cursor: pointer;
        }

        .slider-purple::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #7c3aed;
          border: 4px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default EMICalculator;
