"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Plus, 
  Calendar, 
  MessageSquare, 
  ChevronDown, 
  X 
} from 'lucide-react';

// Fixed paths: moving up 3 levels to reach src/assets
import smalllookcar from '../../../assets/smalllookcar.png'; 
import lineimges from '../../../assets/lineimges.png';

const AdditionalCustomerCharges = () => {
  const [showToast, setShowToast] = useState(true);

  return (
    <div className="min-h-screen bg-[#F6F7F9] p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* TOASTER: Refuse to pay extra kilometers fee */}
        {showToast && (
          <div className="bg-[#FFF5F5] border border-[#FF4D4D] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md animate-in fade-in slide-in-from-top-2 relative">
            <div className="flex items-center gap-4">
              <div className="bg-[#ED3F3F] rounded-full p-3 shadow-sm flex items-center justify-center">
                <X className="text-white w-6 h-6 stroke-[3px]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 leading-tight">Refuse to pay extra kilometers fee</h2>
                <p className="text-sm text-slate-500 font-medium">Customer declined to pay additional kilometer charges</p>
                <p className="text-xs text-slate-400 mt-1">10 mins ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button className="p-2.5 bg-[#3563E9] rounded-xl text-white hover:bg-blue-700 transition-all">
                  <Mail size={20} />
                </button>
                <button className="p-2.5 bg-[#3563E9] rounded-xl text-white hover:bg-blue-700 transition-all">
                  <MessageSquare size={20} />
                </button>
              </div>
              <button className="bg-[#3563E9] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap">
                Take and action
              </button>
              
              <button 
                onClick={() => setShowToast(false)}
                className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Toolbar Buttons */}
        <div className="flex gap-3">
          <button className="p-3 bg-[#3563E9] rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors"><Phone size={20} /></button>
          <button className="p-3 bg-[#3563E9] rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors"><Mail size={20} /></button>
          <button className="p-3 bg-[#3563E9] rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors"><Plus size={20} /></button>
          <button className="p-3 bg-[#3563E9] rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors"><Calendar size={20} /></button>
        </div>

        {/* Details Card */}
        <div className="bg-white rounded-[20px] p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-8 text-slate-900">Details Rental</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Map Placeholder */}
            <div className="relative bg-[#f8f9fb] rounded-2xl overflow-hidden min-h-[350px] border border-slate-100">
               <svg viewBox="0 0 400 300" className="w-full h-full opacity-60">
                  <rect width="400" height="300" fill="#f0f2f5" />
                  <path d="M0 50 L400 50 M0 150 L400 150 M0 250 L400 250 M100 0 L100 300 M250 0 L250 300" stroke="#fff" strokeWidth="8" />
                  <path d="M120 220 L100 80 L220 70" fill="none" stroke="#3563E9" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="220" cy="70" r="7" fill="#3563E9" stroke="white" strokeWidth="3" />
                  <rect x="40" y="80" width="50" height="40" fill="#A3D1FF" rx="4" />
                  <rect x="90" y="180" width="35" height="55" fill="#A3D1FF" rx="4" />
               </svg>
            </div>

            {/* Information Section */}
            <div className="flex flex-col justify-between">
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-40 h-28 flex items-center justify-center">
                   <img 
                    src={lineimges} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" 
                   />
                   <img 
                    src={smalllookcar} 
                    alt="Nissan GT-R" 
                    className="w-30 h-auto object-contain z-10 drop-shadow-2xl" 
                   />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-bold tracking-tight text-slate-900 leading-none">Nissan GT – R</h4>
                    <span className="text-slate-400 font-semibold text-base">#9761</span>
                  </div>
                  <p className="text-slate-500 font-medium text-lg mt-2">Sport Car</p>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-5 h-5 rounded-full border-[5px] border-blue-100 bg-[#3563E9]"></div>
                    <span className="font-bold text-lg text-slate-900">Pick – Up</span>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <DetailItem label="Locations" value="Kota Semarang" />
                    <DetailItem label="Date" value="20 July 2022" />
                    <DetailItem label="Time" value="07.00" />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-5 h-5 rounded-full border-[5px] border-sky-100 bg-[#54A6FF]"></div>
                    <span className="font-bold text-lg text-slate-900">Drop – Off</span>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <DetailItem label="Locations" value="Kota Semarang" />
                    <DetailItem label="Date" value="21 July 2022" />
                    <DetailItem label="Time" value="01.00" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full mt-10 mb-8"></div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 leading-tight">Total Rental Price</p>
                  <p className="text-sm text-slate-400 font-medium mt-1">Overall price and includes rental discount</p>
                </div>
                <div className="text-[52px] font-bold text-slate-900 leading-none tracking-tight">$80.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="space-y-2">
    <p className="text-base font-bold text-slate-900">{label}</p>
    <div className="flex items-center justify-between group cursor-pointer pr-2">
      <span className="text-sm text-slate-400 font-semibold">{value}</span>
      <ChevronDown size={18} className="text-slate-400" />
    </div>
  </div>
);

export default AdditionalCustomerCharges;