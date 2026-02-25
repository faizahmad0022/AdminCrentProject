"use client";

import React from "react";
import cruzerblack from "../../assets/cruzerblack.png";
import CarVerticaleBackground from "../../assets/Car-verticale-background.png";
import BookingHeaderCard from "../../components/BookingHeaderCard";

const InspectionPdfScreen = () => {
    return (
        <div className=" bg-[#F8FAFC] font-sans text-[#1E293B]">
            <BookingHeaderCard />
            <div className="relative rounded-2xl overflow-hidden max-w-6xl mt-6 mx-auto">
                <img
                    src={CarVerticaleBackground}
                    alt=""
                    className="w-full h-full object-cover absolute inset-0"
                />
                <div className="relative z-10 p-4 md:p-6 flex flex-col gap-6">

                    {/* Section 1: Car Detail */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="font-black text-slate-800 mb-6 text-sm">Car detail</h3>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full md:w-1/3">
                                <div className="rounded-2xl overflow-hidden shadow-md">
                                    <img src={cruzerblack} alt="Black Car" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
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
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="font-black text-slate-800 mb-8 text-sm">Overall assessment</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <CircularProgress label="Scratches/dent" status="EXCELLENT" color="text-green-600" percent={85} />
                            <CircularProgress label="Tyre Condition" status="GOOD" color="text-green-500" percent={70} />
                            <CircularProgress label="Seats condition" status="NOT WORKING" color="text-orange-400" percent={40} />
                            <CircularProgress label="Mirrors" status="DAMAGED" color="text-red-500" percent={20} />
                            <CircularProgress label="AC working" status="AVERAGE" color="text-yellow-400" percent={55} />
                        </div>
                    </div>

                    {/* Section 3: Analysis Summary */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="font-black text-slate-800 mb-4 text-sm">Analysis summary</h3>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                            <p className="text-[13px] leading-relaxed text-slate-600">
                                Based On A Comprehensive Inspection, The Vehicle Is Assessed To Be In <span className="font-bold text-slate-900">Fair Condition</span>. Key Mechanical Systems Including The Engine And Suspension Present <span className="font-bold text-slate-900">Noted Issues In Critical Components Like The Belts (Not Working) And Average Ratings For The Radiator And Oil Leakage</span>. The Exterior Analysis By Computer Vision Identified <span className="font-bold text-slate-900">Minor Cosmetic Damage, Including Scratches On The Front Bumper And A Small Dent On The Rear Passenger Door</span>. Overall, The Inspection Findings Indicate The Vehicle <span className="font-bold text-slate-900">May Require Immediate And Future Investment In Repairs, Which Could Impact Its Residual Value</span>.
                            </p>
                        </div>
                    </div>

                    {/* Section 4: Exterior Shots */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="font-black text-slate-800 mb-6 text-sm">Exterior 4 out of 4</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="space-y-2">
                                    <div className="rounded-xl overflow-hidden border border-slate-100">
                                        <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=300&auto=format&fit=crop" alt="Exterior" className="w-full h-auto" />
                                    </div>
                                    <p className="text-[10px] text-center font-bold text-slate-700">minor scratch on the Bonnet</p>
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
    <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-slate-700">{label}</label>
        <div className="w-full bg-[#F8FAFC] rounded-xl p-3 border border-transparent">
            <span className="text-slate-400 text-xs font-medium">{value}</span>
        </div>
    </div>
);

/**
 * Reusable Circular Progress Component
 */
const CircularProgress = ({ label, status, color, percent }) => (
    <div className="flex flex-col items-center">
        <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Background Circle */}
            <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100" />
                <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent"
                    strokeDasharray={213.6}
                    strokeDashoffset={213.6 - (213.6 * percent) / 100}
                    className={`${color} transition-all duration-1000`}
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className={`text-[8px] font-black ${color}`}>{status}</span>
            </div>
        </div>
        <span className="mt-2 text-[10px] font-bold text-slate-800 text-center">{label}</span>
    </div>
);

export default InspectionPdfScreen;