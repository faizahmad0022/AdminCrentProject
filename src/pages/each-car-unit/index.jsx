import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import NissanGTRImg from '../../assets/Nissan-GT-R.png';
import AudiA6Img from '../../assets/Audi-A6.png';
import fuelIcon from '../../assets/fuel-icon.png';
import tireIcon from '../../assets/tire-icon.png';
import scheduleIcon from '../../assets/schedule-icon.png';
import CarBackground from '../../assets/Car-background.png';
import checkMark from '../../assets/check-mark.png';
import calendarIcon from '../../assets/calendar-icon.png';

/* ─── DATA ─── */
const carsDB = {
    1: {
        name: 'Audi A6',
        image: AudiA6Img,
        rating: 4,
        reviewCount: '440+',
        description: 'A car that embodies the pinnacle of German engineering. The Audi A6 offers outstanding performance, inspired by the most unforgiving proving ground.',
        typeCar: 'Sedan',
        capacity: '5 Person',
        steering: 'Automatic',
        gasoline: '80L',
        features: ['Air conditioning', 'Bluetooth Connectivity', 'USB Charging ports', 'Backup Camera', 'Spacious Trunk', 'Cruise Control', 'Keyless Entry'],
    },
    2: {
        name: 'Nissan GT – R',
        image: NissanGTRImg,
        background: CarBackground,
        rating: 4,
        reviewCount: '440+',
        description: 'NISMO has become the embodiment of Nissan\'s outstanding performance, inspired by the most unforgiving proving ground, the "race track".',
        typeCar: 'Sport',
        capacity: '2 Person',
        steering: 'Manual',
        gasoline: '70L',
        features: ['Air conditioning', 'Bluetooth Connectivity', 'USB Charging ports', 'Backup Camera', 'Spacious Trunk', 'Cruise Control', 'Keyless Entry'],
    },
    3: {
        name: 'Nissan GT – R',
        image: NissanGTRImg,
        background: CarBackground,
        rating: 4,
        reviewCount: '440+',
        description: 'NISMO has become the embodiment of Nissan\'s outstanding performance, inspired by the most unforgiving proving ground, the "race track".',
        typeCar: 'Sport',
        capacity: '2 Person',
        steering: 'Manual',
        gasoline: '70L',
        features: ['Air conditioning', 'Bluetooth Connectivity', 'USB Charging ports', 'Backup Camera', 'Spacious Trunk', 'Cruise Control', 'Keyless Entry'],
    },
};

const earningsData = [
    { name: 'Jan', value: 50120 },
    { name: 'Feb', value: 82340 },
    { name: 'Mar', value: 140750 },
    { name: 'Apr', value: 101223 },
    { name: 'May', value: 78900 },
    { name: 'Jun', value: 89450 },
];

const bookingsData = [
    { id: 'BK10245', client: 'Alex Johnson', plan: 'Standard', pickup: '24-04-05', returnDate: '24-04-10', payment: '$250', status: 'Completed' },
    { id: 'BK10246', client: 'Maria Lopez', plan: 'Premium', pickup: '24-04-08', returnDate: '24-04-15', payment: '$450', status: 'In Route' },
    { id: 'BK10247', client: 'Chris Green', plan: 'Economy', pickup: '24-04-10', returnDate: '24-04-12', payment: '$180', status: 'Completed' },
    { id: 'BK10248', client: 'Jasmine Keith', plan: 'Eco-friendly', pickup: '24-04-11', returnDate: '24-04-18', payment: '$300', status: 'Canceled' },
    { id: 'BK10249', client: 'Sam Patel', plan: 'Luxury', pickup: '24-04-09', returnDate: '24-04-16', payment: '$550', status: 'Completed' },
];

const maintenanceItems = [
    { icon: fuelIcon, label: 'Oil Change', date: '2025-08-10', color: '#3563E9' },
    { icon: tireIcon, label: 'Tire Replacement', date: '2025-08-10', color: '#3563E9' },
    { icon: scheduleIcon, label: 'Scheduled maintenance', date: '2025-08-10', color: '#3563E9' },
    { icon: fuelIcon, label: 'Unit Return', date: '2025-08-10', value: '306', color: '#3563E9' },
];

