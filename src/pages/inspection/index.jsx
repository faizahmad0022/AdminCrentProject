"use client";
import CarVerticaleBackground from '../../assets/Car-verticale-background.png';
import tyreimg from '../../assets/tyreimg.png';
import { Upload, Check, ChevronDown } from 'lucide-react';
import BookingHeaderCard from '../../components/BookingHeaderCard';

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
    <div className="font-sans bg-[#F8F8F8]">
      <BookingHeaderCard />

      {/* IMAGE SECTION */}
      <div className="relative mt-20">
        <img
          src={CarVerticaleBackground}
          alt=""
          className="w-full"
        />

        {/* OVERLAY CONTENT (Both cards inside this) */}
        <div className="absolute inset-0 p-6 flex flex-col gap-3 overflow-auto">

          {/* FIRST CARD */}
          <div className="bg-gray-100 w-full max-w-6xl mx-auto rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* LEFT */}
              <div className="lg:min-w-[340px]">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                  Mileage/Gas
                </h2>

                <div className="mb-6">
                  <label className="block text-sm text-gray-600 mb-2">
                    Mileage
                  </label>
                  <input
                    type="text"
                    defaultValue="18,000 km"
                    readOnly
                    className="w-full bg-gray-200 text-gray-500 rounded-xl px-4 py-3"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-600 mb-3">
                    Gas
                  </label>
                  <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '38%' }} />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>38%</span>
                    <span>Full</span>
                  </div>
                </div>

                <div className="bg-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Upload className="text-white w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900">
                    Upload mileage/fuel picture
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Drag and drop here
                  </p>
                </div>
              </div>

              {/* RIGHT MAP */}
              <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[320px] bg-gray-200">
                <iframe
                  title="Map - Semarang, Indonesia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.105789752594!2d110.4381254!3d-6.966667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024f%3A0x1e0e8b8b8b8b8b8b!2sSemarang%2C%20Central%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full border-0 min-h-[320px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>

          {/* SECOND CARD */}
          <div className="bg-gray-100 w-full max-w-7xl mx-auto rounded-2xl p-8 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-8">
              Condition
            </h2>

            {/* Part 1: Condition items (title + checkbox + Note + image) - one div */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {conditions.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-sm font-medium text-gray-700 flex-1 min-w-0">{item}</h3>
                    <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-xl p-4 flex justify-between items-center h-28">
                    <span className="text-gray-400 text-sm text-left flex-shrink-0">Note...</span>
                    <img
                      src={tyreimg}
                      alt="preview"
                      className="w-20 h-20 rounded-md object-cover flex-shrink-0"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className='max-w-2xl'>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
              <div>
                <label className="block text-sm text-gray-600 mb-3">
                  Tax Rate
                </label>
                <div className="bg-gray-200 rounded-xl px-4 py-4 flex justify-between items-center text-gray-500">
                  <span>5 %</span>
                  <ChevronDown size={18} />
                </div>
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm text-gray-600 mb-3">
                  Notes/Comments
                </label>
                <div className="bg-gray-200 rounded-xl h-14" />
              </div>
            </div>

          
            <div className="flex flex-col sm:flex-row gap-8 mt-10 w-full">
              <div className="flex-1 min-w-0 bg-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Upload className="text-white w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-800">
                  Upload current car condition
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Drag and drop here
                </p>
              </div>
              <div className="flex-1 min-w-0 bg-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Upload className="text-white w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-800">
                  Upload photo/PDF external inspection
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Drag and drop here
                </p>
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