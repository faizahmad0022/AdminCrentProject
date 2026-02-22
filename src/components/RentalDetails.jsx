import { ChevronDown } from 'lucide-react';

const RentalDetails = () => {
    return (
        <div className="bg-white p-7 rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] h-full flex flex-col border border-white/50">
            <h3 className="text-[20px] font-extrabold text-[#1A202C] mb-8">Details Rental</h3>

            {/* Interactive map (Google Maps embed) */}
            <div className="w-full h-64 rounded-[16px] mb-8 relative overflow-hidden border border-[#E0E9F4]">
                <iframe
                    title="Rental pick-up and drop-off map"
                    src="https://maps.google.com/maps?q=Semarang%2C%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>

            <div className="flex items-center gap-4 mb-10">
                <div
                    className="w-[132px] h-[72px] rounded-[12px] flex items-center justify-center relative overflow-hidden border border-[#3563E9]/20 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/Car-background.png')" }}
                >
                    <img src="/assets/Nissan-GT-R.png" alt="Nissan GT-R" className="w-[110px] object-contain" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="text-2xl font-extrabold text-[#1A202C] tracking-tight">Nissan GT-R</h4>
                            <p className="text-[14px] text-[#596780] font-bold mt-1">Sport Car</p>
                        </div>
                        <span className="text-[#90A3BF] text-[14px] font-bold">#9761</span>
                    </div>
                </div>
            </div>

            <div className="space-y-10 relative flex-1">
                <div className="absolute left-[8px] top-4 bottom-4 w-[2px] border-l-2 border-dotted border-[#C3D4E9]" />

                {/* Pick Up */}
                <div className="flex gap-6 relative">
                    <div className="mt-1 flex flex-col items-center">
                        <div className="w-5 h-5 rounded-full border-[3px] border-[#3563E9]/20 bg-[#3563E9] z-10" />
                    </div>
                    <div className="flex-1">
                        <h5 className="font-extrabold text-[#1A202C] mb-4 text-[16px]">Pick - Up</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div className="flex items-center justify-between text-[#90A3BF] font-bold text-[12px] bg-[#F6F7F9] rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
                                <span>Kota Semarang</span>
                                <ChevronDown className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
                            </div>
                            <div className="flex items-center justify-between text-[#90A3BF] font-bold text-[12px] bg-[#F6F7F9] rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
                                <span>20 July 2022</span>
                                <ChevronDown className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
                            </div>
                            <div className="flex items-center justify-between text-[#90A3BF] font-bold text-[12px] bg-[#F6F7F9] rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
                                <span>07.00</span>
                                <ChevronDown className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Drop Off */}
                <div className="flex gap-6 relative">
                    <div className="mt-1 flex flex-col items-center">
                        <div className="w-5 h-5 rounded-full border-[3px] border-[#5CA1FF]/30 bg-[#5CA1FF] z-10" />
                    </div>
                    <div className="flex-1">
                        <h5 className="font-extrabold text-[#1A202C] mb-4 text-[16px]">Drop - Off</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div className="flex items-center justify-between text-[#90A3BF] font-bold text-[12px] bg-[#F6F7F9] rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
                                <span>Kota Semarang</span>
                                <ChevronDown className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
                            </div>
                            <div className="flex items-center justify-between text-[#90A3BF] font-bold text-[12px] bg-[#F6F7F9] rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
                                <span>21 July 2022</span>
                                <ChevronDown className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
                            </div>
                            <div className="flex items-center justify-between text-[#90A3BF] font-bold text-[12px] bg-[#F6F7F9] rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
                                <span>01.00</span>
                                <ChevronDown className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#F1F3F9] mt-10 pt-8 flex justify-between items-center">
                <div>
                    <p className="text-[#1A202C] font-extrabold text-[18px]">Total Rental Price</p>
                    <p className="text-[#90A3BF] text-[14px] mt-1 font-bold">Overall price and includes rental discount</p>
                </div>
                <div className="text-[32px] font-extrabold text-[#1A202C]">$80.00</div>
            </div>
        </div>
    );
};
export default RentalDetails;
