"use client";

import { useState } from "react";
import { ChevronDown, MoreHorizontal, Search, ChevronLeft, ChevronRight } from "lucide-react";
import editIcon from "../../assets/edit-icon-booking.png";
import deleteIcon from "../../assets/delete-icon-booking.png";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { PieChart, Pie, Cell, ResponsiveContainer as PieResponsiveContainer } from "recharts";

const iconBlue = "#3563E9";
const fontFamily = '"Plus Jakarta Sans", Inter, ui-sans-serif, system-ui, sans-serif';

const cashFlowData = [
  { name: "Jan", value: 42000 },
  { name: "Feb", value: 98000 },
  { name: "Mar", value: 145000 },
  { name: "Apr", value: 101223 },
  { name: "May", value: 168000 },
  { name: "Jun", value: 132000 },
];

const expenseBalanceData = [
  { name: "Vehicle Maintenance", value: 17439, color: "#1e3a5f" },
  { name: "Staff Salaries", value: 9478, color: "#2563eb" },
  { name: "Fuel", value: 18197, color: "#3563E9" },
  { name: "Office Supplies", value: 12510, color: "#60a5fa" },
  { name: "Marketing", value: 14406, color: "#93c5fd" },
];

const expenseTableData = [
  { expense: "Oil Change", category: "Alex Johnson", quantity: "6 Liter", amount: "600 OMR", date: "24-08-25", status: "Completed" },
  { expense: "Maintenance", category: "Vehicle", quantity: "--", amount: "350 OMR", date: "23-08-25", status: "Pending" },
  { expense: "Tire Replacement", category: "Vehicle", quantity: "4", amount: "420 OMR", date: "22-08-25", status: "Completed" },
  { expense: "Fuel", category: "Operations", quantity: "50 Liter", amount: "125 OMR", date: "21-08-25", status: "Completed" },
  { expense: "Insurance", category: "Fleet", quantity: "--", amount: "1,200 OMR", date: "20-08-25", status: "Pending" },
];

const CashFlowTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="relative text-white font-bold text-sm px-4 py-3 rounded-lg shadow-lg"
      style={{ fontFamily, backgroundColor: "#4A5568" }}
    >
      <span>
        ${Number(payload[0].value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent"
        style={{ bottom: -8, borderTopColor: "#4A5568" }}
      />
    </div>
  );
};

const BalanceIcon = ({ useImg, onError }) =>
  useImg ? (
    <img src="/assets/Total-revenue-icon.png" alt="Balance" className="w-6 h-6 object-contain" onError={onError} />
  ) : (
    <span className="text-white font-bold text-2xl leading-none" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>$</span>
  );

const ArrowDownIcon = ({ useImg, onError }) =>
  useImg ? (
    <img src="/assets/arrow-down.png" alt="Income" className="w-6 h-6 object-contain" onError={onError} />
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M12 5v14M19 12l-7 7-7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

const ArrowUpIcon = ({ useImg, onError }) =>
  useImg ? (
    <img src="/assets/arrow-up.png" alt="Expense" className="w-6 h-6 object-contain" onError={onError} />
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

const MetricCard = ({ label, value, percentage, icon: Icon }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const useImg = !imgFailed;
  return (
  <div
    className="bg-white rounded-xl p-6 flex flex-col gap-5 h-full min-h-[140px]"
    style={{
      boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
      fontFamily: '"Plus Jakarta Sans", Inter, ui-sans-serif, system-ui, sans-serif',
    }}
  >
    {/* Top row: icon + value (same as in image) */}
    <div className="flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-xl flex justify-center items-center flex-shrink-0"
        style={{ backgroundColor: iconBlue }}
      >
        <Icon useImg={useImg} onError={() => setImgFailed(true)} />
      </div>
      <p
        className="text-[28px] font-bold leading-tight tracking-tight"
        style={{ color: "#333333" }}
      >
        {value}
      </p>
    </div>
    {/* Bottom row: label (left, aligned with icon) and percentage pill (right), same baseline */}
    <div className="flex flex-row justify-between items-baseline gap-3 mt-auto">
      <p
        className="text-sm font-normal"
        style={{ color: "#777777" }}
      >
        {label}
      </p>
      <span
        className="text-xs font-normal px-3 py-1.5 rounded-full flex items-center gap-1 flex-shrink-0"
        style={{ backgroundColor: "#F0F0F0", color: "#777777" }}
      >
        {percentage} <span className="inline-block">↑</span>
      </span>
    </div>
  </div>
  );
};

const Expense = () => {
  const cards = [
    { label: "Balance", value: "78.423", percentage: "15.2%", icon: BalanceIcon },
    { label: "Income", value: "32.567", percentage: "5.2%", icon: ArrowDownIcon },
    { label: "Expense", value: "41.411", percentage: "21.2%", icon: ArrowUpIcon },
  ];

  return (
    <div
      className="expense-page space-y-6"
      style={{
        fontFamily,
        background: "#F8F8F8",
      }}
    >
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <MetricCard
            key={card.label}
            label={card.label}
            value={card.value}
            percentage={card.percentage}
            icon={card.icon}
          />
        ))}
      </section>

      {/* Cash Flow + Expense Balance row */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Cash Flow */}
        <div
          className="bg-white rounded-xl p-6 flex flex-col h-full min-h-[320px]"
          style={{
            boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
            fontFamily,
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-bold text-[#1A202C]" style={{ fontFamily }}>
              Cash Flow
            </h3>
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium cursor-pointer hover:bg-gray-50 transition-colors"
              style={{ borderColor: "#E2E8F0", color: "#64748B" }}
            >
              <ChevronDown className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              <span style={{ fontFamily }}>Jan 2025 - Jun 2025</span>
              <ChevronDown className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
            </button>
          </div>
          <div className="flex-1 w-full min-h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashFlowData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                <defs>
                  <linearGradient id="cashFlowGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={iconBlue} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={iconBlue} stopOpacity={0.08} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="5 5" stroke="#E2E8F0" vertical horizontal />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748B", fontSize: 12, fontFamily }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748B", fontSize: 12, fontFamily }}
                  tickFormatter={(v) => (v === 0 ? "$0" : `$${v / 1000}k`)}
                  ticks={[0, 50000, 100000, 150000, 200000]}
                  domain={[0, 200000]}
                  width={42}
                  allowDataOverflow={false}
                />
                <Tooltip content={<CashFlowTooltip />} cursor={{ stroke: iconBlue, strokeWidth: 1, strokeDasharray: "4 4" }} />
                <Area
                  type="monotone"
                  dataKey="value"
                  baseValue={0}
                  stroke={iconBlue}
                  strokeWidth={2.5}
                  fill="url(#cashFlowGradient)"
                  fillOpacity={1}
                  animationDuration={800}
                  isAnimationActive={true}
                  connectNulls={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 2: Expense Balance */}
        <div
          className="bg-white rounded-xl p-6 flex flex-col h-full min-h-[320px]"
          style={{
            boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
            fontFamily,
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-bold text-[#1A202C]" style={{ fontFamily }}>
              Expense Balance
            </h3>
            <button
              type="button"
              className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#1A202C]"
              aria-label="Options"
            >
              <MoreHorizontal className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 flex-1">
            <div className="relative w-[220px] h-[220px] flex-shrink-0">
              <PieResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseBalanceData}
                    innerRadius={64}
                    outerRadius={88}
                    paddingAngle={3}
                    cornerRadius={4}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={3}
                  >
                    {expenseBalanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </PieResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-black" style={{ fontFamily }}>
                  72,030
                </span>
                <span className="text-sm font-normal mt-1 text-[#64748B]" style={{ fontFamily }}>
                  Expense
                </span>
              </div>
            </div>
            <div className="flex-1 w-full space-y-5 min-w-0">
              {expenseBalanceData.map((item) => (
                <div key={item.name} className="flex justify-between items-center w-full gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-normal text-[#596780] truncate" style={{ fontFamily }}>
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-black flex-shrink-0" style={{ fontFamily }}>
                    {item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expense table card */}
      <div
        className="bg-white rounded-md overflow-hidden"
        style={{
          boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
          fontFamily,
        }}
      >
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily }}>
              Expense
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 sm:flex-initial min-w-[180px]">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                  strokeWidth={2}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#3563E9]/30 focus:border-[#3563E9]"
                  style={{ fontFamily }}
                />
              </div>
              <div className="relative flex-shrink-0">
                <select
                  className="appearance-none pl-4 pr-10 py-2.5 text-sm border border-gray-200 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#3563E9]/30 focus:border-[#3563E9] min-w-[120px] bg-white"
                  style={{ fontFamily }}
                >
                  <option value="">Sort By</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-md border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  {["Expense", "Category", "Quantity", "Amount", "Date", "Status", "Action"].map((th) => (
                    <th
                      key={th}
                      className="text-left py-4 px-6 text-sm font-bold text-black whitespace-nowrap"
                      style={{ fontFamily }}
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {expenseTableData.map((row, idx) => (
                  <tr key={idx} className="border-t border-gray-100">
                    <td className="py-4 px-6 text-sm font-normal text-black" style={{ fontFamily }}>{row.expense}</td>
                    <td className="py-4 px-6 text-sm font-normal text-black" style={{ fontFamily }}>{row.category}</td>
                    <td className="py-4 px-6 text-sm font-normal text-black" style={{ fontFamily }}>{row.quantity}</td>
                    <td className="py-4 px-6 text-sm font-normal text-black" style={{ fontFamily }}>{row.amount}</td>
                    <td className="py-4 px-6 text-sm font-normal text-black" style={{ fontFamily }}>{row.date}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border-2 ${
                          row.status === "Completed" ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"
                        }`}
                        style={{ fontFamily }}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="cursor-pointer w-[50px] h-10 rounded-[10px] flex items-center justify-center text-white hover:opacity-90 transition-opacity border-0 bg-[#3563E9] hover:bg-[#2d52c4] transition-colors"
                          aria-label="Edit"
                        >
                          <img src={editIcon} alt="Edit" className="w-4 h-4 brightness-0 invert" />
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer w-[50px] h-10 rounded-[10px] flex items-center justify-center text-white hover:opacity-90 transition-opacity border-0 bg-[#3563E9] hover:bg-[#2d52c4] transition-colors"
                          aria-label="Delete"
                        >
                          <img src={deleteIcon} alt="Delete" className="w-4 h-4 brightness-0 invert" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 mt-4 border-t border-gray-100">
            <p className="text-sm text-gray-400" style={{ fontFamily }}>
              Showing <span className="text-black">5</span> from <span className="text-black">100</span> data
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="cursor-pointer w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={2} />
              </button>
              <button
                type="button"
                className="cursor-pointer w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                style={{ fontFamily }}
              >
                1
              </button>
              <button
                type="button"
                className="cursor-pointer w-9 h-9 rounded-md flex items-center justify-center text-sm font-medium text-white transition-colors"
                style={{ fontFamily, backgroundColor: iconBlue }}
              >
                2
              </button>
              <button
                type="button"
                className="cursor-pointer w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                style={{ fontFamily }}
              >
                3
              </button>
              <button
                type="button"
                className="cursor-pointer w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
