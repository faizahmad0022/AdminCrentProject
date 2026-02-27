import { ChevronDown, Search } from 'lucide-react';
import BookingCard from '../../components/BookingCard';
import NissanGTRImg from '../../assets/Nissan-GT-R.png';
import AudiA6Img from '../../assets/Audi-A6.png';

const bookingsData = [
    {
        id: 1,
        carName: 'Nissan GT – R',
        carType: 'Sport Car',
        carImage: NissanGTRImg,
        duration: '1 Day',
        bookingId: '9761',
        txId: 'TXN-2024-00025',
        paymentMethod: 'Visa....23454',
        pickupLocation: 'Kota Semarang',
        pickupDate: '20 July 2022',
        pickupTime: '07.00',
        dropoffLocation: 'Kota Semarang',
        dropoffDate: '21 July 2022',
        dropoffTime: '01.00',
        price: {
            base: '350',
            taxesFees: '350',
            insurance: '350',
            taxes: '350',
            fine: '350',
            total: '1350'
        }
    },
    {
        id: 2,
        carName: 'Audi A6',
        carType: 'Sedan',
        carImage: AudiA6Img,
        duration: '1 Day',
        bookingId: '1061',
        txId: 'TXN-2024-00025',
        paymentMethod: 'Visa....23454',
        pickupLocation: 'Kota Semarang',
        pickupDate: '20 July 2022',
        pickupTime: '07.00',
        dropoffLocation: 'Kota Semarang',
        dropoffDate: '21 July 2022',
        dropoffTime: '01.00',
        price: {
            base: '350',
            taxesFees: '350',
            insurance: '350',
            taxes: '350',
            fine: '350',
            total: '1350'
        }
    }
];

const Booking = () => {
    return (
        <div className="booking-page space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-[28px] font-extrabold text-[#1A202C]">My Bookings</h1>
                <button className="cursor-pointer bg-[#3563E9] hover:bg-[#2d56d4] text-white px-5 py-2.5 rounded-[10px] text-[14px] font-bold shadow-[0px_8px_16px_rgba(53,99,233,0.3)] transition-all">
                    Add Booking
                </button>
            </div>

            <div className="bg-white p-5 rounded-[18px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/60">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="flex items-center gap-8 flex-1 w-full overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                        <div className="flex flex-col gap-1 min-w-[120px]">
                            <span className="text-[14px] text-[#1A202C] font-extrabold tracking-tight">Locations</span>
                            <div className="flex items-center gap-1 cursor-pointer">
                                <span className="text-[#90A3BF] text-[13px] font-medium">Select your city</span>
                                <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
                            </div>
                        </div>
                        <div className="h-10 w-px bg-[#F1F3F9] shrink-0" />
                        <div className="flex flex-col gap-1 min-w-[120px]">
                            <span className="text-[14px] text-[#1A202C] font-extrabold tracking-tight">Date</span>
                            <div className="flex items-center gap-1 cursor-pointer">
                                <span className="text-[#90A3BF] text-[13px] font-medium">Select your date</span>
                                <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
                            </div>
                        </div>
                        <div className="h-10 w-px bg-[#F1F3F9] shrink-0" />
                        <div className="flex flex-col gap-1 min-w-[120px]">
                            <span className="text-[14px] text-[#1A202C] font-extrabold tracking-tight">Time</span>
                            <div className="flex items-center gap-1 cursor-pointer">
                                <span className="text-[#90A3BF] text-[13px] font-medium">Select your time</span>
                                <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
                            </div>
                        </div>
                        <div className="h-10 w-px bg-[#F1F3F9] shrink-0" />
                        <div className="flex flex-col gap-1 min-w-[120px]">
                            <span className="text-[14px] text-[#1A202C] font-extrabold tracking-tight">Car</span>
                            <div className="flex items-center gap-1 cursor-pointer">
                                <span className="text-[#90A3BF] text-[13px] font-medium">Select your time</span>
                                <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[320px]">
                        <div className="bg-white rounded-[12px] px-4 py-3 flex items-center border border-[#F1F3F9] shadow-sm focus-within:border-[#3563E9]/50 transition-all">
                            <Search className="w-5 h-5 text-[#90A3BF] mr-3" />
                            <input
                                type="text"
                                placeholder="Search something here"
                                className="bg-transparent outline-none text-[14px] text-[#596780] w-full placeholder:text-[#90A3BF] font-medium"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {bookingsData.map(booking => (
                    <BookingCard key={booking.id} booking={booking} />
                ))}
            </div>
        </div>
    );
};

export default Booking;
