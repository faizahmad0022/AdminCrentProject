"use client";

import React from "react";
import NissanGTRImg from "../assets/Nissan-GT-R.png";

const BookingHeaderCard = ({
  onNext,
  userName = "Zaid Jawad",
  carImage = NissanGTRImg,
  carName = "Nissan GT-R",
  carSubtitle = "Sport Car",
  rightLabel = "Add Schedule",
  userSubtitle = "Car Booking",
  onPrevious,
  userAvatarSrc = "/assets/User profile picture.png",
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-[16px] shadow-[0px_2px_12px_rgba(0,0,0,0.06)] px-3 py-3 sm:px-5 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 md:gap-8 ${className}`.trim()}
    >
      {/* Left - User */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden bg-[#F5F5F5] shrink-0">
          <img
            src={userAvatarSrc}
            alt={userName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[15px] sm:text-[17px] font-bold text-[#1A202C] truncate">{userName}</p>
          <p className="text-[12px] sm:text-[13px] text-[#888888]">{userSubtitle}</p>
        </div>
      </div>

      {/* Middle - Car */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-shrink-0">
        <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
          <img
            src={carImage}
            alt={carName}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[15px] sm:text-[17px] font-bold text-[#1A202C] truncate">{carName}</p>
          <p className="text-[12px] sm:text-[13px] text-[#888888]">{carSubtitle}</p>
        </div>
      </div>

      {/* Right - Label + Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 justify-end flex-shrink-0">
        <span className="text-[15px] sm:text-[17px] font-bold text-[#1A202C] text-center sm:text-left order-last sm:order-none">{rightLabel}</span>
        <div className="flex items-center gap-2 sm:gap-3 justify-end sm:justify-end">
          <button
            type="button"
            onClick={onPrevious}
            className="cursor-pointer min-w-[140px] py-3 rounded-xl bg-[#DBEAFE] text-[#1E293B] font-bold text-base"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            className="cursor-pointer min-w-[140px] py-3 rounded-xl bg-[#3563E9] text-white font-bold text-base shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingHeaderCard;
