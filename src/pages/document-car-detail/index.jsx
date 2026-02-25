"use client";

import React from "react";
import { Edit, Fuel, Settings, CloudUpload, FileText, Eye, X, Loader2 } from "lucide-react";
import CarVerticaleBackground from "../../assets/Car-verticale-background.png";
import SmallLookCar from "../../assets/smalllookcar.png";

const BLUE_PRIMARY = "#3563E9";

const DocumentCarDetail = () => {
  return (
    <div className="bg-[#F8F8F8]">
      {/* 1. Header Navigation Bar */}
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
          <button className="px-8 sm:px-12 py-2.5 rounded-lg bg-[#E0E7FF] text-[#1F2937] font-bold text-sm sm:text-base">
            Previous
          </button>
          <button
            className="px-10 sm:px-16 py-2.5 rounded-lg text-white font-bold text-sm sm:text-base shadow-md"
            style={{ backgroundColor: BLUE_PRIMARY }}
          >
            Next
          </button>
        </div>
      </div>

      {/* 2. Blue Section Container */}
      <div className="relative rounded-sm overflow-hidden max-w-7xl mx-auto">
        <img
          src={CarVerticaleBackground}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="relative z-10 p-6 sm:p-10 flex flex-col gap-8">
          
          {/* Car Summary Header */}
          <div className="bg-white rounded-3xl p-6 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Patterned Blue Car Box */}
              <div className="w-40 h-20 rounded-xl overflow-hidden bg-[#3563E9] flex items-center justify-center relative shadow-inner">
                <img src={SmallLookCar} alt="Car" className="w-full h-full object-contain z-10" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:10px_10px]" />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-sm font-semibold">2003</p>
                <h1 className="text-2xl font-black text-gray-900 mb-1">Toyota Corolla</h1>
                <div className="inline-block px-3 py-1 bg-[#DDE7FF] text-[#3563E9] rounded text-xs font-bold border border-[#C5D5FF]">
                  ABC-1234
                </div>
              </div>

              <div className="flex items-center gap-6 ml-0 sm:ml-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  <span className="text-xs font-bold">(7) Manual (5) Auto</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="w-5 h-5" />
                  <span className="text-xs font-bold">80L</span>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-[#3563E9] text-white px-6 py-3 rounded-sm text-sm font-bold shadow-md">
              <Edit className="w-4 h-4" />
              Edit Basic Information
            </button>
          </div>

          {/* Upload Documents Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl">
            <h2 className="text-lg font-black text-gray-900 mb-6">Upload Documents</h2>
            
            {/* Drag & Drop Area */}
            <div className="border-2 border-dashed border-gray-200 rounded-3xl p-10 flex flex-col items-center justify-center gap-4 bg-white mb-8">
               <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                  <CloudUpload className="w-8 h-8 text-gray-800" />
               </div>
               <div className="text-center">
                  <p className="text-gray-900 font-bold text-lg">Choose a file or drag & drop it here</p>
                  <p className="text-gray-400 text-xs mt-1">JPEG, PNG, PDG, and MP4 formats, up to 50MB</p>
               </div>
               <button className="mt-2 px-8 py-2 border border-gray-200 rounded-lg text-gray-800 font-bold text-sm bg-white hover:bg-gray-50 transition">
                 Browse File
               </button>
            </div>

            {/* Uploaded Files List */}
            <div className="space-y-4">
              {/* File 1: Uploading State */}
              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                <FileText className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-gray-800 truncate">Car-Document.pdf</span>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>60 KB of 120 KB</span>
                      <Loader2 className="w-3 h-3 animate-spin text-blue-500" />
                      <span className="text-blue-500 font-bold">Uploading...</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-1/2 rounded-full" />
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-50 rounded-full text-gray-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* File 2: Completed */}
              <div className="bg-[#F8F9FB] rounded-xl p-4 flex items-center gap-4">
                <FileText className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800">Car-Document.pdf</span>
                    <span className="text-xs text-gray-400">60 KB of 120 KB •</span>
                  </div>
                </div>
                <button className="p-2 bg-blue-500 text-white rounded-lg shadow-md">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* File 3: Completed */}
              <div className="bg-[#F8F9FB] rounded-xl p-4 flex items-center gap-4">
                <FileText className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800">Car-Document.pdf</span>
                    <span className="text-xs text-gray-400">60 KB of 120 KB •</span>
                  </div>
                </div>
                <button className="p-2 bg-blue-500 text-white rounded-lg shadow-md">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCarDetail;