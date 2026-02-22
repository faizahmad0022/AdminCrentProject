import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, MoreVertical } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationRef = useRef(null);

    const handleGoToInspection = () => {
        setShowNotifications(false);
        navigate('/booking/1/inspection');
    };

    // Close notification dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        };

        if (showNotifications) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showNotifications]);

    return (
        <header className="top-header fixed top-0 left-0 w-full h-[72px] md:h-[80px] bg-white border-b border-gray-100 z-50 flex items-center justify-between px-6 transition-all duration-300">
            <div className="header-left flex items-center gap-4 flex-1">
                <button
                    className="cursor-pointer hamburger md:hidden p-2 text-gray-700 focus:outline-none rounded-lg hover:bg-gray-50"
                    aria-label="Toggle Menu"
                    onClick={toggleSidebar}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
                </button>
                <Link to="/" className="flex items-center gap-2">
                    <img src="/assets/Logo.png" alt="Crent" className="h-8 object-contain" />
                </Link>
            </div>

            <div className="header-right flex items-center gap-2 md:gap-5 ml-4">
                {/* Like Button */}
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="cursor-pointer icon-btn w-10 h-10 rounded-full border border-[#F1F3F9] flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
                >
                    <img
                        src={isLiked ? "/assets/Like after clicking.png" : "/assets/Like.png"}
                        alt="Like"
                        className="w-32 h-32 object-contain"
                    />
                </button>

                {/* Notification Button */}
                <div className="relative" ref={notificationRef}>
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="cursor-pointer icon-btn w-10 h-10 rounded-full border border-[#F1F3F9] flex items-center justify-center hover:bg-gray-50 relative transition-colors flex-shrink-0"
                    >
                        <div className="relative">
                            <img
                                src="/assets/Notification_icon.png"
                                alt="Notifications"
                                className="w-32 h-32 object-contain"
                            />
                            <div className="absolute top-0 right-0 w-2 h-2 bg-[#ED3F3F] border border-white rounded-full"></div>
                        </div>
                    </button>

                    {/* Notification Dropdown - matches design */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 z-50 animate-fade-up w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-[12px] shadow-[0px_10px_40px_rgba(0,0,0,0.12)] border border-[#EEF1F5] overflow-hidden">
                            {/* Header: bell icon + Notifications */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#EEF1F5]">
                                <img src="/assets/notification-icon-each-car-unit.png" alt="" className="w-5 h-5 object-contain" aria-hidden />
                                <h3 className="text-[15px] font-extrabold text-[#1A202C]">Notifications</h3>
                            </div>
                            <div className="max-h-[400px] overflow-y-auto">
                                {/* First notification - highlighted, with Goto inspection button */}
                                <div className="px-4 py-3 bg-[#F0F4FF] border-b border-[#E8ECF4]">
                                    <div className="flex items-start gap-3">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-11 h-11 rounded-full bg-[#3563E9]/20 flex items-center justify-center overflow-hidden border border-[#E0E5ED]">
                                                <img src="/assets/User profile picture.png" alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10B981] border-2 border-white rounded-full" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[14px] font-extrabold text-[#1A202C]">Car arrived - inspection pending</p>
                                            <p className="text-[13px] text-[#596780] font-medium mt-0.5">Toyota Corolla (Ref BRK-458921).</p>
                                            <p className="text-[13px] text-[#596780] font-medium">Pick-up inspection required.</p>
                                            <p className="text-[12px] text-[#90A3BF] font-medium mt-1.5">10 mins ago</p>
                                            <button
                                                type="button"
                                                onClick={handleGoToInspection}
                                                className="cursor-pointer mt-3 flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-[10px] bg-[#3563E9] text-white text-[13px] font-bold hover:bg-[#2d52c4] transition-colors"
                                            >
                                                Goto inspection
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <button type="button" className="cursor-pointer p-1 rounded-lg hover:bg-white/60 text-[#90A3BF] flex-shrink-0" aria-label="More options">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                {/* Second notification */}
                                <div className="px-4 py-3 bg-white hover:bg-[#FAFBFC] transition-colors border-b border-[#EEF1F5] last:border-0">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0">
                                            <div className="w-11 h-11 rounded-full overflow-hidden border border-[#E0E5ED] bg-[#EEF1F5]">
                                                <img src="/assets/User profile picture.png" alt="" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[14px] font-extrabold text-[#1A202C]">Car arrived inspection complete</p>
                                            <p className="text-[13px] text-[#596780] font-medium mt-0.5">Arrival inspection completed.</p>
                                            <p className="text-[13px] text-[#596780] font-medium">Card ending ...42 was declined.</p>
                                            <p className="text-[12px] text-[#90A3BF] font-medium mt-1.5">1 day ago</p>
                                        </div>
                                        <button type="button" className="p-1 rounded-lg hover:bg-gray-100 text-[#90A3BF] flex-shrink-0" aria-label="More options">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Settings Button */}
                <button className="icon-btn w-10 h-10 rounded-full border border-[#F1F3F9] flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0">
                    <img src="/assets/Settings.png" alt="Settings" className="w-32 h-32 object-contain" />
                </button>

                {/* User Avatar */}
                <div className="flex items-center gap-2 cursor-pointer ml-1">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#F1F3F9] flex-shrink-0">
                        <img src="/assets/User profile picture.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
