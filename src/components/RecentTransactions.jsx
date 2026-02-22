const transactions = [
    { name: 'Silver Nissan GT-R', type: 'Sport Car', date: '20 July', price: 80.00, image: '/assets/Nissan-GT-R.png' },
    { name: 'White Koenigsegg', type: 'Sport Car', date: '19 July', price: 99.00, image: '/assets/Koegnigsegg.png' },
    { name: 'Blue Rolls-Royce', type: 'Sport Car', date: '18 July', price: 96.00, image: '/assets/Rolls-Royce.png' },
    { name: 'Brown CR-V', type: 'SUV', date: '17 July', price: 80.00, image: '/assets/C-RV.png' },
];

const RecentTransactions = () => {
    return (
        <div className="bg-white p-7 rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] h-full flex flex-col border border-white/50">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[18px] font-extrabold text-[#1A202C]">Recent Transaction</h3>
                <a href="#" className="text-[#3563E9] text-[14px] font-bold hover:underline">View All</a>
            </div>
            <div className="space-y-6 flex-1 overflow-y-auto hide-scrollbar">
                {transactions.map((car, index) => (
                    <div key={index} className="flex items-center justify-between group cursor-pointer py-1">
                        <div className="flex items-center gap-4">
                            <div className="w-24 h-14 bg-[#F6F7F9] rounded-xl overflow-hidden flex items-center justify-center p-1 border border-[#F1F3F9] group-hover:border-[#3563E9]/20 group-hover:shadow-md transition-all">
                                <img src={car.image} alt={car.name} className="w-20 object-contain" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1A202C] text-[14px] group-hover:text-[#3563E9] transition-colors">{car.name}</h4>
                                <p className="text-[12px] text-[#90A3BF] font-bold mt-0.5">{car.type}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[12px] text-[#90A3BF] font-bold mb-0.5">{car.date}</p>
                            <p className="font-extrabold text-[#1A202C] text-[14px]">${car.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default RecentTransactions;
