'use client';

import React, { useState, useEffect } from 'react';

const EventPriceCalculator: React.FC = () => {
  const [numberOfInvites, setNumberOfInvites] = useState(100);
  const [eventDuration, setEventDuration] = useState(3);
  const [totalPrice, setTotalPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [durationCost, setDurationCost] = useState(0);

  const minInvites = 10;
  const maxInvites = 500;
  const minDuration = 1;
  const maxDuration = 30;

  // Price calculation formula:
  // Base price per invite: ₹500
  // Duration multiplier: ₹200 per day per invite
  // Total = (Number of Invites × ₹500) + (Duration × ₹200 × Number of Invites)
  const calculatePrice = () => {
    const base = numberOfInvites * 500;
    const duration = eventDuration * 200 * numberOfInvites;
    const total = base + duration;
    setBasePrice(base);
    setDurationCost(duration);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculatePrice();
  }, [numberOfInvites, eventDuration]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Event Price Calculator</h3>
      <p className="text-xs text-gray-600 mb-6">Calculate your event cost based on invites and duration</p>

      {/* Number of Invites Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm text-gray-700">Number of Invites</label>
          <span className="text-lg font-bold text-primary">{numberOfInvites}</span>
        </div>
        <input
          type="range"
          min={minInvites}
          max={maxInvites}
          step={10}
          value={numberOfInvites}
          onChange={(e) => setNumberOfInvites(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-purple"
          style={{
            background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${((numberOfInvites - minInvites) / (maxInvites - minInvites)) * 100}%, #e5e7eb ${((numberOfInvites - minInvites) / (maxInvites - minInvites)) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{minInvites}</span>
          <span>{maxInvites}</span>
        </div>
      </div>

      {/* Duration Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm text-gray-700">Duration of Event</label>
          <span className="text-lg font-bold text-primary">{eventDuration} {eventDuration === 1 ? 'Day' : 'Days'}</span>
        </div>
        <input
          type="range"
          min={minDuration}
          max={maxDuration}
          step={1}
          value={eventDuration}
          onChange={(e) => setEventDuration(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-purple"
          style={{
            background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${((eventDuration - minDuration) / (maxDuration - minDuration)) * 100}%, #e5e7eb ${((eventDuration - minDuration) / (maxDuration - minDuration)) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{minDuration} Day</span>
          <span>{maxDuration} Days</span>
        </div>
      </div>

      {/* Total Price Display */}
      <div className="mb-4">
        <div className="text-xs text-gray-600 mb-1">Total Event Cost</div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold text-secondary">₹{formatNumber(totalPrice)}</span>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600 mb-1">Base Cost</p>
            <p className="font-bold text-gray-900">₹{formatNumber(basePrice)}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Duration Cost</p>
            <p className="font-bold text-gray-900">₹{formatNumber(durationCost)}</p>
          </div>
        </div>
      </div>

      {/* Info Text */}
      <p className="text-xs text-gray-500">
        Base rate: ₹500 per invite + ₹200 per invite per day
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

export default EventPriceCalculator;
