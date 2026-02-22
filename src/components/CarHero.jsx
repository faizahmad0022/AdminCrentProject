const CarHero = () => {
    return (
        <section className="car-hero bg-white p-6 rounded-2xl shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between">
            <div className="car-info">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Audi A6</h2>
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-gray-500">4.5</span>
                    <div className="flex text-yellow-500 text-xs">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span className="text-sm text-gray-400">(204 Review)</span>
                </div>
                <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-6">
                    A car that embodies the pinnacle of German engineering, performance, and luxury. The Audi A6 is a masterpiece of design.
                </p>
                <div className="flex gap-4">
                    <div className="feature flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                        <i className="fa-solid fa-car text-blue-500"></i>
                        <span className="text-sm font-medium text-gray-700">4 Doors</span>
                    </div>
                    <div className="feature flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                        <i className="fa-solid fa-user text-blue-500"></i>
                        <span className="text-sm font-medium text-gray-700">5 Pass</span>
                    </div>
                </div>
            </div>
            <div className="car-image relative mt-6 md:mt-0">
                <img src="/assets/Audi-A6.png" alt="Audi A6" className="w-[400px] object-contain" />
                {/* Background blob if needed */}
            </div>
        </section>
    );
};
export default CarHero;
