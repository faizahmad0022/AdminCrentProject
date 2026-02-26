"use client";

import { Search, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CarVerticaleBackground from "../../assets/Car-verticale-background.png";

const customers = [
    { name: "Chris Richard", phone: "0852763849" },
    { name: "Alex Morgan", phone: "0812345678" },
    { name: "Jordan Lee", phone: "0898765432" },
    { name: "Sam Williams", phone: "0823456789" },
];

const BookingCrentCar = () => {
    const navigate = useNavigate();

    return (
        <div className="font-sans bg-[#F8F8F8] overflow-x-hidden">

            {/* Select Customer Bar */}
            <div className="bg-white rounded-2xl shadow-md px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 min-w-0 flex-1">
                    <span className="font-semibold text-[#333] text-[15px] sm:text-base whitespace-nowrap">
                        Select Customer
                    </span>

                    <div className="w-full sm:w-[240px] md:w-[300px] min-w-0">
                        <div className="bg-white rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 flex items-center border border-gray-300 shadow-sm">
                            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 shrink-0" />
                            <input
                                type="text"
                                placeholder="Search something here"
                                className="bg-transparent outline-none text-[13px] sm:text-sm w-full min-w-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <button className="cursor-pointer min-w-[140px] py-3 rounded-xl bg-[#DBEAFE] text-[#1E293B] font-bold text-base">Previous</button>
                    <button onClick={() => navigate("/select-vehicle")} type="button" className="cursor-pointer min-w-[140px] py-3 rounded-xl bg-[#3563E9] text-white font-bold text-base shadow-md">Next</button>
                </div>
            </div>

            {/* Blue Section */}
            <div className="relative rounded-2xl overflow-hidden">
                <img
                    src={CarVerticaleBackground}
                    alt=""
                    className="w-full h-full object-cover absolute inset-0"
                />

                {/* Content Overlay */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8">

                    {/* Top Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {customers.map((customer, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md px-4 sm:px-6 py-4 sm:py-5 flex flex-col items-center gap-2 sm:gap-3 w-full max-w-[280px] sm:max-w-[210px] mx-auto sm:mx-0 lg:max-w-[210px] lg:w-[210px]"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-100 shrink-0">
                                    <img
                                        src="/assets/User profile picture.png"
                                        alt={customer.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <p className="text-[14px] sm:text-base font-semibold text-gray-800 text-center">
                                    {customer.name}
                                </p>

                                <div className="flex items-center gap-2">
                                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 shrink-0" />
                                    <span className="text-[12px] sm:text-sm text-gray-600">
                                        {customer.phone}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Customer Card */}
                    <div className="bg-white rounded-md shadow-md p-4 sm:p-5">
                        <h2 className="text-[16px] sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6">
                            Add Customer
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            <InputField label="Customer Name" placeholder="5 OMR" />
                            <InputField label="Customer Id" placeholder="100 OMR" />
                            <InputField label="Customer Number" placeholder="500 OMR" />
                            <InputField label="Email" placeholder="OMR" />
                            <InputField label="CNIC" placeholder="for 10 hours" />
                            <InputField
                                label="Pick-up Date and Time"
                                placeholder="10 OMR"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-8">
                            <button className="cursor-pointer px-5 sm:px-6 py-2 sm:py-2.5 rounded-sm bg-blue-700 text-white font-medium text-[14px] sm:text-base">
                                Save Booking
                            </button>
                            <button className="cursor-pointer px-5 sm:px-6 py-2 sm:py-2.5 rounded-sm bg-blue-700 text-white font-medium opacity-80 text-[14px] sm:text-base">
                                Cancel
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const InputField = ({ label, placeholder }) => (
    <div className="min-w-0">
        <label className="block text-[13px] sm:text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
            {label}
        </label>
        <input
            type="text"
            placeholder={placeholder}
            className="w-full min-w-0 bg-gray-100 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 outline-none text-[13px] sm:text-sm"
        />
    </div>
);

export default BookingCrentCar;