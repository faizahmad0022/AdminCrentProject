import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import homeIconInactive from '../assets/home-icon-when-not-on-it.png';

const Sidebar = ({ isOpen, closeSidebar }) => {
    const location = useLocation();



    const menuItems = [
        { path: '/', name: 'Dashboard', icon: '/assets/main-menu-dashboard-icon.png' },
        { path: '/car-unit', name: 'Car Unit', icon: '/assets/main-menu-Car-unit-icon.png' },
        { path: '/booking', name: 'Booking', icon: '/assets/main-menu-booking-icon.png' },
        { path: '/reminder', name: 'Reminder', icon: '/assets/main-menu-reminder-icon.png' },
        { path: '/inbox', name: 'Inbox', icon: '/assets/menu-item-inbox-icon.png' },
        { path: '/calendar', name: 'Calendar', icon: '/assets/main-menu-calendar-icon.png' },
        { path: '/expense', name: 'Expense', icon: '/assets/main-menu-expense-icon.png' },
        { path: '/payment', name: 'Payment', icon: '/assets/main-menu-payment-icon.png' },
        { path: '/customer', name: 'Customer', icon: '/assets/main-menu-customer-icon.png' },
    ];

    const prefItems = [
        { path: '/settings', name: 'Settings', icon: '/assets/main-menu-settings-icon.png' },
        { path: '#', name: 'Help & Center', icon: '/assets/main-menu-help-center-icon.png' },
        { path: '#', name: 'Log Out', icon: '/assets/main-menu-logout-icon.png' },
    ];

    return (
        <aside
            className={`sidebar fixed top-0 left-0 h-full w-[280px] bg-white border-r border-gray-100 transition-transform duration-300 z-50 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                }`}
        >
            <div className="logo px-8 py-10 flex items-center justify-end">
                <button
                    onClick={closeSidebar}
                    className="cursor-pointer md:hidden p-2 text-gray-400 hover:text-gray-600 focus:outline-none rounded-lg hover:bg-gray-50"
                    aria-label="Close Menu"
                >
                    <X className="w-5 h-5" strokeWidth={2} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 hide-scrollbar pb-6 mt-4">
                <div className="mb-8">
                    <div className="text-[12px] font-bold text-[#90A3BF]/50 mb-5 px-4 uppercase tracking-[0.1em]">Main Menu</div>
                    <nav className="flex flex-col gap-1.5">
                        {menuItems.map((item) => {
                            const isActive = item.path === '/'
                                ? location.pathname === '/'
                                : item.path === '/payment'
                                ? (location.pathname === '/payment' || location.pathname === '/payment-form' || location.pathname.startsWith('/payment/'))
                                : location.pathname.startsWith(item.path);
                            const iconSrc = item.name === 'Dashboard'
                                ? (isActive ? '/assets/main-menu-dashboard-icon.png' : homeIconInactive)
                                : item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-sm font-semibold tracking-wide ${isActive
                                        ? 'bg-[#3563E9] text-white shadow-[0px_10px_20px_rgba(53,99,233,0.3)]'
                                        : 'text-[#90A3BF] hover:bg-gray-50 hover:text-gray-900 group'
                                        }`}
                                    onClick={closeSidebar}
                                >
                                    <img
                                        src={iconSrc}
                                        alt={item.name}
                                        className={`w-5 h-5 min-w-5 min-h-5 flex-shrink-0 object-contain transition-all duration-200 ${isActive ? 'brightness-0 invert' : 'opacity-70 group-hover:opacity-100'}`}
                                    />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div>
                    <div className="text-[12px] font-bold text-[#90A3BF]/50 mb-5 px-4 uppercase tracking-[0.1em]">Preferences</div>
                    <nav className="flex flex-col gap-1.5">
                        {prefItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-sm font-semibold tracking-wide ${isActive
                                        ? 'bg-[#3563E9] text-white shadow-[0px_10px_20px_rgba(53,99,233,0.3)]'
                                        : 'text-[#90A3BF] hover:bg-gray-50 hover:text-gray-900 group'
                                        }`}
                                    onClick={closeSidebar}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className={`w-5 h-5 min-w-5 min-h-5 flex-shrink-0 object-contain transition-all duration-200 ${isActive ? 'brightness-0 invert' : 'opacity-70 group-hover:opacity-100'}`}
                                    />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
