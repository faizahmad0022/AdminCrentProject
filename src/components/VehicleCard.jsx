"use client";

import { Star } from "lucide-react";

const VehicleCard = ({ car }) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-4 min-w-0">
      {/* LEFT SIDE */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 sm:gap-6 min-w-0 flex-1">
        {/* Car Image */}
        <div className="w-full sm:w-[120px] md:w-[140px] flex-shrink-0 flex justify-center sm:justify-start">
          <img
            src={car.image}
            alt={car.name}
            className="max-w-[140px] sm:w-full h-auto object-contain"
          />
        </div>

        {/* Car Details */}
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[12px] sm:text-[13px] text-[#9CA3AF]">
            {car.category}
          </span>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1">
            <h3 className="text-[17px] sm:text-[20px] font-bold text-[#111827]">
              {car.name}
            </h3>

            <div className="flex items-center gap-1">
              <Star size={12} className="sm:w-[14px] sm:h-[14px]" fill="#FBBF24" stroke="none" />
              <Star size={12} className="sm:w-[14px] sm:h-[14px]" fill="#FBBF24" stroke="none" />
              <Star size={12} className="sm:w-[14px] sm:h-[14px]" fill="#FBBF24" stroke="none" />
              <Star size={12} className="sm:w-[14px] sm:h-[14px]" fill="#FBBF24" stroke="none" />
              <Star size={12} className="sm:w-[14px] sm:h-[14px]" stroke="#D1D5DB" />
              <span className="text-[12px] sm:text-[13px] text-[#6B7280] ml-1">
                {car.rating}
              </span>
            </div>

            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md bg-[#DBEAFE] text-[#2563EB] text-[11px] sm:text-[12px] font-medium w-fit">
              Available {car.availableUnits} Unit
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-[12px] sm:text-[13px] text-[#6B7280] mt-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <img src="/assets/gas-station.png" alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80 shrink-0" />
              <span>{car.specs.fuel}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <img src="/assets/manual-auto-icon.png" alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80 shrink-0" />
              <span className="truncate max-w-[140px] sm:max-w-none">{car.specs.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <img src="/assets/people-icon.png" alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80 shrink-0" />
              {car.specs.capacity}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 flex-shrink-0 border-t border-[#E5E7EB] sm:border-t-0 pt-3 sm:pt-0">
        <div className="text-left sm:text-right">
          <span className="text-[12px] sm:text-[13px] text-[#9CA3AF]">Price</span>
          <div className="text-[16px] sm:text-[18px] font-bold text-[#111827]">
            {car.price}
            <span className="text-[12px] sm:text-[13px] font-normal text-[#6B7280] ml-1">
              /days
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cursor-pointer flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg bg-[#426FFD] text-white text-[13px] sm:text-[14px] font-medium hover:bg-[#355EDB] transition shrink-0"
        >
          <img
            src="/assets/View-details-icon.png"
            alt=""
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 brightness-0 invert"
          />
          View Details
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
