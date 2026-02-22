import { ChevronDown } from 'lucide-react';

const CarAvailability = () => {
    return (
        <div className="bg-white p-6 rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] h-full flex flex-col border border-white/50">
            <h3 className="text-[18px] font-extrabold text-[#1A202C] mb-6">Car Availability</h3>

            <div className="space-y-4 flex-1">
                <div className="input-group relative">
                    <div className="bg-[#F6F7F9] rounded-xl px-4 py-3 flex items-center gap-3 border border-[#F1F3F9]">
                        <img
                            src="/assets/car-icon.png"
                            alt="Car"
                            className="w-5 h-5"
                        />
                        <select className="bg-transparent w-full outline-none text-[#596780] text-sm font-semibold appearance-none z-10 relative cursor-pointer">
                            <option>Car Number</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#90A3BF] absolute right-4 pointer-events-none" strokeWidth={2} />
                    </div>
                </div>

                <div className="input-group relative">
                    <div className="bg-[#F6F7F9] rounded-xl px-4 py-3 flex items-center gap-3 border border-[#F1F3F9]">
                        <img
                            src="/assets/calendar-icon.png"
                            alt="Calendar"
                            className="w-5 h-5"
                        />
                        <select className="bg-transparent w-full outline-none text-[#596780] text-sm font-semibold appearance-none z-10 relative cursor-pointer">
                            <option>Jan 20, 2025</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#90A3BF] absolute right-4 pointer-events-none" strokeWidth={2} />
                    </div>
                </div>

                <div className="input-group relative">
                    <div className="bg-[#F6F7F9] rounded-xl px-4 py-3 flex items-center gap-3 border border-[#F1F3F9]">
                        <img
                            src="/assets/clock-icon.png"
                            alt="Clock"
                            className="w-5 h-5"
                        />
                        <select className="bg-transparent w-full outline-none text-[#596780] text-sm font-semibold appearance-none z-10 relative cursor-pointer">
                            <option>10 AM</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#90A3BF] absolute right-4 pointer-events-none" strokeWidth={2} />
                    </div>
                </div>
            </div>

            <button className="cursor-pointer w-full bg-[#3563E9] hover:bg-[#2d56d4] text-white font-bold py-3.5 rounded-xl transition-all shadow-[0px_8px_16px_rgba(53,99,233,0.3)] mt-6 text-[15px]">
                Check
            </button>
        </div>
    );
};
export default CarAvailability;
