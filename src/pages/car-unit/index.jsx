import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AudiA6Img from '../../assets/Audi-A6.png';
import NissanGTRImg from '../../assets/Nissan-GT-R.png';
import CarUpIcon from '../../assets/car-up-arrow-icon-tables-row.png';
import CarDownIcon from '../../assets/car-down-arrow-icon-tables-row.png';
import PhoneIcon from '../../assets/phone-icon-tables-row.png';
import ChatIcon from '../../assets/chat-icon-tables-row.png';
import DoubleChatIcon from '../../assets/double-chat-icon-tables-row.png';

const BookingTable = ({ bookings }) => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
                <tr className="bg-[#F6F7F9] border-b border-[#F1F3F9] text-[#90A3BF] text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em]">
                    <th className="px-4 py-4 whitespace-nowrap">Car ID</th>
                    <th className="px-4 py-4 whitespace-nowrap">Booking Date</th>
                    <th className="px-4 py-4 whitespace-nowrap">Car Model</th>
                    <th className="px-4 py-4 whitespace-nowrap">Status</th>
                    <th className="px-4 py-4 whitespace-nowrap">Plan</th>
                    <th className="px-4 py-4 whitespace-nowrap">Date</th>
                    <th className="px-4 py-4 whitespace-nowrap">Price / Day</th>
                    <th className="px-4 py-4 whitespace-nowrap text-center">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F3F9]">
                {bookings.map((unit) => (
                    <tr key={unit.id} className="text-[13px] md:text-[14px] font-semibold text-[#111927] hover:bg-blue-50/30 transition-colors">
                        <td className="px-4 py-4 text-[#1A202C] font-bold">{unit.id}</td>
                        <td className="px-4 py-4 text-[#90A3BF]">{unit.bookingDate}</td>
                        <td className="px-4 py-4 text-[#1A202C]">{unit.model}</td>
                        <td className="px-4 py-4">
                            <span
                                className={`text-[12px] font-bold ${unit.status === 'Available'
                                    ? 'text-[#7fb519]'
                                    : unit.status === 'Unavailable'
                                        ? 'text-[#90a3bf]'
                                        : 'text-[#111927]'
                                    }`}
                            >
                                {unit.status}
                            </span>
                        </td>
                        <td className="px-4 py-4 text-[#90A3BF]">{unit.plan}</td>
                        <td className="px-4 py-4 max-w-[220px] text-[#90A3BF]">{unit.date}</td>
                        <td className="px-4 py-4 text-[#1A202C] font-bold">
                            <div className="flex flex-col">
                                <span>{unit.priceDay.split(' ')[0]}</span>
                                <span className="text-[11px] text-[#90A3BF] font-normal">{unit.priceDay.split(' ')[1]}</span>
                            </div>
                        </td>
                        <td className="px-4 py-4">
                            <div className="flex items-center justify-center gap-1.5">
                                <button className="cursor-pointer w-[44px] h-[44px] rounded-lg bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d56d4] transition-colors" title="Vehicle details">
                                    <img src={CarUpIcon} alt="" className="w-[30px] h-[30px] object-contain" />
                                </button>
                                <button className="cursor-pointer w-[44px] h-[44px] rounded-lg bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d56d4] transition-colors" title="Transfer">
                                    <img src={CarDownIcon} alt="" className="w-[30px] h-[30px] object-contain" />
                                </button>
                                <button className="cursor-pointer w-[44px] h-[44px] rounded-lg bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d56d4] transition-colors" title="Call">
                                    <img src={PhoneIcon} alt="" className="w-[30px] h-[30px] object-contain" />
                                </button>
                                <button className="cursor-pointer w-[44px] h-[44px] rounded-lg bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d56d4] transition-colors" title="Message">
                                    <img src={ChatIcon} alt="" className="w-[30px] h-[30px] object-contain" />
                                </button>
                                <button className="cursor-pointer w-[44px] h-[44px] rounded-lg bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d56d4] transition-colors" title="Documents">
                                    <img src={DoubleChatIcon} alt="" className="w-[30px] h-[30px] object-contain" />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const CarCard = ({ car, showTable = false, onNavigate }) => (
    <section className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/60 overflow-hidden mb-6">
        <div className="p-6 border-b border-[#F1F3F9] flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex gap-5 items-start flex-1">
                <div className="bg-[#F6F7F9] rounded-[16px] p-3 flex items-center justify-center min-h-[100px] shrink-0">
                    <img
                        src={car.image}
                        alt={car.name}
                        className="w-[140px] md:w-[170px] object-contain"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/170x100/f6f7f9/90a3bf?text=${car.name.replace(' ', '+')}`;
                        }}
                    />
                </div>
                <div className="space-y-1.5 min-w-0">
                    <span className="text-[12px] text-[#90A3BF] font-semibold uppercase tracking-wide">{car.category}</span>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-x-4 gap-y-1.5 font-bold">
                        <h2 className="text-[24px] md:text-[28px] font-extrabold text-[#1A202C]">{car.name}</h2>
                        <div className="flex flex-wrap gap-4 md:gap-6 text-[14px] font-semibold text-[#90A3BF]">
                            <span className="inline-flex items-center gap-1.5">
                                <img src="/assets/gas-station.png" alt="" className="w-3.5 h-3.5 object-contain" />
                                {car.specs.fuel}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <img src="/assets/manual-auto-icon.png" alt="" className="w-3.5 h-3.5 object-contain" />
                                {car.specs.transmission}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <img src="/assets/people-icon.png" alt="" className="w-3.5 h-3.5 object-contain" />
                                {car.specs.capacity}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[#90A3BF] font-bold">
                                Price <span className="text-[#242731] text-[15px] ml-1">{car.specs.price}</span> /days
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center gap-1.5 bg-[#3563E9]/10 text-[#3563E9] text-[12px] font-bold px-2.5 py-1 rounded-md border border-[#3563E9]">
                            Available {car.availableUnits} Unit
                        </div>
                        <div className="flex items-center gap-2 text-[12px]">
                            <div className="flex text-[#FFB648] gap-0.5">
                                <i className="fa-solid fa-star text-[10px]" />
                                <i className="fa-solid fa-star text-[10px]" />
                                <i className="fa-solid fa-star text-[10px]" />
                                <i className="fa-solid fa-star text-[10px]" />
                                <i className="fa-regular fa-star text-[10px]" />
                            </div>
                            <span className="text-[#90A3BF] font-bold">{car.rating}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0 lg:flex-col items-stretch lg:w-[150px]">
                <button onClick={() => onNavigate && onNavigate(car.id)} className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] bg-[#3563E9] text-white text-[13px] font-bold shadow-[0px_8px_16px_rgba(53,99,233,0.3)] hover:bg-[#2d56d4] transition-colors">
                    <img src="/assets/View-details-icon.png" alt="" className="w-4 h-4 object-contain" />
                    View Details
                </button>
                <button onClick={() => onNavigate && onNavigate(car.id)} className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] bg-[#3563E9] text-white text-[13px] font-bold shadow-[0px_8px_16px_rgba(53,99,233,0.3)] hover:bg-[#2d56d4] transition-colors">
                    <img src="/assets/Sale-report-icon.png" alt="" className="w-4 h-4 object-contain" />
                    Sales Report
                </button>
            </div>
        </div>

        {showTable && car.bookings && (
            <div className="p-6 pt-0">
                <BookingTable bookings={car.bookings} />
            </div>
        )}
    </section>
);

const CarUnit = () => {
    const navigate = useNavigate();
    const handleNavigate = (carId) => navigate(`/car-unit/${carId}`);
    const carsData = [
        {
            id: 1,
            name: 'Audi A6',
            category: 'Sedan',
            image: AudiA6Img,
            availableUnits: '5/12',
            rating: '440+',
            specs: { fuel: '80L', transmission: '(7)Manual (5)Auto', capacity: '5 People', price: '120 OMR' },
            showTable: true,
            bookings: [
                { id: 'OM 2011', bookingDate: '02/04/2023', model: 'Audi A6 2000', status: 'Book with Mr. Muhammad', plan: '2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
                { id: 'UAE 369', bookingDate: '02/04/2023', model: 'Audi A6 2001', status: 'Book with Mrs Ahamad', plan: '2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
                { id: 'OMR 3992', bookingDate: '02/04/2023', model: 'Audi A6 2000', status: 'Available', plan: '--', date: '--', priceDay: '$350 Paid' },
                { id: 'OMR 1986', bookingDate: '02/04/2023', model: 'Audi A6 2012', status: 'Available', plan: 'Next 2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
                { id: 'ABK 346', bookingDate: '02/04/2023', model: 'Audi A6 2012', status: 'Unavailable', plan: '2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
                { id: 'AX 121', bookingDate: '02/04/2023', model: 'Audi A6 2012', status: 'Unavailable', plan: '2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
            ]
        },
        {
            id: 2,
            name: 'Nissan GT - R',
            category: 'Sport Cart',
            image: NissanGTRImg,
            availableUnits: '5/6',
            rating: '440+',
            specs: { fuel: '80L', transmission: '(7)Manual (5)Auto', capacity: '5 People', price: '120 OMR' },
            showTable: true,
            bookings: [
                { id: 'OM 2011', bookingDate: '02/04/2023', model: 'Audi A6 2000', status: 'Book with Mr. Muhammad', plan: '2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
                { id: 'UAE 369', bookingDate: '02/04/2023', model: 'Audi A6 2001', status: 'Book with Mrs Ahamad', plan: '2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
                { id: 'OMR 3992', bookingDate: '02/04/2023', model: 'Audi A6 2000', status: 'Available', plan: '--', date: '--', priceDay: '$350 Paid' },
                { id: 'OMR 1986', bookingDate: '02/04/2023', model: 'Audi A6 2012', status: 'Available', plan: 'Next 2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
                { id: 'ABK 346', bookingDate: '02/04/2023', model: 'Audi A6 2012', status: 'Unavailable', plan: '2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
                { id: 'AX 121', bookingDate: '02/04/2023', model: 'Audi A6 2012', status: 'Unavailable', plan: '2 Days', date: 'Start 01/03/2023 End 03/03/2023', priceDay: '$350 Paid' },
            ]
        }
    ];

    const additionalCars = [
        { id: 3, name: 'Nissan GT - R', category: 'Sport Cart', image: NissanGTRImg, availableUnits: '3/5', rating: '440+', specs: { fuel: '80L', transmission: '(7)Manual (5)Auto', capacity: '5 People', price: '300 OMR' } },
        { id: 4, name: 'Nissan GT - R', category: 'Sport Cart', image: NissanGTRImg, availableUnits: '3/5', rating: '440+', specs: { fuel: '80L', transmission: '(7)Manual (5)Auto', capacity: '5 People', price: '300 OMR' } },
        { id: 5, name: 'Nissan GT - R', category: 'Sport Cart', image: NissanGTRImg, availableUnits: '3/5', rating: '440+', specs: { fuel: '80L', transmission: '(7)Manual (5)Auto', capacity: '5 People', price: '300 OMR' } },
    ];

    return (
        <div className="font-sans car-unit-page space-y-8">
            <h1 className="text-[24px] md:text-[28px] font-extrabold text-[#1A202C]">Car Units</h1>

            <div className="bg-white p-4 md:p-5 rounded-[18px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] overflow-x-auto whitespace-nowrap md:whitespace-normal border border-white/60">
                <div className="flex items-center gap-6 min-w-max md:min-w-0">
                    <div className="flex flex-col gap-1">
                        <span className="text-[14px] text-[#1A202C] font-bold tracking-tight">Locations</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <span className="text-[#90A3BF] text-[14px]">Select your city</span>
                            <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
                        </div>
                    </div>
                    <div className="h-10 w-px bg-[#F1F3F9] hidden md:block" />
                    <div className="flex flex-col gap-1">
                        <span className="text-[14px] text-[#1A202C] font-bold tracking-tight">Date</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <span className="text-[#90A3BF] text-[14px]">Select your date</span>
                            <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
                        </div>
                    </div>
                    <div className="h-10 w-px bg-[#F1F3F9] hidden md:block" />
                    <div className="flex flex-col gap-1">
                        <span className="text-[14px] text-[#1A202C] font-bold tracking-tight">Time</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <span className="text-[#90A3BF] text-[14px]">Select your time</span>
                            <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
                        </div>
                    </div>
                    <div className="h-10 w-px bg-[#F1F3F9] hidden md:block" />
                    <div className="flex flex-col gap-1">
                        <span className="text-[14px] text-[#1A202C] font-bold tracking-tight">Car</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <span className="text-[#90A3BF] text-[14px]">Select your car</span>
                            <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
                        </div>
                    </div>

                    <div className="ml-auto w-[280px] hidden md:block">
                        <div className="bg-white rounded-lg px-4 py-2 flex items-center border border-[#F1F3F9] shadow-sm">
                            <i className="fa-solid fa-magnifying-glass text-[#90A3BF] mr-3 text-sm" />
                            <input
                                type="text"
                                placeholder="Search something here"
                                className="bg-transparent outline-none text-[14px] text-[#596780] w-full placeholder:text-[#90A3BF]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {carsData.map(car => (
                    <CarCard key={car.id} car={car} showTable={car.showTable} onNavigate={handleNavigate} />
                ))}
            </div>

            <div className="space-y-6">
                {additionalCars.map(car => (
                    <CarCard key={car.id} car={car} onNavigate={handleNavigate} />
                ))}
            </div>
        </div>
    );
};

export default CarUnit;
