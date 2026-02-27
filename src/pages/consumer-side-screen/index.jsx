"use client";

import React from "react";
import { Edit, Fuel, Settings } from "lucide-react";
import CarVerticaleBackground from "../../assets/Car-verticale-background.png";
import SmallLookCar from "../../assets/smalllookcar.png"

const BLUE_PRIMARY = "#3563E9";

const ConsumerCarDetail = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md px-4 sm:px-10 py-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 mb-6">
        <h2 className="font-bold text-[#111827] text-lg sm:text-xl whitespace-nowrap">
          Register New Vehicle
        </h2>

        {/* Stepper - uniform blue circles + blue connecting lines */}
        <div className="flex-1 flex justify-center px-6">
          <div className="flex items-center w-full max-w-md">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className="flex items-center flex-1 last:flex-none">
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm"
                  style={{ backgroundColor: BLUE_PRIMARY }}
                >
                  {step}
                </div>
                {index !== 3 && (
                  <div
                    className="flex-1 h-[6px] mx-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: BLUE_PRIMARY }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="px-8 sm:px-12 py-3 rounded-xl bg-[#DBEAFE] text-[#1E40AF] font-bold text-sm sm:text-base transition hover:bg-blue-200">
            Previous
          </button>
          <button
            className="px-10 sm:px-16 py-3 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg hover:opacity-90 transition"
            style={{ backgroundColor: BLUE_PRIMARY }}
          >
            Next
          </button>
        </div>
      </div>

      {/* 2. Blue Section Wrapper */}
      <div className="relative rounded-3xl overflow-hidden max-w-7xl mx-auto">
        <img
          src={CarVerticaleBackground}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="relative z-10 p-6 sm:p-10 flex flex-col gap-8">
          
          {/* Car Summary Header Card */}
          <div className="bg-white rounded-3xl p-6 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Car Image with Styled Blue Background */}
              <div className="w-56 h-32 rounded-2xl overflow-hidden bg-[#3563E9] flex items-center justify-center p-4 relative shadow-inner">
                <img src={SmallLookCar} alt="Car" className="w-full h-full object-contain z-10 drop-shadow-lg" />
                {/* Visual "diagonal lines" pattern effect */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white via-transparent to-black" />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-sm font-semibold mb-1">2003</p>
                <h1 className="text-3xl font-black text-gray-900 leading-tight mb-2">Toyota Corolla</h1>
                <div className="inline-block px-4 py-1.5 bg-[#DDE7FF] text-[#3563E9] rounded-lg text-sm font-bold border border-[#C5D5FF]">
                  ABC-1234
                </div>
              </div>

              {/* Quick Specs Icons */}
              <div className="flex items-center gap-8 ml-0 sm:ml-6 text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-50 rounded-full border border-gray-100">
                    <Settings className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600">(7) Manual (5) Auto</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-50 rounded-full border border-gray-100">
                    <Fuel className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600">80L</span>
                </div>
              </div>
            </div>

            <button className="w-full lg:w-auto flex items-center justify-center gap-3 bg-[#3563E9] text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-md whitespace-nowrap">
              <Edit className="w-5 h-5" />
              Edit Basic Information
            </button>
          </div>

          {/* Specifications Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-xl font-black text-gray-900 mb-10 tracking-tight">Specification</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
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
  <div className="flex flex-col gap-3">
    <label className="text-[15px] font-bold text-gray-900">{label}</label>
    <div className="w-full bg-[#F6F7F9] rounded-xl px-5 py-5 text-sm sm:text-base text-gray-400 font-semibold border border-transparent focus-within:border-blue-100 transition shadow-sm">
      {value}
    </div>
  </div>
);

export default ConsumerCarDetail;