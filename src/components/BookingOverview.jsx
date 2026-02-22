import { ChevronDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const bookingData = [
    { name: 'Jan', value: 40000 },
    { name: 'Feb', value: 130000 },
    { name: 'Mar', value: 101223 },
    { name: 'Apr', value: 170000 },
    { name: 'May', value: 90000 },
    { name: 'Jun', value: 110000 },
];

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="relative bg-[#4A5568] text-white font-bold text-sm px-4 py-3 rounded-lg shadow-lg">
            <span>${Number(payload[0].value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#4A5568]" />
        </div>
    );
};

const BookingOverview = () => {
    return (
        <div className="bg-white p-7 rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] h-full flex flex-col border border-white/50">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-[18px] font-extrabold text-[#1A202C]">Booking Overview</h3>
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-200 group">
                    <span className="text-[13px] text-[#1A202C] font-medium">Jan 2025 - Jun 2025</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={2} />
                </div>
            </div>

            <div className="flex-1 w-full min-h-[280px] relative mt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={bookingData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorBooking" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4C84E9" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#C3D5F9" stopOpacity={0.15} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="5 5"
                            stroke="#E2E8F0"
                            vertical={true}
                            horizontal={true}
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 12 }}
                            dy={15}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 12 }}
                            tickFormatter={(value) => value === 0 ? '$0' : `$${value / 1000}k`}
                            ticks={[0, 50000, 100000, 150000, 200000]}
                            domain={[0, 200000]}
                            width={45}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ stroke: '#4C84E9', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#4C84E9"
                            strokeWidth={2.5}
                            fillOpacity={1}
                            fill="url(#colorBooking)"
                            animationDuration={1000}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BookingOverview;
