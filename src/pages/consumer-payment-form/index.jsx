"use client";

import { 
    ChevronRight, 
    Edit3, 
    Fuel, 
    Settings, 
    ChevronLeft, 
    Car 
} from "lucide-react";
import React from "react";
import smalllookcar from "../../assets/smalllookcar.png";

const BLUE_PRIMARY = "#3563E9";

const ConsumerPaymentForm = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-700">
      {/* Top Navigation Bar */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-bold text-lg text-slate-800">Register New Vehicle</h1>
        
        {/* Stepper - uniform blue circles + blue connecting lines */}
        <div className="flex items-center gap-2 md:gap-4">
          {[1, 2, 3, 4].map((step) => (
            <React.Fragment key={step}>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm"
                style={{ backgroundColor: BLUE_PRIMARY }}
              >
                {step}
              </div>
              {step < 4 && (
                <div
                  className="w-8 md:w-16 h-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: BLUE_PRIMARY }}
                />
              )}
            </React.Fragment>
          ))}
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

      {/* Main Form Container (The Blue Gradient Background) */}
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-blue-500 to-blue-700 rounded-3xl p-6 md:p-10 shadow-2xl">
        
        {/* Vehicle Summary Card */}
        <div className="bg-white rounded-2xl p-4 md:p-6 mb-8 flex flex-wrap items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-6">
            {/* Vehicle Image Placeholder */}
            <div className="w-32 h-20 bg-blue-600 rounded-xl flex items-center justify-center p-1 overflow-hidden">
                <img 
                    src={smalllookcar} 
                    alt="Toyota Corolla"
                    className="object-cover w-full h-full opacity-90"
                />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium">2003</p>
              <h2 className="text-2xl font-black text-slate-800">Toyota Corolla</h2>
              <span className="bg-blue-50 text-blue-600 px-3 py-0.5 rounded text-xs font-bold border border-blue-100">
                ABC-1234
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-400" />
              <span>(7)Manual (5) Auto</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-5 h-5 text-blue-400" />
              <span>80L</span>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all">
              <Edit3 className="w-4 h-4" />
              Edit Basic Information
            </button>
          </div>
        </div>

        {/* Pricing Form Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-inner">
          
          {/* Base Price Section */}
          <section className="mb-10">
            <h3 className="text-lg font-black text-slate-800 mb-6">Base Price</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField label="Rate Type" placeholder="Hourly" />
              <InputField label="Rate Amount" placeholder="10 OMR Hour" />
              <InputField label="Minimum Booking" placeholder="2 Hour" />
            </div>
          </section>

          {/* Additional Charges Section */}
          <section className="mb-10">
            <h3 className="text-lg font-black text-slate-800 mb-6">Additional Charges</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField label="Fuel Charges" placeholder="3 OMR" />
              <InputField label="Extra KM Charges" placeholder="2 OMR" />
              <InputField label="Driver Charges" placeholder="10 OMR" />
            </div>
          </section>

          {/* Discount Offers Section */}
          <section className="mb-10">
            <h3 className="text-lg font-black text-slate-800 mb-6">Discount Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Promo Code" placeholder="Save 10 OMR" />
              <InputField label="Discount Amount" placeholder="2 OMR" />
            </div>
          </section>

          {/* Tax / Vat Section */}
          <section>
            <h3 className="text-lg font-black text-slate-800 mb-6">Tax / Vat</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Tax Rate" placeholder="5 %" />
              <InputField label="Tax Amout" placeholder="0.5 OMR" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

/**
 * Reusable Input Field Component
 */
const InputField = ({ label, placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-700 block">{label}</label>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="w-full bg-slate-50 border border-transparent border-b-slate-100 rounded-xl p-4 text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-300"
    />
  </div>
);

export default ConsumerPaymentForm; 