import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import editIcon from '../../assets/edit-icon-booking.png';
import viewIcon from '../../assets/view-icon-booking.png';
import deleteIcon from '../../assets/delete-icon-booking.png';
import calendarIcon from '../../assets/calendar-icon.png';
import reminderHeaderIcon from '../../assets/reminder-icon.png';

const Reminder = () => {
    const [selectedDate, setSelectedDate] = useState(new Date(2025, 9, 1));
    const [showCalendar, setShowCalendar] = useState(false);
    const [viewDate, setViewDate] = useState(new Date(2025, 9, 1));
    const calendarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const reminders = [
        { id: 1, title: 'Booking Confirmed', description: 'ref BRK-458921. Toyota corolla. Aug 20 to Aug 25', time: '10 mins ago' },
        { id: 2, title: 'License Expiring Soon', description: 'Your License expires in 12 days. renew to avoid booking block', time: '2 hr ago' },
        { id: 3, title: 'Payment Failed', description: 'Card ending ..42 was declined. Try another method', time: '1 day ago' },
        { id: 4, title: 'Welcome to Drive Now', description: 'Tips for faster checkout: Add your license details', time: '5 day ago' },
    ];

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const formatDate = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${date.getDate().toString().padStart(2, '0')}-${months[date.getMonth()]}-${date.getFullYear()}`;
    };

    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const handleDateSelect = (day) => {
        setSelectedDate(new Date(viewDate.getFullYear(), viewDate.getMonth(), day));
        setShowCalendar(false);
    };

    const renderCalendar = () => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const days = daysInMonth(year, month);
        const firstDay = firstDayOfMonth(year, month);
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const calendarDays = [];
        for (let i = 0; i < firstDay; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
        }
        for (let d = 1; d <= days; d++) {
            const isSelected = selectedDate.getDate() === d && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
            calendarDays.push(
                <div
                    key={d}
                    onClick={() => handleDateSelect(d)}
                    className={`w-8 h-8 flex items-center justify-center text-[12px] font-bold rounded-full cursor-pointer transition-all
                        ${isSelected ? 'bg-[#3563E9] text-white' : 'text-[#596780] hover:bg-[#F6F7F9]'}`}
                >
                    {d}
                </div>
            );
        }

        return (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-[10px] shadow-xl border border-gray-100 p-4 z-50 w-[280px]" ref={calendarRef}>
                <div className="flex items-center justify-between mb-4 px-1">
                    <button onClick={handlePrevMonth} className="cursor-pointer p-1 hover:bg-gray-100 rounded-lg"><ChevronLeft size={16} /></button>
                    <span className="text-[14px] font-extrabold text-[#1A202C]">{monthNames[month]} {year}</span>
                    <button onClick={handleNextMonth} className="cursor-pointer p-1 hover:bg-gray-100 rounded-lg"><ChevronRight size={16} /></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                        <span key={day} className="text-[10px] font-bold text-[#90A3BF]">{day}</span>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {calendarDays}
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
            <div className="flex-1 w-full" style={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid #F1F3F9', display: 'block', opacity: 1, visibility: 'visible' }}>
                <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                    <img src={reminderHeaderIcon} alt="Reminder" className="w-10 h-10" />
                    <span className="text-[18px] font-bold text-[#1A202C]">Reminder</span>
                </div>

                <div className="divide-y divide-gray-100">
                    {reminders.map((reminder) => (
                        <div key={reminder.id} className="p-6 flex items-start justify-between gap-4">
                            <div className="space-y-1">
                                <h3 className="text-[16px] font-bold text-[#1A202C] leading-tight">{reminder.title}</h3>
                                <p className="text-[12px] text-[#90A3BF] font-medium leading-relaxed">{reminder.description}</p>
                                <p className="text-[12px] text-[#90A3BF] font-bold mt-2">{reminder.time}</p>
                            </div>
                            <div className="flex gap-2 shrink-0 pt-1">
                                <div className="w-8 h-8 rounded-lg bg-[#3563E9] flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                    <img src={editIcon} alt="Edit" className="w-4 h-4 brightness-0 invert" />
                                </div>
                                <div className="w-8 h-8 rounded-lg bg-[#3563E9] flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                    <img src={viewIcon} alt="View" className="w-4 h-4 brightness-0 invert" />
                                </div>
                                <div className="w-8 h-8 rounded-lg bg-[#3563E9] flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                    <img src={deleteIcon} alt="Delete" className="w-4 h-4 brightness-0 invert" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-[380px] lg:min-w-[380px] shrink-0">
                <div className="bg-white rounded-[10px] shadow-sm border border-gray-100 p-6 space-y-6">
                    <div>
                        <h2 className="text-[16px] font-bold text-[#1A202C] mb-1">Notification</h2>
                        <p className="text-[10px] font-bold text-[#90A3BF]">Create/edit Notification</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[14px] font-bold text-[#1A202C]">Title</label>
                            <div className="bg-[#F6F7F9] rounded-[8px] px-4 py-3">
                                <input type="text" defaultValue="Car Maintenance" className="w-full bg-transparent outline-none text-[12px] font-bold text-[#90A3BF]" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[14px] font-bold text-[#1A202C]">Description</label>
                            <div className="bg-[#F6F7F9] rounded-[8px] px-4 py-3 min-h-[100px]">
                                <textarea defaultValue="Your Car need a general maintenance check-up" className="w-full bg-transparent outline-none text-[12px] font-bold text-[#90A3BF] resize-none" rows={3} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[14px] font-bold text-[#1A202C]">Condition</label>
                            <div className="bg-[#F6F7F9] rounded-[8px] px-4 py-3 flex items-center justify-between cursor-pointer">
                                <span className="text-[12px] font-bold text-[#90A3BF]">Car Maintenance Flag</span>
                                <ChevronDown className="w-4 h-4 text-[#90A3BF]" />
                            </div>
                        </div>

                        <div className="space-y-2 relative">
                            <label className="text-[14px] font-bold text-[#1A202C]">Date</label>
                            <div onClick={() => setShowCalendar(!showCalendar)} className="bg-[#F6F7F9] rounded-[8px] px-4 py-3 flex items-center justify-between cursor-pointer">
                                <span className="text-[12px] font-bold text-[#90A3BF]">{formatDate(selectedDate)}</span>
                                <img src={calendarIcon} alt="Calendar" className="w-4 h-4 opacity-70" />
                            </div>
                            {showCalendar && renderCalendar()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reminder;
