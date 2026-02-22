import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', uv: 4000 },
    { name: 'Tue', uv: 3000 },
    { name: 'Wed', uv: 2000 },
    { name: 'Thu', uv: 2780 },
    { name: 'Fri', uv: 1890 },
    { name: 'Sat', uv: 2390 },
    { name: 'Sun', uv: 3490 },
];

const ChartSection = () => {
    return (
        <section className="charts-row grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="chart-card bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-4">Booking Overview</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="uv" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="chart-card bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-4">Earning Summary</h3>
                <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <span className="text-gray-400">Chart Component Placeholder</span>
                </div>
            </div>
        </section>
    );
};
export default ChartSection;
