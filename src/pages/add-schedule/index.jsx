"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Phone, 
  MessageCircle, 
  FileText, 
  BarChart2, 
  Star, 
  Calendar, 
  Pencil, 
  Droplet, 
  Disc, 
  Car, 
  CheckCircle2 
} from "lucide-react";
import NissanGTRImg from "../../assets/Nissan-GT-R.png";
import lineImages from "../../assets/lineimges.png";
import BookingHeaderCard from "../../components/BookingHeaderCard";

const AddSchedule = () => {
  const navigate = useNavigate();

  // Data for Maintenance Cards
  const maintenanceTasks = [
    { title: "Oil Change", icon: <Droplet size={24} />, date: "2028-08-10" },
    { title: "Tire Replacement", icon: <Disc size={24} />, date: "2028-08-10" },
    { title: "Scheduled maintenance", icon: <Car size={24} />, date: "2028-08-10" },
    { title: "Unit Return", icon: <Droplet size={24} />, date: "2028-08-10", badge: "306" },
  ];

  // Data for Car Features
  const features = [
    "Air conditioning",
    "Bluetooth Connectivity",
    "USB Chargring ports",
    "Backup Camera",
    "Spacious Trunk",
    "Cruise Control",
    "Keyless Entry"
  ];

  return (
    <div className=" bg-[#F6F7F9] font-sans min-h-screen overflow-x-hidden">
      {/* 1. Header Navigation */}
      <BookingHeaderCard
        userSubtitle="CarBooking"
        carName="Nissan GT - R"
        onPrevious={() => navigate("/select-vehicle")}
        onNext={() => navigate("/payment-form")}
        className="mb-6 sm:mb-8 rounded-2xl shadow-sm border border-[#E5E7EB]"
      />

      {/* 2. Split Main Cards */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 w-full max-w-7xl mx-auto mb-6 sm:mb-8 px-0">
        <div className="relative flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] bg-[#3563E9] rounded-2xl overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${lineImages})`, backgroundSize: '100px' }} />
          <img src={NissanGTRImg} alt="Nissan GT-R" className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] object-contain" />
        </div>

        <div className="flex-1 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col justify-between min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="min-w-0">
              <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-[#1A202C]">Nissan GT - R</h2>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex text-[#FBAD39]"><Star size={16} className="sm:w-[18px] sm:h-[18px]" fill="#FBAD39"/><Star size={16} className="sm:w-[18px] sm:h-[18px]" fill="#FBAD39"/><Star size={16} className="sm:w-[18px] sm:h-[18px]" fill="#FBAD39"/><Star size={16} className="sm:w-[18px] sm:h-[18px]" fill="#FBAD39"/><Star size={16} className="sm:w-[18px] sm:h-[18px] text-[#90A3BF]"/></div>
                <span className="text-[13px] sm:text-[14px] text-[#596780] ml-2">440+ Reviewer</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[Phone, MessageCircle, FileText, BarChart2].map((Icon, i) => (
                <button key={i} className="cursor-pointer p-2 sm:p-2.5 bg-[#3563E9] rounded-lg text-white"><Icon size={18} className="sm:w-5 sm:h-5" /></button>
              ))}
              <button className="cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 bg-[#3563E9] rounded-lg text-white text-[11px] sm:text-[12px] font-bold flex items-center gap-1.5 sm:gap-2"><FileText size={12} className="sm:w-3.5 sm:h-3.5"/> License & Certification</button>
            </div>
          </div>
          <p className="text-[16px] sm:text-[18px] text-[#596780] leading-relaxed mt-4 sm:mt-6">NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.</p>
          <div className="grid grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6 sm:gap-x-12 mt-6 sm:mt-8">
            {[["Type Car", "Sport"], ["Capacity", "2 Person"], ["Steering", "Manual"], ["Gasoline", "70L"]].map(([label, val]) => (
              <div key={label} className="flex justify-between border-b border-gray-50 pb-2 min-w-0"><span className="text-[13px] sm:text-base text-[#90A3BF]">{label}</span><span className="font-semibold text-[13px] sm:text-base text-[#596780]">{val}</span></div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Maintenance Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-7xl mx-auto mb-8 sm:mb-10">
        {maintenanceTasks.map((task, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm min-w-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F6F7F9] rounded-2xl flex items-center justify-center text-[#3563E9] shrink-0">{task.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-2 gap-2">
                <h3 className="font-bold text-[#1A202C] text-[15px] sm:text-[17px] leading-tight truncate">{task.title}</h3>
                {task.badge && <span className="text-[#3563E9] font-bold text-[16px] sm:text-[18px] shrink-0">{task.badge}</span>}
              </div>
              <div className="flex justify-between items-center text-[#90A3BF] gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0"><Calendar size={16} className="sm:w-[18px] sm:h-[18px] shrink-0"/><span className="text-[14px] sm:text-[15px] font-medium truncate">{task.date}</span></div>
                <button className="cursor-pointer p-1.5 sm:p-2 bg-[#3563E9] rounded-lg text-white shrink-0"><Pencil size={12} className="sm:w-3.5 sm:h-3.5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Car Features Section */}
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-[#1A202C] mb-4 sm:mb-6">Car Features</h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 bg-white px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-100 shadow-sm min-w-0">
              <CheckCircle2 size={18} className="sm:w-5 sm:h-5 text-[#00C92C] shrink-0" />
              <span className="text-[#596780] font-medium text-[13px] sm:text-[15px]">{feature}</span>
            </div>
          ))}
          <button className="cursor-pointer p-2.5 sm:p-3 bg-[#3563E9] rounded-xl text-white shadow-md hover:bg-[#274ecb] transition-colors shrink-0">
            <Pencil size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSchedule;