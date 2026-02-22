import { useState } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const initialBookingData = [
    { id: 'BK10245', date: '24-04-01', client: 'Alex Johnson', carType: 'Sedan SX485', plan: 'Standard', pickup: '24-04-05', returnDate: '24-04-10', payment: '$250', status: 'Completed', statusClass: 'text-green-600 bg-green-50 border border-green-100' },
    { id: 'BK10246', date: '24-04-02', client: 'Maria Lopez', carType: 'SUV LV907', plan: 'Premium', pickup: '24-04-08', returnDate: '24-04-15', payment: '$450', status: 'In Route', statusClass: 'text-orange-500 bg-orange-50 border border-orange-100' },
    { id: 'BK10247', date: '24-04-02', client: 'Chris Green', carType: 'Compact CM672', plan: 'Economy', pickup: '24-04-10', returnDate: '24-04-12', payment: '$180', status: 'Completed', statusClass: 'text-green-600 bg-green-50 border border-green-100' },
    { id: 'BK10248', date: '24-04-03', client: 'Jasmine Keith', carType: 'Electric EV308', plan: 'Eco-friendly', pickup: '24-04-11', returnDate: '24-04-18', payment: '$300', status: 'Canceled', statusClass: 'text-red-500 bg-red-50 border border-red-100' },
    { id: 'BK10249', date: '24-04-03', client: 'Sam Patel', carType: 'Convertible CV556', plan: 'Luxury', pickup: '24-04-09', returnDate: '24-04-16', payment: '$550', status: 'Completed', statusClass: 'text-green-600 bg-green-50 border border-green-100' },
];

const BookingTable = () => {
    const [currentPage, setCurrentPage] = useState(2);

    return (
        <div className="space-y-7">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                <h3 className="text-[20px] font-extrabold text-[#1A202C]">Car Bookings</h3>
                <div className="flex items-center gap-5 w-full sm:w-auto">
                    <div className="flex items-center bg-white border border-[#C3D4E9]/30 rounded-[12px] px-4 py-3 w-full sm:w-[320px] gap-3 shadow-sm group focus-within:ring-2 focus-within:ring-[#3563E9]/20 focus-within:border-[#3563E9]/50">
                        <Search className="w-5 h-5 text-[#90A3BF] flex-shrink-0" strokeWidth={2} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-[14px] text-[#596780] w-full font-semibold placeholder:text-[#90A3BF]"
                        />
                    </div>
                    <div className="flex items-center bg-white border border-[#C3D4E9]/30 rounded-[12px] px-5 py-3 gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-200 shadow-sm group">
                        <span className="text-[14px] text-[#596780] font-bold whitespace-nowrap">Sort By</span>
                        <ChevronDown className="w-4 h-4 text-[#90A3BF] group-hover:text-[#3563E9]" strokeWidth={2} />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] overflow-hidden border border-white/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1100px]">
                        <thead>
                            <tr className="bg-[#F6F7F9] border-b border-[#F1F3F9] text-[#90A3BF] text-[12px] font-bold uppercase tracking-[0.05em]">
                                <th className="px-6 py-5 whitespace-nowrap">Booking ID</th>
                                <th className="px-6 py-5 whitespace-nowrap">Date</th>
                                <th className="px-6 py-5 whitespace-nowrap">Client</th>
                                <th className="px-6 py-5 whitespace-nowrap">Car Type</th>
                                <th className="px-6 py-5 whitespace-nowrap">Plan</th>
                                <th className="px-6 py-5 whitespace-nowrap">Pickup Date</th>
                                <th className="px-6 py-5 whitespace-nowrap">Return Date</th>
                                <th className="px-6 py-5 whitespace-nowrap">Payment</th>
                                <th className="px-6 py-5 whitespace-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F1F3F9]">
                            {initialBookingData.map((booking) => {
                                let statusBg = '';
                                let statusText = '';
                                if (booking.status === 'Completed') {
                                    statusBg = 'bg-[#70CF97]/10';
                                    statusText = 'text-[#70CF97]';
                                } else if (booking.status === 'In Route') {
                                    statusBg = 'bg-[#FF993A]/10';
                                    statusText = 'text-[#FF993A]';
                                } else if (booking.status === 'Canceled') {
                                    statusBg = 'bg-[#EF3651]/10';
                                    statusText = 'text-[#EF3651]';
                                }

                                return (
                                    <tr key={booking.id} className="hover:bg-blue-50/30 transition-colors text-[14px] font-semibold group">
                                        <td className="px-6 py-6 text-[#1A202C]">{booking.id}</td>
                                        <td className="px-6 py-6 text-[#90A3BF] font-medium">{booking.date}</td>
                                        <td className="px-6 py-6 text-[#1A202C] font-bold">{booking.client}</td>
                                        <td className="px-6 py-6">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[#1A202C] font-bold">{booking.carType.split(' ')[0]}</span>
                                                <span className="text-[11px] text-[#90A3BF] font-bold uppercase tracking-wider">{booking.carType.split(' ').slice(1).join(' ')}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-[#596780] font-medium">{booking.plan}</td>
                                        <td className="px-6 py-6 text-[#90A3BF] font-medium">{booking.pickup}</td>
                                        <td className="px-6 py-6 text-[#90A3BF] font-medium">{booking.returnDate}</td>
                                        <td className="px-6 py-6 text-[#1A202C] font-extrabold">{booking.payment}</td>
                                        <td className="px-6 py-6">
                                            <span className={`px-5 py-2 rounded-full text-[12px] font-extrabold transition-all duration-200 border border-current ${statusBg} ${statusText}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="px-7 py-6 border-t border-[#F1F3F9] flex justify-between items-center">
                    <span className="text-[14px] text-[#90A3BF] font-bold">Showing 5 from 100 data</span>
                    <div className="flex items-center gap-1.5">
                        <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-[10px] text-[#90A3BF] hover:bg-gray-100 transition-colors">
                            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
                        </button>
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-[10px] text-[14px] font-bold transition-all duration-200 ${page === currentPage
                                    ? 'bg-[#3563E9] text-white shadow-[0px_8px_16px_rgba(53,99,233,0.3)]'
                                    : 'text-[#90A3BF] hover:bg-gray-100'}`}
                            >
                                {page}
                            </button>
                        ))}
                        <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-[10px] text-[#90A3BF] hover:bg-gray-100 transition-colors">
                            <ChevronRight className="w-4 h-4" strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingTable;
