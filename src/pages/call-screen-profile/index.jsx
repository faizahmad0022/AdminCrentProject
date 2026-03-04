"use client";

import React from 'react';
import { 
  ChevronLeft, 
  Video, 
  Mic, 
  Headphones, 
  PhoneOff,
  User
} from 'lucide-react';

const CallScreenProfile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4 font-sans">
      {/* Main Calling Container */}
      <div className="relative w-full max-w-4xl aspect-[4/3] bg-[#5D646F] rounded-[32px] flex flex-col items-center justify-center shadow-2xl overflow-hidden">
        
        {/* Back Button */}
        <button className="absolute top-8 left-8 text-white hover:opacity-70 transition-opacity">
          <ChevronLeft size={28} />
        </button>

        {/* Profile Info */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-white mb-2">Curtis Welsh</h2>
          <p className="text-lg text-slate-300">15:49</p>
        </div>

        {/* Avatar Placeholder */}
        <div className="relative mb-14">
          <div className="w-48 h-48 rounded-full border-4 border-[#7A828E] bg-slate-400 flex items-center justify-center overflow-hidden">
            <User size={100} className="text-slate-200" />
          </div>
        </div>

        {/* Control Buttons Group */}
        <div className="flex flex-col gap-6 items-center">
          {/* Top Row: Camera and Mic */}
          <div className="flex gap-8">
            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-200 transition-colors shadow-sm">
              <Video size={24} />
            </button>
            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-200 transition-colors shadow-sm">
              <Mic size={24} />
            </button>
          </div>

          {/* Bottom Row: Audio and End Call */}
          <div className="flex gap-8">
            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-200 transition-colors shadow-sm">
              <Headphones size={24} />
            </button>
            <button className="w-14 h-14 bg-[#ED3F3F] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-lg">
              <PhoneOff size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallScreenProfile;