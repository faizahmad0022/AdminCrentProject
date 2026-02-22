import { MoreVertical } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Sport Car', value: 17439, color: '#3563E9' },
    { name: 'SUV', value: 9478, color: '#1e40af' },
    { name: 'Coupe', value: 18197, color: '#3b82f6' },
    { name: 'Hatchback', value: 12510, color: '#60a5fa' },
    { name: 'MPV', value: 14406, color: '#93c5fd' },
];

const TopCarsChart = () => {
    return (
        <div className="bg-white p-6 rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] flex flex-col border border-white/50">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[18px] font-extrabold text-[#1A202C]">Top 5 Car Rental</h3>
                <button className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-[#90A3BF] hover:text-[#1A202C] transition-colors">
                    <MoreVertical className="w-5 h-5" strokeWidth={2} />
                </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="relative w-48 h-48 flex-shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={65}
                                outerRadius={80}
                                paddingAngle={0}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-2xl font-extrabold text-[#1A202C]">72,030</span>
                        <span className="text-sm text-[#90A3BF] font-bold">Rental Car</span>
                    </div>
                </div>

                <div className="flex-1 w-full space-y-4">
                    {data.map((item) => (
                        <div key={item.name} className="flex justify-between items-center w-full group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-3 h-3 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-[14px] text-[#596780] font-bold">{item.name}</span>
                            </div>
                            <span className="text-[14px] font-extrabold text-[#1A202C]">{item.value.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TopCarsChart;