const alertsData = [
    { label: 'Over Speeding', sublabel: 'High Speed Alert Feature', defaultOn: true },
    { label: 'Harsh Braking', sublabel: 'Harsh Braking Warning Alert', defaultOn: true },
    { label: "Vehicle's Engine", sublabel: 'Vehicle Engine Warning Alert', defaultOn: true },
    { label: 'Car Idling', sublabel: 'Car Idling Fuel Consumption Alert', defaultOn: false },
    { label: 'Engine Oil Pressure', sublabel: 'Engine Oil Pressure Warning Alert', defaultOn: false },
    { label: 'Certificate Renewal', sublabel: 'Once a Year Certificate License Renewal', defaultOn: true },
    { label: 'License Renewal', sublabel: 'Once a Year License Renewal', defaultOn: true },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#1A202C] text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold">
                ${payload[0].value.toLocaleString()}.00
            </div>
        );
    }
    return null;
};

const Toggle = ({ defaultOn }) => {
    const [on, setOn] = useState(defaultOn);
    return (
        <button
            onClick={() => setOn(!on)}
            className={`cursor-pointer relative w-[50px] h-[28px] rounded-full transition-colors duration-300 flex-shrink-0 ${on ? 'bg-[#3563E9]' : 'bg-[#C3D4E9]'}`}
        >
            <span className={`absolute top-[3px] w-[22px] h-[22px] rounded-full bg-white shadow-md transition-transform duration-300 ${on ? 'left-[25px]' : 'left-[3px]'}`} />
        </button>
    );
};

