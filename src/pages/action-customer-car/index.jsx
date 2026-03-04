"use client";

import React from 'react';
import { AlertCircle } from 'lucide-react';

const ActionCustomerCar = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F9] p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Take an action</h1>
          <div className="flex gap-4">
            <button className="px-10 py-2.5 bg-[#3563E9] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              Save
            </button>
            <button className="px-10 py-2.5 bg-[#3563E9] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              Cancel
            </button>
          </div>
        </div>

        {/* Action Card Container */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* Section Label */}
          <div className="p-6 border-b border-slate-100 flex items-center gap-3">
            <AlertCircle className="text-slate-600 w-8 h-8" strokeWidth={1.5} />
            <span className="text-xl font-bold text-slate-800">Actions</span>
          </div>

          {/* Action List Items */}
          <div className="divide-y divide-slate-100">
            
            <ActionRow 
              title="Cancel subscribtion" 
              description="Customer requested to cancel the subscription" 
              time="10 mins ago" 
              defaultChecked={true} 
            />

            <ActionRow 
              title="Request to cancel lisence" 
              description="Customer has requested to cancel the license" 
              time="2 hr ago" 
              defaultChecked={true} 
            />

            <ActionRow 
              title="Take a legal action" 
              description="Case escalated for legal action due to customer's non-compliance" 
              time="1 day ago" 
              defaultChecked={true} 
            />

          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component for each action row
const ActionRow = ({ title, description, time, defaultChecked }) => (
  <div className="p-6 flex items-start justify-between hover:bg-slate-50 transition-colors group">
    <div className="space-y-1">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 font-medium">{description}</p>
      <p className="text-xs text-slate-400 mt-2">{time}</p>
    </div>
    
    <div className="pt-1">
      <input 
        type="checkbox" 
        defaultChecked={defaultChecked}
        className="w-5 h-5 rounded border-slate-300 text-[#3563E9] focus:ring-[#3563E9] cursor-pointer accent-[#3563E9]"
      />
    </div>
  </div>
);

export default ActionCustomerCar;