"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Upload } from 'lucide-react';
import carImg from "../../assets/Nissan-GT-R.png";
import CarVerticaleBackground from '../../assets/Car-verticale-background.png';

const ConsumerRegistrationInformationForm = () => {
  return (
    <div className="bg-[#F6F7F9] font-sans text-slate-900">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <h1 className="text-xl font-bold whitespace-nowrap">Register New Vehicle</h1>
          
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm 
                  ${step === 1 ? 'bg-[#3563E9] text-white' : 'bg-white border border-slate-200 text-slate-400'}`}>
                  {step}
                </div>
                {step < 4 && <div className={`w-12 h-1 ${step === 1 ? 'bg-[#3563E9]' : 'bg-slate-100'} rounded-full`}></div>}
              </React.Fragment>
            ))}
          </div>

          <div className="flex gap-4">
            <Link to="/additional-payment-form" className="inline-block px-10 py-2.5 bg-[#E0E9FD] text-[#1A202C] font-bold rounded-lg hover:bg-blue-100 transition-colors text-center no-underline">Previous</Link>
            <Link to="/select-vehicle" className="inline-block px-12 py-2.5 bg-[#3563E9] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-center no-underline">Next</Link>
          </div>
        </div>

        {/* Blue Section Wrapper */}
        <div className="relative rounded-[32px] overflow-hidden">
          <img
            src={CarVerticaleBackground}
            alt=""
            className="w-full h-full object-cover absolute inset-0"
          />

          <div className="relative z-10 p-6 sm:p-10 flex flex-col gap-8">
            {/* Top Car Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-slate-100">
                  <img src={carImg} alt="Car" className="w-24 h-auto mb-2 object-contain" />
                  <p className="font-bold text-sm mb-2 text-slate-700">Nissan GT – R</p>
                  <span className="px-3 py-1 bg-[#E7F9F1] text-[#2CCB82] text-xs font-bold rounded-full">Completed</span>
                </div>
              ))}
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-[24px] p-8 shadow-xl">
              <h2 className="text-xl font-bold mb-8 text-slate-800">Basic Information</h2>

              {/* The Grid Layout: 3 columns to match the image exactly */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                <FormInput label="Car name" placeholder="Toyota Corolla" />
                <FormInput label="Brand" placeholder="Toyota" />
                <FormInput label="Model Year" placeholder="2003" />
                
                <FormInput label="Registration Number" placeholder="ABC-1234" />
                <FormInput label="Registration City" placeholder="Sohar" />
                <FormInput label="Chassis Number" placeholder="JTD8E32K520175902" />
                
                <FormInput label="Odometer Reading (mileage)" placeholder="25,000 km" />
                <FormInput label="Condition" placeholder="New" />
                <FormInput label="Fuel Efficiency" placeholder="12 km/litre" />
                
                <FormInput label="Location (City / Branch)" placeholder="Muscat / AL Khuwair" />
                <FormInput label="Color" placeholder="White" />

                {/* Upload Section: Positioned in the 3rd column of the last row */}
                <div className="md:col-start-3 md:row-start-4 md:row-span-2">
                  <div className="bg-[#F6F7F9] rounded-2xl flex flex-col items-center justify-center p-8 h-full min-h-[180px] cursor-pointer hover:bg-slate-50 transition-colors border-none">
                    <div className="w-12 h-12 bg-[#3563E9] rounded-full flex items-center justify-center text-white mb-4 shadow-md">
                      <Upload size={20} />
                    </div>
                    <h3 className="text-base font-bold mb-1">Upload your car picture</h3>
                    <p className="text-[#90A3BF] text-sm font-medium">Drag and drop here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Form Input Component
const FormInput = ({ label, placeholder }) => (
  <div className="flex flex-col gap-3">
    <label className="font-bold text-slate-800 text-[15px]">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder} 
      className="w-full bg-[#F6F7F9] border-none rounded-xl p-4 text-slate-600 font-medium placeholder:text-slate-300 focus:ring-2 focus:ring-blue-100 outline-none"
    />
  </div>
);

export default ConsumerRegistrationInformationForm;