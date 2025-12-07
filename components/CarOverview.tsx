'use client';

import React from 'react';
import { Car, Calendar, Gauge, IndianRupee, MapPin, Fuel, Cog } from 'lucide-react';

interface CarDetails {
  name: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  location: string;
  fuelType: string;
  transmission: string;
  kmsDriven: number;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

interface CarOverviewProps {
  carDetails: CarDetails;
}

const CarOverview: React.FC<CarOverviewProps> = ({ carDetails }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {/* Car Title and Price */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {carDetails.name}
        </h1>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin size={18} />
          <span>{carDetails.location}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl md:text-5xl font-bold text-primary">
            {formatCurrency(carDetails.price)}
          </span>
        </div>
      </div>

      {/* Key Specifications Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <Calendar className="text-primary" size={24} />
          <div>
            <p className="text-sm text-gray-600">Year</p>
            <p className="font-bold text-gray-800">{carDetails.year}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <Gauge className="text-primary" size={24} />
          <div>
            <p className="text-sm text-gray-600">KMs Driven</p>
            <p className="font-bold text-gray-800">{formatNumber(carDetails.kmsDriven)}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <Fuel className="text-primary" size={24} />
          <div>
            <p className="text-sm text-gray-600">Fuel Type</p>
            <p className="font-bold text-gray-800">{carDetails.fuelType}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <Cog className="text-primary" size={24} />
          <div>
            <p className="text-sm text-gray-600">Transmission</p>
            <p className="font-bold text-gray-800">{carDetails.transmission}</p>
          </div>
        </div>
      </div>

      {/* Car Overview Details */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Car size={24} className="text-primary" />
          Car Overview
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {carDetails.specifications.map((spec, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg"
            >
              <span className="text-gray-600">{spec.label}</span>
              <span className="font-semibold text-gray-800">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {carDetails.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mileage Badge */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90">Mileage</p>
            <p className="text-2xl font-bold">{carDetails.mileage}</p>
          </div>
          <Gauge size={40} className="opacity-80" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <button className="bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-md">
          Schedule Test Drive
        </button>
        <button className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default CarOverview;
