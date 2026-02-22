"use client";

import React from "react";
import blackCrent from "../../assets/blackcrent.png";
import blackCarImg from "../../assets/blackcarimg.png";

const AwaitingPayment = () => {
  return (
    <div className="flex items-center justify-center font-sans min-h-[50vh] px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col relative">

        {/* Main Content Area */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row md:justify-between md:items-start gap-6 sm:gap-8 md:gap-8 lg:gap-6">

          {/* Left Side: Text Details */}
          <div className="flex-1 min-w-0 md:min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-3 mb-5 sm:mb-6 md:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-bold text-black tracking-tight leading-tight">
                Awaiting Payment
              </h1>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-base sm:text-lg md:text-[20px] lg:text-[22px] text-gray-800">
                Zaid Jawad your booking has been confirm
              </p>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-bold text-black">Muscat of Oman</h2>
                <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1">
                  Level 15, South Tower, Emirates Financial Tower, DIFC, Dubai
                </p>
              </div>

              <div className="pt-2 sm:pt-4 text-[14px] sm:text-[16px] text-black space-y-1">
                <p><span className="font-medium">Mobile:</span> 055 45 67 890</p>
                <p><span className="font-medium">Email:</span> zaid@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: Date & Price Box */}
          <div className="flex flex-col items-center md:items-center md:shrink-0 gap-4">
            {/* Outlined Date Box - blue-gray */}
            <div className="border-[1.5px] border-[#90A3BF] rounded-xl p-3 sm:p-4 md:p-4 w-full max-w-[9rem] sm:w-36 md:w-40 text-center">
              <p className="text-[#90A3BF] text-4xl sm:text-[44px] md:text-[48px] font-bold leading-none">26</p>
              <p className="text-[#90A3BF] text-base sm:text-[18px] md:text-[20px] font-medium">February</p>
              <p className="text-[#90A3BF] text-xs sm:text-[13px] md:text-[14px] mt-1">8:30 PM</p>
              <div className="h-[1px] bg-[#90A3BF] my-2 w-full"></div>
              <p className="text-[#90A3BF] text-[9px] sm:text-[10px] uppercase font-bold">
                Booking Reference:
              </p>
              <p className="text-[#90A3BF] text-[11px] sm:text-[12px]">BRK-458921</p>
            </div>

            {/* Price Display - Un paid */}
            <div className="text-center">
              <p className="text-[#90A3BF] text-2xl sm:text-[28px] md:text-[32px] font-bold">$90 Un paid</p>
            </div>
          </div>
        </div>

        {/* Bottom Dark Blue-Gray Banner */}
        <div className="bg-[#596780] sm:h-[110px] md:h-[100px] w-full flex items-center px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-0 relative overflow-hidden">
          <div className="flex items-center gap-3 sm:gap-4 z-10">
            <img
              src={blackCarImg}
              alt="Car Logo"
              className="w-12 sm:w-14 md:w-16 h-auto brightness-0 invert"
            />
            <img
              src={blackCrent}
              alt="Crent"
              className="h-8 sm:h-9 md:h-10 w-auto brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwaitingPayment;
