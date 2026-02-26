"use client";

import React from "react";
import cruzerblack from "../../assets/cruzerblack.png";
import CarVerticaleBackground from "../../assets/Car-verticale-background.png";
import BookingHeaderCard from "../../components/BookingHeaderCard";

const InspectionPdfScreen = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B] px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6">
            <div className="max-w-6xl mx-auto w-full">
                <BookingHeaderCard className="mb-4 sm:mb-6" />
            </div>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden max-w-6xl mt-4 sm:mt-6 mx-auto w-full px-0 sm:px-0">
                <img
                    src={CarVerticaleBackground}
                    alt=""
                    className="w-full h-full object-cover absolute inset-0"
                />
                <div className="relative z-10 p-3 sm:p-4 md:p-6 flex flex-col gap-4 sm:gap-5 md:gap-6">

                    {/* Section 1: Car Detail */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
                        <h3 className="font-black text-slate-800 mb-4 sm:mb-6 text-xs sm:text-sm">Car detail</h3>
                        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
                            <div className="w-full md:w-1/3 min-w-0">
                                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
                                    <img src={cruzerblack} alt="Black Car" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-x-8 md:gap-y-4 min-w-0">
                                <InfoBox label="Owner name" value="M. Abdullah" />
                                <InfoBox label="Email" value="M. Abdullah@gmail.com" />
                                <InfoBox label="Mobile phone" value="0332233344" />
                                <InfoBox label="City" value="Mehsana" />
                                <InfoBox label="Registration number" value="GJ 02 EG 3303" />
                                <InfoBox label="Kilometer Run (as seen)" value="13000 KM" />
                                <InfoBox label="Car brand model" value="Kia - Selos" />
                                <InfoBox label="Colour" value="Black" />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Overall Assessment */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
                        <h3 className="font-black text-slate-800 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm">Overall assessment</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                            <CircularProgress label="Scratches/dent" status="EXCELLENT" color="text-green-600" percent={85} />
                            <CircularProgress label="Tyre Condition" status="GOOD" color="text-green-500" percent={70} />
                            <CircularProgress label="Seats condition" status="NOT WORKING" color="text-orange-400" percent={40} />
                            <CircularProgress label="Mirrors" status="DAMAGED" color="text-red-500" percent={20} />
                            <CircularProgress label="AC working" status="AVERAGE" color="text-yellow-400" percent={55} />
                        </div>
                    </div>

                    {/* Section 3: Analysis Summary */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
                        <h3 className="font-black text-slate-800 mb-3 sm:mb-4 text-xs sm:text-sm">Analysis summary</h3>
                        <div className="bg-slate-50 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-slate-100">
                            <p className="text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed text-slate-600">
                                Based On A Comprehensive Inspection, The Vehicle Is Assessed To Be In <span className="font-bold text-slate-900">Fair Condition</span>. Key Mechanical Systems Including The Engine And Suspension Present <span className="font-bold text-slate-900">Noted Issues In Critical Components Like The Belts (Not Working) And Average Ratings For The Radiator And Oil Leakage</span>. The Exterior Analysis By Computer Vision Identified <span className="font-bold text-slate-900">Minor Cosmetic Damage, Including Scratches On The Front Bumper And A Small Dent On The Rear Passenger Door</span>. Overall, The Inspection Findings Indicate The Vehicle <span className="font-bold text-slate-900">May Require Immediate And Future Investment In Repairs, Which Could Impact Its Residual Value</span>.
                            </p>
                        </div>
                    </div>

                    {/* Section 4: Exterior Shots */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
                        <h3 className="font-black text-slate-800 mb-4 sm:mb-6 text-xs sm:text-sm">Exterior 4 out of 4</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="space-y-1.5 sm:space-y-2 min-w-0">
                                    <div className="rounded-lg sm:rounded-xl overflow-hidden border border-slate-100">
                                        <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=300&auto=format&fit=crop" alt="Exterior" className="w-full h-auto object-cover" />
                                    </div>
                                    <p className="text-[9px] sm:text-[10px] text-center font-bold text-slate-700 break-words">minor scratch on the Bonnet</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

/**
 * Reusable Info Box Component
 */
const InfoBox = ({ label, value }) => (
    <div className="space-y-1 sm:space-y-1.5 min-w-0">
        <label className="text-[10px] sm:text-[11px] font-bold text-slate-700 block truncate">{label}</label>
        <div className="w-full bg-[#F8FAFC] rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-transparent min-w-0">
            <span className="text-slate-400 text-[11px] sm:text-xs font-medium break-all">{value}</span>
        </div>
    </div>
);

/**
 * Reusable Circular Progress Component
 */
const CircularProgress = ({ label, status, color, percent }) => (
    <div className="flex flex-col items-center min-w-0">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
            {/* Background Circle - viewBox scales with container */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet">
                <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100" />
                <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent"
                    strokeDasharray={213.6}
                    strokeDashoffset={213.6 - (213.6 * percent) / 100}
                    className={`${color} transition-all duration-1000`}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-[6px] sm:text-[7px] md:text-[8px] font-black ${color} text-center leading-tight`}>{status}</span>
            </div>
        </div>
        <span className="mt-1.5 sm:mt-2 text-[8px] sm:text-[9px] md:text-[10px] font-bold text-slate-800 text-center break-words px-0.5">{label}</span>
    </div>
);

export default InspectionPdfScreen;