const EachCarUnit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const car = carsDB[id] || carsDB[2];
    const [currentPage, setCurrentPage] = useState(2);

    return (
        <div className="each-car-unit-page space-y-6">
            <section className="flex flex-col lg:flex-row gap-6">
                <div className="relative bg-[#3563E9] p-6 flex items-center justify-center lg:w-[320px] min-h-[200px] overflow-hidden rounded-[10px] flex-shrink-0" style={car.background ? { backgroundImage: `url(${car.background})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                    {!car.background && (
                        <div className="absolute inset-0 opacity-10">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="absolute" style={{ top: `${i * 30}px`, left: '50%', transform: 'translateX(-50%)', width: `${200 + i * 40}px`, height: '25px', borderBottom: '3px solid white', borderRadius: '0 0 50% 50%' }} />
                            ))}
                        </div>
                    )}
                    <img src={car.image} alt={car.name} className="w-[260px] object-contain relative z-10 drop-shadow-2xl" />
                </div>

                <div className="flex-1 bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/60 p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <h1 className="text-[28px] font-extrabold text-[#1A202C]">{car.name}</h1>
                        <div className="flex items-center gap-2">
                            <button className="cursor-pointer w-8 h-8 rounded-lg bg-[#3563e9] flex items-center justify-center hover:bg-[#2148c0] transition-colors">
                                <img src="/assets/cell-phone-icon.png" alt="Phone" className="w-4 h-4 brightness-0 invert" />
                            </button>
                            <button className="cursor-pointer w-8 h-8 rounded-lg bg-[#3563e9] flex items-center justify-center hover:bg-[#2148c0] transition-colors">
                                <img src="/assets/message-icon.png" alt="Email" className="w-4 h-4 brightness-0 invert" />
                            </button>
                            <button className="cursor-pointer w-8 h-8 rounded-lg bg-[#3563e9] flex items-center justify-center hover:bg-[#2148c0] transition-colors">
                                <img src="/assets/chat-icon.png" alt="SMS" className="w-4 h-4 brightness-0 invert" />
                            </button>
                            <button className="cursor-pointer w-8 h-8 rounded-lg bg-[#3563e9] flex items-center justify-center hover:bg-[#2148c0] transition-colors">
                                <img src="/assets/chart-icon.png" alt="WhatsApp" className="w-4 h-4 brightness-0 invert" />
                            </button>
                            <button className="cursor-pointer px-3 py-1.5 rounded-lg bg-[#3563e9] text-white text-[11px] font-bold flex items-center gap-1.5">
                                <img src="/assets/certificate-icon.png" alt="" className="w-3.5 h-3.5 brightness-0 invert" />
                                License & Certification
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-[#FFB648] gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fa-${i < car.rating ? 'solid' : 'regular'} fa-star text-[14px]`} />
                            ))}
                        </div>
                        <span className="text-[13px] text-[#90A3BF] font-semibold">{car.reviewCount} Reviewer</span>
                    </div>

                    <p className="text-[14px] text-[#596780] leading-relaxed mb-6 max-w-[500px]">{car.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6">
                        <div><span className="text-[13px] text-[#90A3BF] font-medium">Type Car</span><p className="text-[14px] text-[#596780] font-bold">{car.typeCar}</p></div>
                        <div><span className="text-[13px] text-[#90A3BF] font-medium">Capacity</span><p className="text-[14px] text-[#596780] font-bold">{car.capacity}</p></div>
                        <div><span className="text-[13px] text-[#90A3BF] font-medium">Steering</span><p className="text-[14px] text-[#596780] font-bold">{car.steering}</p></div>
                        <div><span className="text-[13px] text-[#90A3BF] font-medium">Gasoline</span><p className="text-[14px] text-[#596780] font-bold">{car.gasoline}</p></div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {maintenanceItems.map((item, i) => (
                    <div key={i} className="bg-white rounded-[16px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/60 p-4 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#3563E9]/10 flex items-center justify-center flex-shrink-0">
                            <img src={item.icon} alt={item.label} className="w-7 h-7 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-[13px] font-bold text-[#1A202C] truncate">{item.label}</h4>
                            <div className="flex items-center gap-1.5">
                                <img src={calendarIcon} alt="" className="w-3 h-3 opacity-50" />
                                <span className="text-[11px] text-[#90A3BF] font-medium">{item.date}</span>
                            </div>
                        </div>
                        {item.value && <span className="text-[18px] font-extrabold text-[#3563E9]">{item.value}</span>}
                        <button className="cursor-pointer w-7 h-7 rounded-lg bg-[#3563E9] flex items-center justify-center hover:bg-[#2d56d4] transition-colors flex-shrink-0">
                            <img src="/assets/Edit-icon.png" alt="Edit" className="w-3.5 h-3.5 brightness-0 invert" />
                        </button>
                    </div>
                ))}
            </section>

            <section className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/60 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[18px] font-extrabold text-[#1A202C]">Car Features</h3>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    {car.features.map((feature, i) => (
                        <span key={i} className="inline-flex items-center gap-2 text-[13px] text-[#596780] font-semibold">
                            <img src={checkMark} alt="✓" className="w-4 h-4 object-contain" />
                            {feature}
                        </span>
                    ))}
                    <button className="cursor-pointer w-8 h-8 rounded-lg bg-[#3563E9] flex items-center justify-center hover:bg-[#2d56d4] transition-colors ml-2">
                        <img src="/assets/Edit-icon.png" alt="Edit" className="w-3.5 h-3.5 brightness-0 invert" />
                    </button>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/60 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-[18px] font-extrabold text-[#1A202C]">Earnings Summary</h3>
                            <div className="flex items-center bg-white border border-[#C3D4E9]/30 rounded-[10px] px-4 py-2 gap-2 cursor-pointer hover:bg-gray-50 transition-all shadow-sm">
                                <span className="text-[13px] text-[#596780] font-bold">Jan 2025 - Jun 2025</span>
                                <ChevronDown className="w-4 h-4 text-[#90A3BF]" strokeWidth={2} />
                            </div>
                        </div>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={earningsData}>
                                    <defs>
                                        <linearGradient id="ecuColor" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3563E9" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#3563E9" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F1F3F9" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#90A3BF', fontSize: 12, fontWeight: 600 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#90A3BF', fontSize: 12 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#3563E9', strokeWidth: 1, strokeDasharray: '4 4' }} />
                                    <Area type="monotone" dataKey="value" stroke="#3563E9" strokeWidth={3} fillOpacity={1} fill="url(#ecuColor)" dot={false} activeDot={{ r: 6, fill: '#3563E9', stroke: '#fff', strokeWidth: 3 }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                            <h3 className="text-[20px] font-extrabold text-[#1A202C]">Car Bookings</h3>
                            <div className="flex items-center gap-5 w-full sm:w-auto">
                                <div className="flex items-center bg-white border border-[#C3D4E9]/30 rounded-[12px] px-4 py-3 w-full sm:w-[280px] gap-3 shadow-sm focus-within:ring-2 focus-within:ring-[#3563E9]/20 focus-within:border-[#3563E9]/50">
                                    <Search className="w-5 h-5 text-[#90A3BF] flex-shrink-0" strokeWidth={2} />
                                    <input type="text" placeholder="Search" className="bg-transparent outline-none text-[14px] text-[#596780] w-full font-semibold placeholder:text-[#90A3BF]" />
                                </div>
                                <div className="flex items-center bg-white border border-[#C3D4E9]/30 rounded-[12px] px-5 py-3 gap-3 cursor-pointer hover:bg-gray-50 transition-all shadow-sm">
                                    <span className="text-[14px] text-[#596780] font-bold whitespace-nowrap">Sort By</span>
                                    <ChevronDown className="w-4 h-4 text-[#90A3BF]" strokeWidth={2} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] overflow-hidden border border-white/50">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="bg-[#F6F7F9] border-b border-[#F1F3F9] text-[#90A3BF] text-[12px] font-bold uppercase tracking-[0.05em]">
                                            <th className="px-6 py-5 whitespace-nowrap">Booking ID</th>
                                            <th className="px-6 py-5 whitespace-nowrap">Client</th>
                                            <th className="px-6 py-5 whitespace-nowrap">Plan</th>
                                            <th className="px-6 py-5 whitespace-nowrap">Pickup Date</th>
                                            <th className="px-6 py-5 whitespace-nowrap">Return Date</th>
                                            <th className="px-6 py-5 whitespace-nowrap">Payment</th>
                                            <th className="px-6 py-5 whitespace-nowrap">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F1F3F9]">
                                        {bookingsData.map((b) => {
                                            let statusBg = '', statusText = '';
                                            if (b.status === 'Completed') { statusBg = 'bg-[#70CF97]/10'; statusText = 'text-[#70CF97]'; }
                                            else if (b.status === 'In Route') { statusBg = 'bg-[#FF993A]/10'; statusText = 'text-[#FF993A]'; }
                                            else if (b.status === 'Canceled') { statusBg = 'bg-[#EF3651]/10'; statusText = 'text-[#EF3651]'; }
                                            return (
                                                <tr key={b.id} className="hover:bg-blue-50/30 transition-colors text-[14px] font-semibold">
                                                    <td className="px-6 py-5 text-[#1A202C]">{b.id}</td>
                                                    <td className="px-6 py-5 text-[#1A202C] font-bold">{b.client}</td>
                                                    <td className="px-6 py-5 text-[#596780]">{b.plan}</td>
                                                    <td className="px-6 py-5 text-[#90A3BF]">{b.pickup}</td>
                                                    <td className="px-6 py-5 text-[#90A3BF]">{b.returnDate}</td>
                                                    <td className="px-6 py-5 text-[#1A202C] font-extrabold">{b.payment}</td>
                                                    <td className="px-6 py-5">
                                                        <span className={`px-4 py-1.5 rounded-full text-[12px] font-extrabold border border-current ${statusBg} ${statusText}`}>{b.status}</span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-7 py-5 border-t border-[#F1F3F9] flex justify-between items-center">
                                <span className="text-[14px] text-[#90A3BF] font-bold">Showing 5 from 100 data</span>
                                <div className="flex items-center gap-1.5">
                                    <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-[10px] text-[#90A3BF] hover:bg-gray-100 transition-colors">
                                        <ChevronLeft className="w-4 h-4" strokeWidth={2} />
                                    </button>
                                    {[1, 2, 3].map((page) => (
                                        <button key={page} onClick={() => setCurrentPage(page)} className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-[10px] text-[14px] font-bold transition-all duration-200 ${page === currentPage ? 'bg-[#3563E9] text-white shadow-[0px_8px_16px_rgba(53,99,233,0.3)]' : 'text-[#90A3BF] hover:bg-gray-100'}`}>
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
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/60 p-5 space-y-1">
                        {alertsData.map((alert, i) => (
                            <div key={i} className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <h4 className="text-[14px] font-bold text-[#1A202C]">{alert.label}</h4>
                                        <p className="text-[11px] text-[#90A3BF] font-medium">{alert.sublabel}</p>
                                    </div>
                                </div>
                                <Toggle defaultOn={alert.defaultOn} />
                            </div>
                        ))}
                        <button className="cursor-pointer w-full mt-4 py-3.5 rounded-[12px] bg-[#3563E9] text-white text-[14px] font-bold flex items-center justify-center gap-2 shadow-[0px_8px_16px_rgba(53,99,233,0.3)] hover:bg-[#2d56d4] transition-colors">
                            <span className="text-lg">+</span>
                            Add Notification
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EachCarUnit;
