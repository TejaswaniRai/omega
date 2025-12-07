'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Maximize2 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageCarouselProps {
  images: string[];
  onView360Click: () => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onView360Click }) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={image}
                alt={`Car view ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button
        onClick={onView360Click}
        className="absolute top-4 right-4 z-10 bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-800 transition-colors shadow-lg"
      >
        <Maximize2 size={20} />
        <span className="font-semibold">360° View</span>
      </button>
    </div>
  );
};

export default ImageCarousel;
