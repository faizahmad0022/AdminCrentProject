"use client";

import React, { useState } from 'react';
// 1. Import useNavigate
import { useNavigate } from 'react-router-dom';
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
  // 2. Initialize navigate
  const navigate = useNavigate();

  return (
    <div className="bg-[#F6F7F9] font-sans text-slate-800 ">
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
                {/* Redirects to Inbox */}
                <button 
                  onClick={() => navigate("/inbox")}
                  className="p-2.5 bg-[#3563E9] rounded-xl text-white hover:bg-blue-700 transition-all shadow-sm"
                >
                  <Mail size={20} />
                </button>
                <button 
                  onClick={() => navigate("/inbox")}
                  className="p-2.5 bg-[#3563E9] rounded-xl text-white hover:bg-blue-700 transition-all shadow-sm"
                >
                  <MessageSquare size={20} />
                </button>
              </div>
              
              {/* Redirects to Payment Form */}
              <button 
                onClick={() => navigate("/additional-payment-form")}
                className="bg-[#3563E9] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap"
              >
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

        {/* Toolbar Buttons - REDIRECTS TO INBOX */}
        <div className="flex gap-3">
          <button 
            onClick={() => navigate("/inbox")}
            className="p-3 bg-[#3563E9] rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            <Phone size={20} />
          </button>
          <button 
            onClick={() => navigate("/inbox")}
            className="p-3 bg-[#3563E9] rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
          </button>
          <button className="p-3 bg-[#3563E9] rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors">
            <Plus size={20} />
          </button>
          <button className="p-3 bg-[#3563E9] rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors">
            <Calendar size={20} />
          </button>
        </div>

        {/* Details Card */}
        <div className="bg-white rounded-[20px] p-8 shadow-sm border border-slate-100">
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
                <div className="w-40 h-28 bg-[#3563E9] rounded-xl relative overflow-hidden flex items-center justify-center shadow-lg">
                   <img 
                    src={lineimges} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" 
                   />
                   <img 
                    src={smalllookcar} 
                    alt="Nissan GT-R" 
                    className="w-[120px] h-auto object-contain z-10 drop-shadow-2xl" 
                   />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-bold tracking-tight text-slate-900">Nissan GT – R</h4>
                    <span className="text-slate-400 font-semibold text-base">#9761</span>
                  </div>
                  <p className="text-slate-500 font-medium text-lg mt-2">Sport Car</p>
                </div>
              </div>

              <div className="space-y-10">
                <BookingSection title="Pick – Up" color="#3563E9" borderColor="border-blue-100" />
                <BookingSection title="Drop – Off" color="#54A6FF" borderColor="border-sky-100" />
              </div>

              <div className="h-[1px] bg-slate-100 w-full mt-10 mb-8"></div>

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

const BookingSection = ({ title, color, borderColor }) => (
  <div>
    <div className="flex items-center gap-3 mb-5">
      <div className={`w-5 h-5 rounded-full border-[5px] ${borderColor}`} style={{ backgroundColor: color }}></div>
      <span className="font-bold text-lg text-slate-900">{title}</span>
    </div>
    <div className="grid grid-cols-3 gap-6">
      <DetailItem label="Locations" value="Kota Semarang" />
      <DetailItem label="Date" value="20 July 2022" />
      <DetailItem label="Time" value="07.00" />
    </div>
  </div>
);

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