const clientData = [
  { employeeId: '#SZ15E0010', name: 'Sarah', email: 'sarah@stayzen.app', contact: '+966582935117', amount: '600 OMR', bookingDate: '24-08-25', carBooked: 'Honda Civic', rentalDays: '5', avatar: 'https://ui-avatars.com/api/?name=Sarah+1&background=3563E9&color=fff&size=80' },
  { employeeId: '#SZ15E0010', name: 'Sarah', email: 'sarah@stayzen.app', contact: '+966582935117', amount: '600 OMR', bookingDate: '24-08-25', carBooked: 'Honda Civic', rentalDays: '5', avatar: 'https://ui-avatars.com/api/?name=Sarah+2&background=596780&color=fff&size=80' },
  { employeeId: '#SZ15E0010', name: 'Sarah', email: 'sarah@stayzen.app', contact: '+966582935117', amount: '600 OMR', bookingDate: '24-08-25', carBooked: 'Honda Civic', rentalDays: '5', avatar: 'https://ui-avatars.com/api/?name=Sarah+3&background=1A202C&color=fff&size=80' },
  { employeeId: '#SZ15E0010', name: 'Sarah', email: 'sarah@stayzen.app', contact: '+966582935117', amount: '600 OMR', bookingDate: '24-08-25', carBooked: 'Honda Civic', rentalDays: '5', avatar: 'https://ui-avatars.com/api/?name=Sarah+4&background=087443&color=fff&size=80' },
  { employeeId: '#SZ15E0010', name: 'Sarah', email: 'sarah@stayzen.app', contact: '+966582935117', amount: '600 OMR', bookingDate: '24-08-25', carBooked: 'Honda Civic', rentalDays: '5', avatar: 'https://ui-avatars.com/api/?name=Sarah+5&background=90A3BF&color=fff&size=80' },
];

const ClientList = () => {
  return (
    <div className="font-sans client-list-content space-y-6">
      <h1 className="text-2xl md:text-3xl font-extrabold text-[#1A202C] tracking-tight">Client List</h1>

      <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] overflow-hidden border border-white/50">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#F6F7F9] border-b border-[#F1F3F9] text-[#222222] text-[12px] font-bold tracking-[0.05em]">
                <th className="px-6 py-5 whitespace-nowrap">Employee_ID</th>
                <th className="px-6 py-5 whitespace-nowrap">Image</th>
                <th className="px-6 py-5 whitespace-nowrap">Name</th>
                <th className="px-6 py-5 whitespace-nowrap">Email Address</th>
                <th className="px-6 py-5 whitespace-nowrap">Contact Number</th>
                <th className="px-6 py-5 whitespace-nowrap">Amount</th>
                <th className="px-6 py-5 whitespace-nowrap">Booking Date</th>
                <th className="px-6 py-5 whitespace-nowrap">Car Booked</th>
                <th className="px-6 py-5 whitespace-nowrap">Rental Days</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F3F9]">
              {clientData.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors text-[14px] font-semibold">
                  <td className="px-6 py-6 text-[#1A202C]">{row.employeeId}</td>
                  <td className="px-6 py-6">
                    <img src={row.avatar} alt={row.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  </td>
                  <td className="px-6 py-6 text-[#1A202C] font-bold">{row.name}</td>
                  <td className="px-6 py-6 text-[#222222]">{row.email}</td>
                  <td className="px-6 py-6 text-[#222222]">{row.contact}</td>
                  <td className="px-6 py-6 text-[#1A202C] font-extrabold">{row.amount}</td>
                  <td className="px-6 py-6 text-[#222222]">{row.bookingDate}</td>
                  <td className="px-6 py-6 text-[#222222]">{row.carBooked}</td>
                  <td className="px-6 py-6 text-[#222222]">{row.rentalDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
