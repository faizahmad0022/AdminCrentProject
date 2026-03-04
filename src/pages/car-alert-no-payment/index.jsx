"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import lineimges from '../../assets/lineimges.png';
import smalllookcar from '../../assets/smalllookcar.png'; 
import { Phone, Mail, Plus, Calendar, MessageSquare, ChevronDown, X } from 'lucide-react';

const CarBookingAlert = () => {
  const [showToast, setShowToast] = useState(true);
  const navigate = useNavigate(); // Hook for internal redirection

  return (
    <div className="bg-[#F6F7F9] font-sans text-slate-800 p-4 md:p-8 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* TOASTER NOTIFICATION */}
        {showToast && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300 bg-[#FFF5F5] border border-[#FF4D4D] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg relative">
            <div className="flex items-start gap-4">
              <div className="bg-[#ED3F3F] rounded-full p-2.5 mt-1 shadow-sm">
                <X className="text-white w-5 h-5 stroke-[3px]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 leading-tight">No Payment</h2>
                <p className="text-sm text-slate-500 font-medium">Customer failed to make the required payment</p>
                <p className="text-xs text-slate-400 mt-1">10 mins ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="flex gap-2 mr-2">
                {/* Redirects to Inbox */}
                <button 
                  onClick={() => navigate("/inbox")}
                  className="p-2.5 bg-[#3563E9] rounded-xl text-white hover:bg-blue-700 transition-all shadow-sm"
                >
                  <Mail size={18} />
                </button>
                <button 
                  onClick={() => navigate("/inbox")}
                  className="p-2.5 bg-[#3563E9] rounded-xl text-white hover:bg-blue-700 transition-all shadow-sm"
                >
                  <MessageSquare size={18} />
                </button>
              </div>
              <button
                onClick={() => navigate("/additional-payment-form")}
                className="bg-[#3563E9] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm text-sm"
              >
                Take an Action
              </button>
            </div>

            <button
              onClick={() => setShowToast(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Action Buttons Toolbar - REDIRECTS TO INBOX */}
        <div className="flex gap-2.5 pt-2">
          {/* Phone Icon -> Inbox */}
          <button 
            onClick={() => navigate("/inbox")} 
            className="p-3 bg-[#3563E9] rounded-xl text-white shadow-md hover:scale-105 transition-transform flex items-center justify-center"
          >
            <Phone size={20} />
          </button>
          
          {/* Email Icon -> Inbox */}
          <button 
            onClick={() => navigate("/inbox")} 
            className="p-3 bg-[#3563E9] rounded-xl text-white shadow-md hover:scale-105 transition-transform flex items-center justify-center"
          >
            <Mail size={20} />
          </button>

          <button className="p-3 bg-[#3563E9] rounded-xl text-white shadow-md hover:scale-105 transition-transform">
            <Plus size={20} />
          </button>
          
          <button className="p-3 bg-[#3563E9] rounded-xl text-white shadow-md hover:scale-105 transition-transform">
            <Calendar size={20} />
          </button>
        </div>

        {/* Details Card */}
        <div className="bg-white rounded-[20px] p-8 shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-8 text-slate-900 tracking-tight">Details Rental</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map Section */}
            <div className="relative bg-[#f8f9fb] rounded-2xl overflow-hidden min-h-80 border border-slate-100 shadow-inner">
               <svg viewBox="0 0 400 300" className="w-full h-full opacity-60">
                  <rect width="400" height="300" fill="#f0f2f5" />
                  <path d="M0 50 L400 50 M0 150 L400 150 M0 250 L400 250 M100 0 L100 300 M250 0 L250 300" stroke="#fff" strokeWidth="8" />
                  <path d="M120 220 L100 80 L210 70" fill="none" stroke="#3563E9" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="210" cy="70" r="7" fill="#3563E9" stroke="white" strokeWidth="2.5" />
               </svg>
            </div>

            {/* Car Information */}
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-36 h-24 bg-[#3563E9] rounded-xl relative overflow-hidden flex items-center justify-center">
                   <img src={lineimges} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                   <img src={smalllookcar} alt="Car" className="w-24 h-auto object-contain z-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">Nissan GT – R</h4>
                  <p className="text-slate-500 font-semibold text-sm">Sport Car</p>
                </div>
              </div>

              <div className="space-y-8">
                <BookingSection title="Pick – Up" color="#3563E9" borderColor="border-blue-100" />
                <BookingSection title="Drop – Off" color="#54A6FF" borderColor="border-sky-50" />
              </div>

              <div className="mt-12 flex items-end justify-between border-t border-slate-50 pt-8">
                <p className="text-xl font-bold text-slate-900">Total Rental Price</p>
                <div className="text-[48px] font-extrabold text-slate-900">$80.00</div>
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
    <div className="flex items-center gap-2.5 mb-4">
      <div className={`w-4 h-4 rounded-full border-[4px] ${borderColor}`} style={{ backgroundColor: color }}></div>
      <span className="font-bold text-slate-900">{title}</span>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <DetailItem label="Locations" value="Kota Semarang" />
      <DetailItem label="Date" value="20 July 2022" />
      <DetailItem label="Time" value="07.00" />
    </div>
  </div>
);

const DetailItem = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-[14px] font-bold text-slate-900">{label}</p>
    <div className="flex items-center justify-between text-slate-400">
      <span className="text-[12px] font-semibold">{value}</span>
      <ChevronDown size={14} />
    </div>
  </div>
);

export default CarBookingAlert;