const MaintenanceCards = () => {
    return (
        <section className="maintenance-cards grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="m-card bg-blue-900 p-4 rounded-xl text-white flex items-center gap-4 relative overflow-hidden">
                <div className="z-10">
                    <span className="text-xs opacity-70 block mb-1">Percentage</span>
                    <h3 className="text-xl font-bold">24%</h3>
                </div>
                <div className="ml-auto w-10 h-10 bg-white/10 rounded-full flex items-center justify-center z-10">
                    <img src="/assets/tire-icon.png" alt="Tire" className="w-5 h-5 invert" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/5 rounded-full"></div>
            </div>

            <div className="m-card bg-white p-4 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="z-10">
                    <span className="text-xs text-gray-400 block mb-1">Fuel Level</span>
                    <h3 className="text-xl font-bold text-gray-900">76%</h3>
                </div>
                <div className="ml-auto w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center z-10">
                    <img src="/assets/fuel-icon.png" alt="Fuel" className="w-5 h-5" />
                </div>
            </div>

            <div className="m-card bg-white p-4 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="z-10">
                    <span className="text-xs text-gray-400 block mb-1">Distance</span>
                    <h3 className="text-xl font-bold text-gray-900">145 km</h3>
                </div>
                <div className="ml-auto w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center z-10">
                    <img src="/assets/manual-auto-icon.png" alt="Distance" className="w-5 h-5" />
                </div>
            </div>
        </section>
    );
};
export default MaintenanceCards;
