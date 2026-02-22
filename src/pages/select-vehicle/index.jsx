"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import NissanGTRImg from "../../assets/Nissan-GT-R.png";
import VehicleCard from "../../components/VehicleCard";

const carData = {
    category: "Sport Car",
    name: "Nissan GT-R",
    rating: "440+",
    availableUnits: "3/5",
    specs: {
        fuel: "80L",
        transmission: "(7)Manual (5) Auto",
        capacity: "5 People",
    },
    price: "300 OMR",
    image: NissanGTRImg,
};

const SelectVehicle = () => {
    const navigate = useNavigate();

    return (
        <div className=" bg-[#F6F7F9] font-sans overflow-x-hidden">
            {/* 1. Top Bar - Fully Responsive for all screens */}
            <div className="bg-white rounded-2xl shadow-sm px-4 sm:px-6 py-4 flex flex-col lg:flex-row xl:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                
                {/* User Profile Info */}
                <div className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                        <img
                            src="/assets/User profile picture.png"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="min-w-0">
                        <p className="font-bold text-[#111827] text-[15px] sm:text-[16px] truncate">Zaid Jawad</p>
                        <p className="text-xs sm:text-sm text-gray-500">Car Booking</p>
                    </div>
                </div>

                {/* Center Group: Title and Search Bar */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 w-full lg:w-auto min-w-0 order-first lg:order-none">
                    <span className="font-bold text-[#1A202C] whitespace-nowrap text-[16px] sm:text-[17px]">
                        Select Vehicle
                    </span>

                    <div className="relative w-full sm:w-auto min-w-0 sm:min-w-[200px] md:w-[240px] lg:w-[320px]">
                        <div className="flex items-center border border-[#E5E7EB] rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                            <Search size={16} className="text-[#90A3BF] mr-2 shrink-0 sm:w-[18px] sm:h-[18px]" />
                            <input
                                type="text"
                                placeholder="Search something here"
                                className="outline-none w-full min-w-0 text-[13px] sm:text-sm text-[#1A202C] placeholder:text-[#90A3BF]"
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-end flex-shrink-0">
                    <button 
                        onClick={() => navigate("/booking-crent-car"        )} 
                        className="cursor-pointer flex-1 sm:flex-none min-w-0 px-4 sm:px-6 lg:px-10 py-2 sm:py-2.5 rounded-lg bg-[#E0E7FF] text-[#1F2937] font-semibold text-[13px] sm:text-[14px] hover:bg-blue-100 transition-colors"
                    >
                        Previous
                    </button>
                    <button 
                        onClick={() => navigate("/add-schedule")} 
                        className="cursor-pointer flex-1 sm:flex-none min-w-0 px-5 sm:px-8 lg:px-14 py-2 sm:py-2.5 rounded-lg bg-[#3563E9] text-white font-semibold text-[13px] sm:text-[14px] hover:bg-blue-700 shadow-md transition-colors"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* 2. Responsive Cards Container */}
            <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
                    <VehicleCard car={carData} />
                    <VehicleCard car={carData} />
                    <VehicleCard car={carData} />
                    <VehicleCard car={carData} />
                </div>
            </div>
        </div>
    );
};

export default SelectVehicle;