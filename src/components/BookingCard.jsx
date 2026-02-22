import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import editIcon from '../assets/edit-icon-booking.png';
import viewIcon from '../assets/view-icon-booking.png';
import deleteIcon from '../assets/delete-icon-booking.png';

const BookingCard = ({ booking }) => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/booking/${booking.id}`);
    };

    return (
        <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/60 overflow-hidden mb-6">
            {/* Top Section: Car Info & Actions */}
            <div className="p-6 flex flex-col md:flex-row items-center md:items-start gap-4">
                <div
                    onClick={handleNavigation}
                    className="w-[132px] h-[72px] rounded-[12px] flex items-center justify-center relative overflow-hidden bg-[#3563E9] flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{
                        backgroundImage: "url('/assets/Car-background.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <img src={booking.carImage} alt={booking.carName} className="w-[110px] object-contain relative z-10" />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                        <h4
                            onClick={handleNavigation}
                            className="text-[20px] font-extrabold text-[#1A202C] cursor-pointer hover:text-[#3563E9] transition-colors"
                        >
                            {booking.carName}
                        </h4>
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[12px] font-bold text-[#90A3BF]">
                        <span className="text-[#596780]">{booking.carType}</span>
                        <span className="text-[#3563E9]">({booking.duration})</span>
                        <span>BookingID <span className="text-[#1A202C] ml-1">#{booking.bookingId}</span></span>
                        <span>Transaction ID <span className="text-[#1A202C] ml-1">{booking.txId}</span></span>
                        <span>Payment Method: <span className="text-[#1A202C] ml-1">{booking.paymentMethod}</span></span>
                    </div>
                </div>

                <div className="flex gap-2.5">
                    <button className="cursor-pointer w-9 h-9 rounded-lg bg-[#3563E9] flex items-center justify-center hover:bg-[#2d56d4] transition-colors shadow-sm">
                        <img src={editIcon} alt="Edit" className="w-4 h-4 brightness-0 invert" />
                    </button>
                    <button className="cursor-pointer w-9 h-9 rounded-lg bg-[#3563E9] flex items-center justify-center hover:bg-[#2d56d4] transition-colors shadow-sm">
                        <img src={viewIcon} alt="View" className="w-4 h-4 brightness-0 invert" />
                    </button>
                    <button className="cursor-pointer w-9 h-9 rounded-lg bg-[#3563E9] flex items-center justify-center hover:bg-[#2d56d4] transition-colors shadow-sm">
                        <img src={deleteIcon} alt="Delete" className="w-4 h-4 brightness-0 invert" />
                    </button>
                </div>
            </div>

            {/* Middle Section: Pick-Up & Drop-Off */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 mb-6">
                {/* Pick-Up */}
                <div className="bg-[#F6F7F9] rounded-[16px] p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-[3px] border-[#3563E9]/20 bg-[#3563E9]" />
                        <span className="text-[14px] font-extrabold text-[#1A202C]">Pick - Up</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] font-bold text-[#1A202C]">Locations</span>
                            <div className="flex items-center justify-between text-[#90A3BF] text-[11px] font-medium pr-1">
                                <span className="truncate">{booking.pickupLocation}</span>
                                <ChevronDown className="w-3 h-3" />
                            </div>
                        </div>
                        <div className="border-l border-[#C3D4E9]/30 pl-2 flex flex-col gap-1">
                            <span className="text-[12px] font-bold text-[#1A202C]">Date</span>
                            <div className="flex items-center justify-between text-[#90A3BF] text-[11px] font-medium pr-1">
                                <span className="truncate">{booking.pickupDate}</span>
                                <ChevronDown className="w-3 h-3" />
                            </div>
                        </div>
                        <div className="border-l border-[#C3D4E9]/30 pl-2 flex flex-col gap-1">
                            <span className="text-[12px] font-bold text-[#1A202C]">Time</span>
                            <div className="flex items-center justify-between text-[#90A3BF] text-[11px] font-medium pr-1">
                                <span className="truncate">{booking.pickupTime}</span>
                                <ChevronDown className="w-3 h-3" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Drop-Off */}
                <div className="bg-[#F6F7F9] rounded-[16px] p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-[3px] border-[#5CA1FF]/30 bg-[#5CA1FF]" />
                        <span className="text-[14px] font-extrabold text-[#1A202C]">Drop - Off</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] font-bold text-[#1A202C]">Locations</span>
                            <div className="flex items-center justify-between text-[#90A3BF] text-[11px] font-medium pr-1">
                                <span className="truncate">{booking.dropoffLocation}</span>
                                <ChevronDown className="w-3 h-3" />
                            </div>
                        </div>
                        <div className="border-l border-[#C3D4E9]/30 pl-2 flex flex-col gap-1">
                            <span className="text-[12px] font-bold text-[#1A202C]">Date</span>
                            <div className="flex items-center justify-between text-[#90A3BF] text-[11px] font-medium pr-1">
                                <span className="truncate">{booking.dropoffDate}</span>
                                <ChevronDown className="w-3 h-3" />
                            </div>
                        </div>
                        <div className="border-l border-[#C3D4E9]/30 pl-2 flex flex-col gap-1">
                            <span className="text-[12px] font-bold text-[#1A202C]">Time</span>
                            <div className="flex items-center justify-between text-[#90A3BF] text-[11px] font-medium pr-1">
                                <span className="truncate">{booking.dropoffTime}</span>
                                <ChevronDown className="w-3 h-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Breakdown Footer */}
            <div className="px-6 py-4 border-t border-[#F1F3F9]">
                <h5 className="text-[15px] font-extrabold text-[#1A202C] mb-3">Price Breakdown</h5>
                <div className="bg-[#EDF2F7] rounded-xl px-6 py-4 flex flex-wrap items-center justify-between gap-y-4">
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                        <div className="flex items-center gap-4">
                            <span className="text-[15px] font-extrabold text-[#1A202C]">Base Rent:</span>
                            <span className="text-[14px] font-bold text-[#90A3BF]">${booking.price.base}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[15px] font-extrabold text-[#1A202C]">Taxes and Fees:</span>
                            <span className="text-[14px] font-bold text-[#90A3BF]">${booking.price.taxesFees}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[15px] font-extrabold text-[#1A202C]">Insurance:</span>
                            <span className="text-[14px] font-bold text-[#90A3BF]">${booking.price.insurance}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[15px] font-extrabold text-[#1A202C]">Taxes :</span>
                            <span className="text-[14px] font-bold text-[#90A3BF]">${booking.price.taxes}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[15px] font-extrabold text-[#1A202C]">Fine:</span>
                            <span className="text-[14px] font-bold text-[#90A3BF]">${booking.price.fine}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 ml-auto">
                        <span className="text-[16px] font-extrabold text-[#1A202C]">Total</span>
                        <span className="text-[20px] font-extrabold text-[#1A202C]">${booking.price.total}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
