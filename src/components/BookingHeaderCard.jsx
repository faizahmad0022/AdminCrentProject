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
      className={`bg-white rounded-[16px] shadow-[0px_2px_12px_rgba(0,0,0,0.06)] px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-8 ${className}`.trim()}
    >
      {/* Left - User */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-md overflow-hidden bg-[#F5F5F5]">
          <img
            src={userAvatarSrc}
            alt={userName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-[17px] font-bold text-[#1A202C]">{userName}</p>
          <p className="text-[13px] text-[#888888]">{userSubtitle}</p>
        </div>
      </div>

      {/* Middle - Car */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 flex items-center justify-center">
          <img
            src={carImage}
            alt={carName}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p className="text-[17px] font-bold text-[#1A202C]">{carName}</p>
          <p className="text-[13px] text-[#888888]">{carSubtitle}</p>
        </div>
      </div>

      {/* Right - Label + Buttons */}
      <div className="flex items-center gap-6 flex-wrap justify-end">
        <span className="text-[17px] font-bold text-[#1A202C]">{rightLabel}</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPrevious}
            className="cursor-pointer px-13 py-2.5 rounded-[8px] bg-[#DDEFFF] text-[#1A202C] text-[15px] font-medium"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            className="cursor-pointer px-14 py-2.5 rounded-[8px] bg-[#2563EB] text-white text-[15px] font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingHeaderCard;
