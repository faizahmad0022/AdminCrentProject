"use client";

import { useNavigate } from "react-router-dom";
import {
    Car,
    Copy,
    Disc,
    Pencil,
    Trash2,
    Droplet,
    ChevronDown,
} from "lucide-react";
import NissanGTRImg from "../../assets/Nissan-GT-R.png";
import smalllookcar from "../../assets/smalllookcar.png"; // Your blue car image

const PaymentForm = () => {
    const navigate = useNavigate();

    const priceDetails = [
        { label: "Base Rent", value: "$350" },
        { label: "Taxes and Fees", value: "$350" },
        { label: "Insurance", value: "$350" },
        { label: "Taxes", value: "$350" },
        { label: "Fine", value: "$350" },
        { label: "Total", value: "$1350", isTotal: true },
    ];

    const maintenanceData = [
        { title: "Oil Change", icon: <Droplet className="text-blue-600" />, date: "2028-08-10" },
        { title: "Tire Replacement", icon: <Disc className="text-blue-600" />, date: "2028-08-10" },
        { title: "Scheduled maintenance", icon: <Car className="text-blue-600" />, date: "2028-08-10" },
        { title: "Unit Return", icon: <Droplet className="text-blue-600" />, date: "2028-08-10", badge: "306" },
    ];

    const carFeatures = [
        "Air conditioning", "Bluetooth Connectivity", "USB Chargring ports",
        "Backup Camera", "Spacious Trunk", "Cruise Control", "Keyless Entry"
    ];

    return (
        <div className=" bg-[#F6F7F9] font-sans min-h-screen overflow-x-hidden">
            {/* Top Navigation Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden bg-[#F5F5F5] shrink-0">
                        <img src="/assets/User profile picture.png" alt="Zaid" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[15px] sm:text-[17px] font-bold text-[#1A202C] truncate">Zaid Jawad</p>
                        <p className="text-[12px] sm:text-[13px] text-[#888888]">Car Booking</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
                        <img src={NissanGTRImg} alt="Nissan GT-R" className="w-full h-full object-contain" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[15px] sm:text-[17px] font-bold text-[#1A202C]">Nissan GT - R</p>
                        <p className="text-[12px] sm:text-[13px] text-[#888888]">Sport Car</p>
                    </div>
                </div>

                <span className="text-[15px] sm:text-[17px] font-bold text-[#1A202C] whitespace-nowrap">Add Schedule</span>

                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end flex-shrink-0">
                    <button onClick={() => navigate("/add-schedule")} className="cursor-pointer px-6 sm:px-10 py-2 rounded-lg bg-[#E0E7FF] text-black font-medium text-[14px] sm:text-base">Previous</button>
                    <button type="button" onClick={() => navigate("/additional-payment-form")} className="cursor-pointer px-8 sm:px-14 py-2 rounded-lg bg-[#3563E9] text-white font-medium text-[14px] sm:text-base">Next</button>
                </div>
            </div>

            {/* Main Content - Grid-based layout */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-[#E5E7EB] max-w-7xl mx-auto">
                {/* Car Info Header - Grid for responsive stacking */}
                <div className="grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr gap-4 sm:gap-6 mb-6 items-start">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 min-w-0">
                        <div className="w-full sm:w-32 md:w-40 h-20 sm:h-24 bg-[#3563E9] rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                            <img src={smalllookcar} alt="CarThumb" className="w-full h-full object-contain p-1.5 sm:p-2" />
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A202C]">Nissan GT – R</h2>
                            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:flex lg:flex-wrap items-start gap-1 sm:gap-2 lg:gap-3 mt-2 text-[12px] sm:text-sm text-[#596780]">
                                <span>Sport Car <span className="text-[#3563E9]">(1 Day)</span></span>
                                <span>BookingID <span className="text-[#3563E9] font-medium">#9761</span></span>
                                <span>Transaction ID <span className="text-[#3563E9] font-medium">TXN-2024–00025</span></span>
                                <span>Payment Method: <span className="text-[#3563E9] font-medium">Visa....23454</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-start sm:justify-end shrink-0">
                        <button className="cursor-pointer p-2 bg-[#3563E9] text-white rounded-lg" aria-label="Edit"><Pencil size={16} className="sm:w-[18px] sm:h-[18px]" /></button>
                        <button className="cursor-pointer p-2 bg-[#3563E9] text-white rounded-lg" aria-label="Copy"><Copy size={16} className="sm:w-[18px] sm:h-[18px]" /></button>
                        <button className="cursor-pointer p-2 bg-[#3563E9] text-white rounded-lg" aria-label="Delete"><Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" /></button>
                    </div>
                </div>

                {/* Pick-Up / Drop-Off - Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {['Pick - Up', 'Drop - Off'].map((type) => (
                        <div key={type} className="bg-[#E9F0FE] p-3 sm:p-4 rounded-xl min-w-0">
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-white bg-[#3563E9] shrink-0"></div>
                                <span className="font-bold text-[14px] sm:text-base text-[#1A202C]">{type}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 px-0 sm:px-2">
                                {['Locations', 'Date', 'Time'].map((label) => (
                                    <div key={label} className="flex flex-col min-w-0">
                                        <span className="font-bold text-[12px] sm:text-sm text-[#1A202C]">{label}</span>
                                        <button className="cursor-pointer flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-[#90A3BF] mt-1 truncate">
                                            {label === 'Locations' ? 'Kota Semarang' : label === 'Date' ? (type.includes('Pick') ? '20 July 2022' : '21 July 2022') : (type.includes('Pick') ? '07.00' : '01.00')}
                                            <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5 shrink-0" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-y-6 md:gap-x-12 mb-8 sm:mb-10">
                    {priceDetails.map((item) => (
                        <div key={item.label} className="min-w-0">
                            <p className="font-bold text-[14px] sm:text-base text-[#1A202C] mb-1.5 sm:mb-2">{item.label}</p>
                            <div className="bg-[#F6F7F9] p-3 sm:p-4 rounded-xl">
                                <span className="text-[13px] sm:text-base text-[#90A3BF] font-medium">{item.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;