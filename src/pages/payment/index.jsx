import { useState, useEffect } from 'react';
import { ArrowUp, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import arrowDownPayment from '../../assets/arrow-down-payment.png';
import arrowUpPayment from '../../assets/arrow-up-payment.png';
import searchIcon from '../../assets/search-icon.png';
import editIcon from '../../assets/edit-icon-booking.png';
import deleteIcon from '../../assets/delete-icon-booking.png';

const FILTER_OPTIONS = {
  location: ['Muscat', 'Salalah', 'Sohar', 'Nizwa', 'Sur'],
  date: ['Today', 'Tomorrow', 'This week', 'Next week', 'Pick a date'],
  time: ['Morning (6am–12pm)', 'Afternoon (12pm–6pm)', 'Evening (6pm–12am)', 'Any time'],
  car: ['Economy', 'Sedan', 'SUV', 'Luxury', 'Van'],
};

const paymentCards = [
  { title: 'Complete Payment', value: '78.423', percentage: '15.2%', trend: 'up', icon: '/assets/Total-revenue-icon.png', iconWhite: false },
  { title: 'Awaiting Payment', value: '32.567', percentage: '5.2%', trend: 'up', icon: arrowDownPayment, iconWhite: true },
  { title: 'Overdue', value: '41.411', percentage: '21.2%', trend: 'down', icon: arrowUpPayment, iconWhite: true },
];

const paymentData = [
  { invoiceId: 'INV-WZ-0010', client: 'Alex Johnson', carModel: 'Honda Civic', ratePerDay: '600 OMR', rentalPeriod: '1 Day', amount: '600 OMR', dueDate: '24-08-25', status: 'Completed' },
  { invoiceId: 'INV-WZ-0010', client: 'Alex Johnson', carModel: 'Honda Civic', ratePerDay: '600 OMR', rentalPeriod: '1 Day', amount: '600 OMR', dueDate: '24-08-25', status: 'Awaiting' },
  { invoiceId: 'INV-WZ-0010', client: 'Alex Johnson', carModel: 'Honda Civic', ratePerDay: '600 OMR', rentalPeriod: '1 Day', amount: '600 OMR', dueDate: '24-08-25', status: 'Completed' },
  { invoiceId: 'INV-WZ-0010', client: 'Alex Johnson', carModel: 'Honda Civic', ratePerDay: '600 OMR', rentalPeriod: '1 Day', amount: '600 OMR', dueDate: '24-08-25', status: 'Completed' },
  { invoiceId: 'INV-WZ-0010', client: 'Alex Johnson', carModel: 'Honda Civic', ratePerDay: '600 OMR', rentalPeriod: '1 Day', amount: '600 OMR', dueDate: '24-08-25', status: 'Completed' },
];

const Payment = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const [filters, setFilters] = useState({ location: '', date: '', time: '', car: '' });
  const [openFilter, setOpenFilter] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('[data-filter-dropdown]')) setOpenFilter(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="payment-content space-y-6">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paymentCards.map((card) => {
          const isUp = card.trend === 'up';
          return (
            <div key={card.title} className="bg-white p-6 rounded-[20px] flex flex-col gap-6 shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/50">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#3563E9] shadow-sm">
                <img src={card.icon} alt={card.title} className={`w-7 h-7 object-contain ${card.iconWhite ? 'brightness-0 invert' : ''}`} />
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-extrabold text-[#1A202C] tracking-tight">{card.value}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[#90A3BF] text-sm font-bold whitespace-nowrap">{card.title}</span>
                  <span className="text-[12px] font-bold flex items-center gap-0.5 whitespace-nowrap bg-[#eeeeee] text-[#333333] px-1.5 py-0.5 rounded">
                    {card.percentage} <ArrowUp className="w-3 h-3 text-[#878787]" strokeWidth={3} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/50 p-5">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          <div className="flex flex-1 flex-wrap items-end gap-0">
            {[
              { key: 'location', label: 'Locations', placeholder: 'Select your city' },
              { key: 'date', label: 'Date', placeholder: 'Select your date' },
              { key: 'time', label: 'Time', placeholder: 'Select your time' },
              { key: 'car', label: 'Car', placeholder: 'Select your car' },
            ].map((item, i) => {
              const isOpen = openFilter === item.key;
              const options = FILTER_OPTIONS[item.key];
              const value = filters[item.key];
              return (
                <div key={item.label} className="flex items-center flex-1 min-w-[120px]">
                  {i > 0 && <div className="w-px h-10 bg-[#E5E7EB] self-center mr-4 flex-shrink-0" aria-hidden />}
                  <div className="flex-1 min-w-0 py-0 pr-4 relative" data-filter-dropdown>
                    <label className="block text-[12px] font-bold text-[#1A202C] mb-1.5">{item.label}</label>
                    <button
                      type="button"
                      onClick={() => setOpenFilter(isOpen ? null : item.key)}
                      className={`w-full bg-white border rounded-[12px] pl-4 pr-10 py-3 text-[14px] font-semibold cursor-pointer text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#3563E9]/20 transition-colors ${isOpen ? 'border-[#3563E9]/50 ring-2 ring-[#3563E9]/20' : 'border-white/30'} ${value ? 'text-[#596780]' : 'text-[#90A3BF]'}`}
                      aria-expanded={isOpen}
                      aria-haspopup="listbox"
                    >
                      <span className="truncate">{value || item.placeholder}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#90A3BF] transition-transform ${isOpen ? 'rotate-180' : ''}`} strokeWidth={2} />
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 right-0 top-full mt-1 z-50 min-w-[180px] bg-white border border-[#C3D4E9]/30 rounded-[12px] shadow-[0px_10px_30px_rgba(17,38,146,0.08)] py-2 max-h-[240px] overflow-y-auto hide-scrollbar" role="listbox">
                        {options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            role="option"
                            aria-selected={value === opt}
                            onClick={() => { setFilters((prev) => ({ ...prev, [item.key]: opt })); setOpenFilter(null); }}
                            className={`cursor-pointer w-full px-4 py-2.5 text-left text-[14px] font-semibold transition-colors hover:bg-[#F6F7F9] ${value === opt ? 'text-[#3563E9] bg-[#F6F7F9]' : 'text-[#596780]'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center bg-white border border-[#C3D4E9]/30 rounded-[12px] px-4 py-3 w-full lg:w-[280px] gap-3 focus-within:ring-2 focus-within:ring-[#3563E9]/20 focus-within:border-[#3563E9]/50 lg:flex-shrink-0">
            <img src={searchIcon} alt="" className="w-5 h-5 flex-shrink-0 object-contain" aria-hidden />
            <input type="text" placeholder="Search something here" className="bg-transparent outline-none text-[14px] text-[#596780] w-full font-semibold placeholder:text-[#90A3BF]" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] overflow-hidden border border-white/50">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#F6F7F9] border-b border-[#F1F3F9] text-[#222222] text-[12px] font-bold uppercase tracking-[0.05em]">
                <th className="px-6 py-5 whitespace-nowrap">Invoice ID</th>
                <th className="px-6 py-5 whitespace-nowrap">Client</th>
                <th className="px-6 py-5 whitespace-nowrap">Car Model</th>
                <th className="px-6 py-5 whitespace-nowrap">Rate per Day</th>
                <th className="px-6 py-5 whitespace-nowrap">Rental Period</th>
                <th className="px-6 py-5 whitespace-nowrap">Amount</th>
                <th className="px-6 py-5 whitespace-nowrap">Due Date</th>
                <th className="px-6 py-5 whitespace-nowrap">Status</th>
                <th className="px-6 py-5 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F3F9]">
              {paymentData.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors text-[14px] font-semibold">
                  <td className="px-6 py-6 text-[#1A202C]">{row.invoiceId}</td>
                  <td className="px-6 py-6 text-[#1A202C] font-bold">{row.client}</td>
                  <td className="px-6 py-6 text-[#222222]">{row.carModel}</td>
                  <td className="px-6 py-6 text-[#1A202C]">{row.ratePerDay}</td>
                  <td className="px-6 py-6 text-[#222222]">{row.rentalPeriod}</td>
                  <td className="px-6 py-6 text-[#1A202C] font-extrabold">{row.amount}</td>
                  <td className="px-6 py-6 text-[#222222]">{row.dueDate}</td>
                  <td className="px-6 py-6">
                    <span className={row.status === 'Completed' ? 'px-5 py-2 rounded-full text-[12px] font-extrabold border border-[#b8dbca] bg-[#ecfcf2] text-[#087443]' : 'px-5 py-2 rounded-full text-[12px] font-extrabold text-[#CB3A31] bg-[#FFF4F2] border border-[#EEB4B0]'}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <button className="cursor-pointer w-[50px] h-10 rounded-[10px] bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d52c4] transition-colors border-0">
                        <img src={editIcon} alt="Edit" className="w-4 h-4 brightness-0 invert" />
                      </button>
                      <button className="cursor-pointer w-[50px] h-10 rounded-[10px] bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d52c4] transition-colors border-0">
                        <img src={deleteIcon} alt="Delete" className="w-4 h-4 brightness-0 invert" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-7 py-6 border-t border-[#F1F3F9] flex flex-wrap justify-between items-center gap-4">
          <span className="text-[14px] text-[#90A3BF] font-bold">Showing 5 from 100 data</span>
          <div className="flex items-center gap-1.5">
            <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-[10px] text-[#90A3BF] hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-4 h-4" strokeWidth={2} />
            </button>
            {[1, 2, 3].map((page) => (
              <button key={page} onClick={() => setCurrentPage(page)} className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-[10px] text-[14px] font-bold transition-all duration-200 ${page === currentPage ? 'bg-[#3563E9] text-white shadow-[0px_8px_16px_rgba(53,99,233,0.3)]' : 'text-[#90A3BF] hover:bg-gray-100'}`}>
                {page}
              </button>
            ))}
            <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-[10px] text-[#90A3BF] hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
