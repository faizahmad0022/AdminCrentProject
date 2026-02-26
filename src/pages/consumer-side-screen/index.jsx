"use client";

import React from "react";
import { Edit, Fuel, Settings } from "lucide-react";
import CarVerticaleBackground from "../../assets/Car-verticale-background.png";
import SmallLookCar from "../../assets/smalllookcar.png"

const BLUE_PRIMARY = "#3563E9";

const ConsumerCarDetail = () => {
  return (
    <div className="font-sans min-h-screen bg-[#F8F8F8] px-3 py-4 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full bg-white rounded-xl sm:rounded-2xl shadow-md px-3 py-4 sm:px-6 sm:py-5 md:px-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
        <h2 className="font-bold text-[#111827] text-base sm:text-lg md:text-xl whitespace-nowrap text-center sm:text-left order-first sm:order-none">
          Register New Vehicle
        </h2>

        {/* Stepper - uniform blue circles + blue connecting lines */}
        <div className="flex-1 flex justify-center px-2 sm:px-4 md:px-6 min-w-0">
          <div className="flex items-center w-full max-w-md">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className="flex items-center flex-1 last:flex-none min-w-0">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-sm flex-shrink-0"
                  style={{ backgroundColor: BLUE_PRIMARY }}
                >
                  {step}
                </div>
                {index !== 3 && (
                  <div
                    className="flex-1 h-[5px] sm:h-[6px] mx-0.5 sm:mx-1 rounded-full flex-shrink-0 min-w-0"
                    style={{ backgroundColor: BLUE_PRIMARY }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 justify-center sm:justify-end order-last sm:order-none">
          <button className="min-w-[140px] py-3 rounded-xl bg-[#DBEAFE] text-[#1E293B] font-bold text-base transition hover:bg-blue-200">
            Previous
          </button>
          <button className="min-w-[140px] py-3 rounded-xl bg-[#3563E9] text-white font-bold text-base shadow-md transition hover:opacity-90">
            Next
          </button>
        </div>
      </div>

      {/* 2. Blue Section Wrapper */}
      <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden max-w-7xl mx-auto w-full">
        <img
          src={CarVerticaleBackground}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6 md:gap-8">
          
          {/* Car Summary Header Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 w-full lg:w-auto">
              {/* Car Image with Styled Blue Background */}
              <div className="w-full max-w-[14rem] sm:w-48 sm:max-w-none md:w-56 h-24 sm:h-28 md:h-32 rounded-xl sm:rounded-2xl overflow-hidden bg-[#3563E9] flex items-center justify-center p-3 sm:p-4 relative shadow-inner flex-shrink-0">
                <img src={SmallLookCar} alt="Car" className="w-full h-full object-contain z-10 drop-shadow-lg" />
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white via-transparent to-black" />
              </div>

              <div className="text-center sm:text-left min-w-0">
                <p className="text-gray-400 text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">2003</p>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-1.5 sm:mb-2">Toyota Corolla</h1>
                <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-[#DDE7FF] text-[#3563E9] rounded-lg text-xs sm:text-sm font-bold border border-[#C5D5FF]">
                  ABC-1234
                </div>
              </div>

              {/* Quick Specs Icons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 ml-0 sm:ml-0 md:ml-6 text-gray-500">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-gray-50 rounded-full border border-gray-100">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600">(7) Manual (5) Auto</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-gray-50 rounded-full border border-gray-100">
                    <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600">80L</span>
                </div>
              </div>
            </div>

            <button className="w-full lg:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-[#3563E9] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-sm font-bold hover:bg-blue-700 transition shadow-md whitespace-nowrap flex-shrink-0">
              <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
              Edit Basic Information
            </button>
          </div>

          {/* Specifications Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-6 sm:mb-8 md:mb-10 tracking-tight">Specification</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 md:gap-x-16 gap-y-4 sm:gap-y-6 md:gap-y-10">
              <SpecField label="Engine Capacity" value="1500 cc" />
              <SpecField label="Engine Type" value="Inline-4 DOHC VVT-i" />
              <SpecField label="Horsepower" value="120 HP" />
              
              <SpecField label="Torque" value="145 Nm" />
              <SpecField label="Transmission" value="Automatic" />
              <SpecField label="Drive type" value="FWD" />
              
              <SpecField label="Top Speed" value="180 km/h" />
              <SpecField label="Acceleration (0-100 km/h)" value="10.5 sec" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const SpecField = ({ label, value }) => (
  <div className="flex flex-col gap-2 sm:gap-3 min-w-0">
    <label className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-gray-900 break-words">{label}</label>
    <div className="w-full bg-[#F6F7F9] rounded-lg sm:rounded-xl px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 text-xs sm:text-sm md:text-base text-gray-400 font-semibold border border-transparent focus-within:border-blue-100 transition shadow-sm min-w-0">
      {value}
    </div>
  </div>
);

export default ConsumerCarDetail;