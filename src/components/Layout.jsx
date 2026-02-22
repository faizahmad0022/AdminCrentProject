import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="app-container min-h-screen bg-[#F6F7F9] font-sans text-gray-900">
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <Header toggleSidebar={toggleSidebar} />
            <main className="main-content pt-[72px] md:pt-[80px] transition-all duration-300 md:ml-[280px] bg-[#F6F7F9]">
                <div className="p-4 md:p-8">
                    <Outlet />
                </div>
            </main>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={closeSidebar}
                ></div>
            )}
        </div>
    );
};

export default Layout;
