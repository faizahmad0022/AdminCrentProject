"use client";

import { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, ChevronLeft, ChevronRight } from "lucide-react";
import customerProfilePicture from "../../assets/Customer-profile-picture.png";
import carBackground from "../../assets/Car-background.png";
import uploadIcon from "../../assets/Upload-icon.png";
import calendarIcon from "../../assets/calendar-icon.png";

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
const formatDateDDMMYYYY = (date) =>
  `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
const parseDDMMYYYY = (str) => {
  const m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  const [, d, mo, y] = m;
  const date = new Date(Number(y), Number(mo) - 1, Number(d));
  return isNaN(date.getTime()) ? null : date;
};

const Settings = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showCalendarLicenseExpiry, setShowCalendarLicenseExpiry] = useState(false);
  const [calendarViewDate, setCalendarViewDate] = useState(() => new Date());
  const calendarLicenseExpiryRef = useRef(null);
  const [form, setForm] = useState({
    fullName: "Hadi Hassan",
    driversLicenseNumber: "Hadi",
    email: "hadi@crent.com",
    licenseExpiryDateRequired: "hadi@crent.com",
    mobile: "000 000 00 00",
    address: "",
    driverLicense: "DL12345678",
    licenseExpiryDate: "",
  });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarLicenseExpiryRef.current && !calendarLicenseExpiryRef.current.contains(e.target)) {
        setShowCalendarLicenseExpiry(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
  };

  const handlePrevMonth = () => {
    setCalendarViewDate(new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() - 1, 1));
  };
  const handleNextMonth = () => {
    setCalendarViewDate(new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + 1, 1));
  };
  const openLicenseExpiryCalendar = () => {
    const parsed = parseDDMMYYYY(form.licenseExpiryDate);
    if (parsed) setCalendarViewDate(parsed);
    setShowCalendarLicenseExpiry(true);
  };

  const handleLicenseExpiryDateSelect = (day) => {
    const date = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth(), day);
    setForm((prev) => ({ ...prev, licenseExpiryDate: formatDateDDMMYYYY(date) }));
    setShowCalendarLicenseExpiry(false);
  };

  const renderMiniCalendar = () => {
    const year = calendarViewDate.getFullYear();
    const month = calendarViewDate.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const selectedDate = parseDDMMYYYY(form.licenseExpiryDate);

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="w-8 h-8" />);
    }
    for (let d = 1; d <= days; d++) {
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === d &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;
      calendarDays.push(
        <button
          key={d}
          type="button"
          onClick={() => handleLicenseExpiryDateSelect(d)}
          className={`w-8 h-8 flex items-center justify-center text-[12px] font-bold rounded-full cursor-pointer transition-all
            ${isSelected ? "bg-[#3563E9] text-white" : "text-[#596780] hover:bg-[#F6F7F9]"}`}
        >
          {d}
        </button>
      );
    }

    return (
      <div className="absolute top-full left-0 mt-2 bg-white rounded-[10px] shadow-xl border border-gray-100 p-4 z-50 w-[280px]">
        <div className="flex items-center justify-between mb-4 px-1">
          <button type="button" onClick={handlePrevMonth} className="cursor-pointer p-1 hover:bg-gray-100 rounded-lg">
            <ChevronLeft size={16} />
          </button>
          <span className="text-[14px] font-extrabold text-[#1A202C]">
            {monthNames[month]} {year}
          </span>
          <button type="button" onClick={handleNextMonth} className="cursor-pointer p-1 hover:bg-gray-100 rounded-lg">
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
            <span key={day} className="text-[10px] font-bold text-[#90A3BF]">
              {day}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{calendarDays}</div>
      </div>
    );
  };

  return (
    <div
      className="relative min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-80px)] -m-4 md:-m-8 p-4 md:p-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${carBackground})` }}
    >
      {/* Light blue tint so the car image shows and the card stays readable */}
      <div
        className="absolute inset-0 bg-[#3563E9]/50"
        aria-hidden
      />

      <div className="relative max-w-[900px] mx-auto">
        <div className="bg-white rounded-[20px] shadow-[0px_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-white/50 p-6 md:p-10">
          {/* Profile header – circular image with multi-colored ring */}
          <div className="flex flex-col items-center mb-8">
            <img
              src={customerProfilePicture}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-white"
            />
            <h2 className="mt-4 text-xl font-bold text-[#1A202C]">Hadi Hassan</h2>
          </div>

          {/* Two-column form: left and right columns equal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left column: Full Name, Email, Mobile, Driver License, License Expiry Date */}
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-bold text-[#1A202C] mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Hadi Hassan"
                  className="w-full rounded-[10px] border border-[#F1F3F9] bg-[#F6F7F9] p-[25px] text-[14px] text-[#1A202C] font-medium placeholder:text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/30 focus:border-[#3563E9]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#1A202C] mb-1.5">Email</label>
                <div className="relative">
                  <input
                    type={showEmail ? "text" : "password"}
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hadi@crent.com"
                    className="w-full rounded-[10px] border border-[#F1F3F9] bg-[#F6F7F9] px-4 py-3 pr-10 text-[14px] text-[#1A202C] font-medium placeholder:text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/30 focus:border-[#3563E9]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowEmail(!showEmail)}
                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-[#90A3BF] hover:text-[#1A202C] p-1"
                    aria-label={showEmail ? "Hide" : "Show"}
                  >
                    {showEmail ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#1A202C] mb-1.5">Mobile</label>
                <div className="flex rounded-[10px] border border-[#F1F3F9] bg-[#F6F7F9] overflow-hidden">
                  <span className="flex items-center px-4 py-3 text-[14px] font-semibold text-[#90A3BF] bg-[#EEF1F5] border-r border-[#F1F3F9]">+96</span>
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="000 000 000 00"
                    className="flex-1 min-w-0 px-4 py-3 text-[14px] text-[#1A202C] font-medium placeholder:text-[#90A3BF] bg-transparent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#1A202C] mb-1.5">Driver License</label>
                <input
                  type="text"
                  name="driverLicense"
                  value={form.driverLicense}
                  onChange={handleChange}
                  placeholder="DL12345678"
                  className="w-full rounded-[10px] border border-[#F1F3F9] bg-[#F6F7F9] px-4 py-3 text-[14px] text-[#1A202C] font-medium placeholder:text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/30 focus:border-[#3563E9]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#1A202C] mb-1.5">License Expiry Date</label>
                <div className="relative" ref={calendarLicenseExpiryRef}>
                  <input
                    type="text"
                    name="licenseExpiryDate"
                    value={form.licenseExpiryDate}
                    onChange={handleChange}
                    onFocus={openLicenseExpiryCalendar}
                    placeholder="DD/MM/YYYY"
                    className="w-full rounded-[10px] border border-[#F1F3F9] bg-[#F6F7F9] pl-4 pr-10 py-3 text-[14px] text-[#1A202C] font-medium placeholder:text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/30 focus:border-[#3563E9]"
                  />
                  <button
                    type="button"
                    onClick={() => (showCalendarLicenseExpiry ? setShowCalendarLicenseExpiry(false) : openLicenseExpiryCalendar())}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#90A3BF] hover:text-[#1A202C] p-1 cursor-pointer"
                    aria-label="Open calendar"
                  >
                    <img src={calendarIcon} alt="" className="w-4 h-4 object-contain" />
                  </button>
                  {showCalendarLicenseExpiry && renderMiniCalendar()}
                </div>
              </div>
            </div>

            {/* Right column: Driver's License Number *, License Expiry Date *, Address (optional) + Upload */}
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-bold text-[#1A202C] mb-1.5">
                  Driver&apos;s License Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="driversLicenseNumber"
                  value={form.driversLicenseNumber}
                  onChange={handleChange}
                  placeholder="Hadi"
                  className="w-full rounded-[10px] border border-[#F1F3F9] bg-[#F6F7F9] px-4 py-3 text-[14px] text-[#1A202C] font-medium placeholder:text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/30 focus:border-[#3563E9]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#1A202C] mb-1.5">
                  License Expiry Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="licenseExpiryDateRequired"
                  value={form.licenseExpiryDateRequired}
                  onChange={handleChange}
                  placeholder="DD/MM/YYYY"
                  className="w-full rounded-[10px] border border-[#F1F3F9] bg-[#F6F7F9] px-4 py-3 text-[14px] text-[#1A202C] font-medium placeholder:text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/30 focus:border-[#3563E9]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#1A202C] mb-1.5">Address (optional)</label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`min-h-[225px] rounded-[10px] border-2 border-dashed flex flex-col items-center justify-center gap-3 p-6 transition-colors ${
                    isDragging ? "border-[#3563E9] bg-[#3563E9]/10" : "border-[#E0E5ED] bg-[#F6F7F9]"
                  }`}
                >
                  <button
                    type="button"
                    className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-[100px] bg-[#3563E9] text-white hover:bg-[#2d52c4] transition-colors"
                  >
                    <img src={uploadIcon} alt="Upload" className="w-5 h-5 object-contain" />
                  </button>
                  <p className="text-[14px] font-extrabold text-[#1A202C]">Upload new product</p>
                  <p className="text-[13px] font-bold text-[#90A3BF]">Drag and drop here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next button – full width */}
          <div className="mt-8">
            <button
              type="button"
              className="cursor-pointer w-full py-3.5 rounded-[10px] bg-[#3563E9] text-white text-[14px] font-bold hover:bg-[#2d52c4] transition-colors shadow-[0px_10px_20px_rgba(53,99,233,0.3)]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
