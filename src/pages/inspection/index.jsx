"use client";
import tyreimg from '../../assets/tyreimg.png';
import { Upload, Check, ChevronDown } from 'lucide-react';
import BookingHeaderCard from '../../components/BookingHeaderCard';
import CarVerticaleBackground from '../../assets/Car-verticale-background.png';

const conditions = [
  'Scratches/Dent',
  'Tyre condition',
  'AC working',
  'Seats condition',
  'Mirrors',
  'Lights',
];

const Inspection = () => {
  return (
    <div className="bg-[#F8FAFC] p-10">
      <BookingHeaderCard />
      <div 
        className="mt-20 w-full min-h-screen py-10 px-4 md:px-8 lg:px-12"
        style={{
          backgroundImage: `url(${CarVerticaleBackground.src || CarVerticaleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          
          {/* FIRST CARD: Mileage & Gas */}
          <div className="bg-white/95 backdrop-blur-sm w-full rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* LEFT COLUMN */}
              <div className="lg:min-w-85 shrink-0">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Mileage/Gas</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-500 mb-2">Mileage</label>
                  <input
                    type="text"
                    defaultValue="18,000 km"
                    readOnly
                    className="w-full bg-gray-100 text-gray-700 font-medium rounded-xl px-4 py-3 border border-gray-200"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-500 mb-3">Gas</label>
                  <div className="h-2.5 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '38%' }} />
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-gray-500 mt-2">
                    <span>38%</span>
                    <span>Full</span>
                  </div>
                </div>

                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                    <Upload className="text-white w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">Upload mileage/fuel picture</h3>
                  <p className="text-xs text-gray-400 mt-1">Drag and drop here</p>
                </div>
              </div>

              {/* RIGHT MAP */}
              <div className="flex-1 relative rounded-2xl overflow-hidden min-h-87.5 shadow-inner bg-gray-100">
                <iframe
                  title="Map - Semarang, Indonesia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58290458142!2d110.3470241!3d-7.0051453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4952924c51%3A0x4027a76e3531b40!2sSemarang%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* SECOND CARD: Condition */}
          <div className="bg-white/95 backdrop-blur-sm w-full rounded-3xl p-8 shadow-xl">
            <h2 className="text-xl font-bold text-gray-800 mb-8">Condition</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conditions.map((item, index) => (
                <div key={index} className="flex flex-col group">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <h3 className="text-sm font-bold text-gray-700">{item}</h3>
                    <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center shadow-sm">
                      <Check className="text-white w-3.5 h-3.5 stroke-3" />
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex justify-between items-center h-28 hover:border-blue-200 transition-all">
                    <span className="text-gray-400 text-sm italic">Note...</span>
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-gray-200">
                      <img src={tyreimg} alt="preview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='max-w-4xl'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-3">Tax Rate</label>
                  <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-4 flex justify-between items-center text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors">
                    <span className="font-medium">5 %</span>
                    <ChevronDown size={20} className="text-gray-400" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-600 mb-3">Notes/Comments</label>
                  <div className="bg-gray-100 border border-gray-200 rounded-xl h-15 p-4 text-gray-400 text-sm">
                    Enter any additional details...
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-10">
                <div className="flex-1 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/50 transition-all group">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="text-white w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">Upload current car condition</h3>
                  <p className="text-xs text-gray-400 mt-2">Drag and drop here</p>
                </div>
                
                <div className="flex-1 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/50 transition-all group">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="text-white w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">Upload photo/PDF external inspection</h3>
                  <p className="text-xs text-gray-400 mt-2">Drag and drop here</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Inspection;