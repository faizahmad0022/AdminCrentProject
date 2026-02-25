"use client";

import { 
  Pencil, 
  Trash2, 
  Copy, 
  ChevronDown, 
  Eye
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import smalllookcar from "../../assets/smalllookcar.png";
import BookingHeaderCard from "../../components/BookingHeaderCard";

const AdditionalPaymentForm = () => {
    const navigate = useNavigate();

    const InfoField = ({ label, value, isSelect = false }) => (
        <div className="flex flex-col gap-1.5 min-w-0">
            <label className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1A202C]">{label}</label>
            <div className={`flex items-center justify-between bg-[#F6F7F9] p-3 sm:p-4 rounded-xl min-h-[48px] sm:min-h-[56px] transition-all hover:bg-[#eff1f5] ${isSelect ? 'cursor-pointer' : ''}`}>
                <span className="text-[#90A3BF] font-medium text-[13px] sm:text-[14px] truncate">{value}</span>
                {isSelect && <ChevronDown size={18} className="text-[#90A3BF] shrink-0 ml-2" />}
            </div>
        </div>
    );

    return (
        <div className="  bg-[#F6F7F9] font-sans">
            
            {/* 1. Top Navigation Bar */}
            <BookingHeaderCard
                rightLabel="Payment Method"
                carName="Nissan GT - R"
                onPrevious={() => navigate("/payment-form")}
                onNext={() => navigate("/booking-confirmation")}
                className="mb-6 rounded-2xl shadow-sm border border-[#E5E7EB]"
            />

            <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
                
                {/* 2. Top Header Card - Fixed for iPad Mini widths */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-[#E5E7EB]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
                        
                        <div className="flex flex-row items-center gap-4 sm:gap-6 w-full">
                            <div className="w-20 h-14 sm:w-28 sm:h-20 bg-[#3563E9] rounded-xl flex items-center justify-center shrink-0">
                                <img src={smalllookcar} alt="CarThumb" className="w-full h-full object-contain p-2" />
                            </div>
                            
                            <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                                    <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-extrabold text-[#1A202C] truncate">Nissan GT – R</h2>
                                    <button className="cursor-pointer flex items-center gap-1.5 bg-[#3563E9] text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-[12px] font-medium">
                                        Go to inspection <Eye size={14} />
                                    </button>
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-[13px] text-[#90A3BF]">
                                    <span>Sport Car <b className="text-[#3563E9] font-semibold">(1 Day)</b></span>
                                    <span>ID: <b className="text-[#3563E9] font-semibold">#9761</b></span>
                                    <span className="hidden lg:inline">TXN: <b className="text-[#3563E9] font-semibold">TXN-2024–00025</b></span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0">
                            <button className="cursor-pointer p-2 sm:p-2.5 bg-[#3563E9] text-white rounded-lg"><Pencil size={18}/></button>
                            <button className="cursor-pointer p-2 sm:p-2.5 bg-[#3563E9] text-white rounded-lg"><Copy size={18}/></button>
                            <button className="cursor-pointer p-2 sm:p-2.5 bg-[#3563E9] text-white rounded-lg"><Trash2 size={18}/></button>
                        </div>
                    </div>
                </div>

                {/* 3. Main Form Card - Tablet Grid Adjustment */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-[#E5E7EB]">
                    <div className="space-y-8 sm:space-y-10">
                        
                        <section>
                            <h3 className="text-[17px] sm:text-[19px] font-bold text-[#1A202C] mb-4 sm:mb-6">Base Price</h3>
                            {/* Grid: 1 col on mobile, 2 col on iPad, 3 col on Desktop */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                <InfoField label="Rate Type" value="Hourly" />
                                <InfoField label="Rate Amount" value="10 OMR Hour" />
                                <InfoField label="Minimum Booking" value="2 Hour" />
                            </div>
                        </section>

                        <section>
                            <h3 className="text-[17px] sm:text-[19px] font-bold text-[#1A202C] mb-4 sm:mb-6">Additional Charges</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                <InfoField label="Fuel Charges" value="3 OMR" />
                                <InfoField label="Extra KM Charges" value="2 OMR" />
                                <InfoField label="Driver Charges" value="10 OMR" />
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                            <section>
                                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#1A202C] mb-4">Discount Offers</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InfoField label="Promo Code" value="Save 10 OMR" />
                                    <InfoField label="Discount Amount" value="2 OMR" />
                                </div>
                            </section>

                            <section>
                                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#1A202C] mb-4">Tax / Vat</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InfoField label="Tax Rate" value="5 %" />
                                    <InfoField label="Tax Amount" value="0.5 OMR" />
                                </div>
                            </section>
                        </div>

                        <section className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#1A202C]">Payment Information</h3>
                                <div className="flex items-center gap-4">
                                    <span className="text-[14px] sm:text-[15px] font-medium text-[#1A202C]">Payment Status</span>
                                    <span className="bg-[#E7F9EE] text-[#00C92C] px-4 py-1 rounded-full text-[12px] font-bold border border-[#00C92C]">Paid</span>
                                </div>
                            </div>
                            <div className="w-full md:max-w-[320px]">
                                <InfoField label="Payment Method" value="Cash" isSelect={true} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalPaymentForm;