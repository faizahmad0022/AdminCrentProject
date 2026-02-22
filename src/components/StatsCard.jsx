import { ArrowUp } from 'lucide-react';

const StatsCard = ({ title, value, percentage, icon, trend }) => {
    const isUp = trend === 'up';
    return (
        <div className="stat-card bg-white p-6 rounded-[20px] flex flex-col gap-6 shadow-[0px_10px_30px_rgba(17,38,146,0.05)] hover:shadow-lg transition-all duration-300 h-full border border-white/50">
            <div className="stat-icon w-14 h-14 rounded-2xl flex items-center justify-center bg-[#3563E9] shadow-sm transition-transform hover:scale-110">
                <img src={icon} alt={title} className="w-7 h-7 object-contain" />
            </div>
            <div className="space-y-1">
                <h3 className="text-3xl font-extrabold text-[#1A202C] tracking-tight">{value}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-[#90A3BF] text-sm font-bold whitespace-nowrap">{title}</span>
                    <span className={`text-[12px] font-bold flex items-center gap-0.5 whitespace-nowrap ${isUp ? 'text-[#70CF97]' : 'text-[#ED3F3F]'}`}>
                        {percentage} {isUp ? <ArrowUp className="w-3 h-3" strokeWidth={3} /> : <span className="text-[10px]">↓</span>}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default StatsCard;
