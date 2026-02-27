"use client";

import React from "react";
// Image import as it is
import LineImg from "../../assets/lineimges.png"; 
import { Edit, Fuel, Settings } from "lucide-react";
import NissanGTRImg from "../../assets/Nissan-GT-R.png";
import CarVerticaleBackground from "../../assets/Car-verticale-background.png";

const BLUE_PRIMARY = "#3563E9";

const ConsumerCarDetail = () => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen p-3 md:p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
        <h2 className="font-bold text-[#111827] text-lg whitespace-nowrap">
          Register New Vehicle
        </h2>

        <div className="w-full lg:flex-1 flex justify-center px-2 md:px-6">
          <div className="flex items-center justify-between w-full max-w-md relative">
            {[1, 2, 3, 4].map((step, index) => (
              <React.Fragment key={step}>
                <div
                  className="z-10 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm shrink-0"
                  style={{ backgroundColor: BLUE_PRIMARY }}
                >
                  {step}
                </div>
                {index !== 3 && (
                  <div
                    className="flex-1 h-[3px] mx-[-1px] rounded-full"
                    style={{ backgroundColor: BLUE_PRIMARY }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto">
          <button className="flex-1 lg:px-8 py-2.5 rounded-xl bg-[#DBEAFE] text-[#1E40AF] font-bold text-sm transition hover:bg-blue-200">
            Previous
          </button>
          <button
            className="flex-1 lg:px-10 py-2.5 rounded-xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style={{ backgroundColor: BLUE_PRIMARY }}
          >
            Next
          </button>
        </div>
      </div>

      <div className="relative rounded-[2rem] overflow-hidden max-w-7xl mx-auto">
        <img
          src={CarVerticaleBackground}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="relative z-10 p-4 md:p-6 lg:p-8 flex flex-col gap-6">
          
          {/* Car Summary Header Card */}
          <div className="bg-white rounded-[1.2rem] md:rounded-[1.5rem] p-4 lg:py-4 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-lg border border-white/20">
            
            <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
              
              {/* Car Image Box - RE-FIXED */}
              <div 
                className="w-full max-w-[240px] lg:w-38 h-28 lg:h-20 rounded-xl overflow-hidden relative shrink-0 shadow-md flex items-center justify-center p-2"
                style={{ backgroundColor: BLUE_PRIMARY }}
              >
                {/* 1. Background Line Image - Opacity 100% kardi taake nazar aaye */}
                <img 
                  src={LineImg} 
                  alt="bg-lines" 
                  className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none" 
                />
                
                {/* 2. Glow effect (Optional, lines ke niche rakha hai) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_80%)] z-1" />
                
                {/* 3. Car Image (Iska Z-index 10 hai taake ye lines ke upar rahe) */}
                <img src={NissanGTRImg} alt="Car" className="w-full h-full object-contain z-10 drop-shadow-2xl" />
              </div>

              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-0">2003</p>
                <h1 className="text-lg md:text-xl xl:text-2xl font-black text-gray-900 leading-tight mb-1">Toyota Corolla</h1>
                <div className="inline-block px-3 py-1 bg-[#DDE7FF] text-[#3563E9] rounded-md text-[10px] font-bold border border-[#C5D5FF]">
                  ABC-1234
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-6 xl:gap-10 text-gray-500 w-full lg:w-auto border-t lg:border-t-0 pt-3 lg:pt-0 border-gray-100">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-gray-400" />
                <span className="text-[11px] md:text-xs font-semibold text-gray-600">(7)Manual (5)Auto</span>
              </div>
              <div className="flex items-center gap-2">
                <Fuel className="w-4 h-4 text-gray-400" />
                <span className="text-[11px] md:text-xs font-semibold text-gray-600">80L</span>
              </div>
            </div>

            <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-[#3563E9] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-700 transition shadow-md whitespace-nowrap">
              <Edit className="w-3.5 h-3.5" />
              Edit Basic Information
            </button>
          </div>

          <div className="bg-white rounded-[1.5rem] p-5 md:p-7 shadow-xl">
            <h2 className="text-lg font-black text-gray-900 mb-6 tracking-tight">Specification</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-5">
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
  <div className="flex flex-col gap-1.5">
    <label className="text-[12px] font-bold text-gray-900">{label}</label>
    <div className="w-full bg-[#F6F7F9] rounded-lg px-4 py-3 text-xs md:text-sm text-gray-400 font-semibold border border-transparent shadow-sm">
      {value}
    </div>
  </div>
);

export default ConsumerCarDetail;