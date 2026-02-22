"use client";

import { useState } from "react";
import customerProfilePicture from "../../assets/Customer-profile-picture.png";
import eyeIcon from "../../assets/eye-icon.png";
import addIcon from "../../assets/add.png";
import downloadIcon from "../../assets/download.png";
import trashIcon from "../../assets/trash-icon.png";
import htmlFileIcon from "../../assets/html-file-icon.png";
import pdfFileIcon from "../../assets/pdf-adobe-arcobat-icon.png";
import imageFileIcon from "../../assets/image-png.png";
import videoFileIcon from "../../assets/video-mp4.png";

const clientProfile = {
  name: "Ahmed bin Tlal",
  avatar: customerProfilePicture,
  clientId: "#ED-001",
  dateOfBirth: "4-12-1995",
  contactNumber: "+966593948852",
  presentAddress: "29 Al-Shanana Street, Al-Naseem Al-Sharqi (East Naseem), As-Saih",
  nidNumber: "5468 5879 45821",
  emergencyContact: "+966593948852",
  drivingLicense: "FYDR4698798D98",
  joiningDate: "26-01-2022",
};

const tripDetailsData = [
  { tripId: "#505524082", date: "7-12-2023", time: "12:47am", customerId: "#559925151", customerName: "Ali Al Ghafli" },
  { tripId: "#505524083", date: "8-12-2023", time: "2:15pm", customerId: "#559925152", customerName: "Omar Hassan" },
  { tripId: "#505524084", date: "9-12-2023", time: "9:30am", customerId: "#559925153", customerName: "Khalid Al Rashid" },
  { tripId: "#505524085", date: "10-12-2023", time: "5:20pm", customerId: "#559925154", customerName: "Youssef Ahmed" },
  { tripId: "#505524086", date: "11-12-2023", time: "11:00am", customerId: "#559925155", customerName: "Ibrahim Salem" },
];

const TAB_KEYS = { TRIP_DETAILS: "trip-details", LICENSE: "license", DOCUMENT: "document" };

const licenseDocumentsData = [
  {
    id: "1",
    title: "Vehicle Registration (Mulkiya) — M-12345",
    description:
      "This document was issued by the Royal Oman Police (ROP) on January 10, 2025, and will remain valid until December 31, 2025. It pertains to a Toyota Corolla, model year 2022.",
    files: [
      { name: "Index.html", iconSrc: htmlFileIcon },
      { name: "Document.pdf", iconSrc: pdfFileIcon },
      { name: "Preview.png", iconSrc: imageFileIcon },
      { name: "Video.mp4", iconSrc: videoFileIcon },
    ],
  },
  {
    id: "2",
    title: "Vehicle Registration (Mulkiya) — M-12345",
    description:
      "This document was issued by the Royal Oman Police (ROP) on January 10, 2025, and will remain valid until December 31, 2025. It pertains to a Toyota Corolla, model year 2022.",
    files: [
      { name: "Index.html", iconSrc: htmlFileIcon },
      { name: "Document.pdf", iconSrc: pdfFileIcon },
      { name: "Preview.png", iconSrc: imageFileIcon },
      { name: "Video.mp4", iconSrc: videoFileIcon },
    ],
  },
];

const CustomerProfileDocument = () => {
  const [activeTab, setActiveTab] = useState(TAB_KEYS.TRIP_DETAILS);

  return (
    <div className="customer-profile-document space-y-6">
      <h1 className="text-2xl md:text-3xl font-extrabold text-[#1A202C] tracking-tight">Client Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column – Client profile card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] overflow-hidden border border-white/50 p-6 flex flex-col items-center">
            <img
              src={clientProfile.avatar}
              alt={clientProfile.name}
              className="w-72 h-52 rounded-lg object-cover flex-shrink-0"
            />
            <h2 className="mt-4 text-xl font-bold text-[#1A202C]">{clientProfile.name}</h2>
            <dl className="mt-6 w-full grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-[14px] items-baseline">
              <dt className="text-[#90A3BF] font-semibold">Client ID</dt>
              <dd className="text-[#1A202C] font-semibold">{clientProfile.clientId}</dd>
              <dt className="text-[#90A3BF] font-semibold">Date of Birth</dt>
              <dd className="text-[#1A202C] font-semibold">{clientProfile.dateOfBirth}</dd>
              <dt className="text-[#90A3BF] font-semibold">Contact Number</dt>
              <dd className="text-[#1A202C] font-semibold">{clientProfile.contactNumber}</dd>
              <dt className="text-[#90A3BF] font-semibold">Present Address</dt>
              <dd className="text-[#1A202C] font-semibold">{clientProfile.presentAddress}</dd>
              <dt className="text-[#90A3BF] font-semibold">NID Number</dt>
              <dd className="text-[#1A202C] font-semibold">{clientProfile.nidNumber}</dd>
              <dt className="text-[#90A3BF] font-semibold">Emergency Contact</dt>
              <dd className="text-[#1A202C] font-semibold">{clientProfile.emergencyContact}</dd>
              <dt className="text-[#90A3BF] font-semibold">Driving Licensee</dt>
              <dd className="text-[#1A202C] font-semibold">{clientProfile.drivingLicense}</dd>
              <dt className="text-[#90A3BF] font-semibold">Joining Date</dt>
              <dd className="text-[#1A202C] font-semibold">{clientProfile.joiningDate}</dd>
            </dl>
            <button
              type="button"
              className="cursor-pointer mt-6 w-full py-3 rounded-[10px] bg-[#3563E9] text-white font-bold text-[14px] hover:bg-[#2d52c4] transition-colors"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Right column – Tabs + table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] overflow-hidden border border-white/50">
            <div className="flex gap-0 border-b border-[#F1F3F9]">
              <button
                type="button"
                onClick={() => setActiveTab(TAB_KEYS.TRIP_DETAILS)}
                className={`cursor-pointer w-[192px] rounded-[10px] px-6 py-4 text-[14px] font-bold transition-colors ${
                  activeTab === TAB_KEYS.TRIP_DETAILS
                    ? "mt-2.5 mb-2.5 bg-[#3563E9] text-white"
                    : "ml-2.5 mr-2.5 bg-white text-[#1A202C] hover:bg-gray-50"
                }`}
              >
                Trip Details
              </button>
              <button
                type="button"
                onClick={() => setActiveTab(TAB_KEYS.LICENSE)}
                className={`cursor-pointer w-[192px] rounded-[10px] px-6 py-4 text-[14px] font-bold transition-colors ${
                  activeTab === TAB_KEYS.LICENSE ? "mt-2.5 mb-2.5 bg-[#3563E9] text-white" : "ml-2.5 mr-2.5 bg-white text-[#1A202C] hover:bg-gray-50"
                }`}
              >
                License
              </button>
              <button
                type="button"
                onClick={() => setActiveTab(TAB_KEYS.DOCUMENT)}
                className={`cursor-pointer w-[192px] rounded-[10px] px-6 py-4 text-[14px] font-bold transition-colors ${
                  activeTab === TAB_KEYS.DOCUMENT ? "mt-2.5 mb-2.5 bg-[#3563E9] text-white" : "ml-2.5 mr-2.5 bg-white text-[#1A202C] hover:bg-gray-50"
                }`}
              >
                Document
              </button>
            </div>

            {activeTab === TAB_KEYS.TRIP_DETAILS && (
              <div className="overflow-x-auto -mt-px">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#F6F7F9] border-b border-[#F1F3F9] text-[#222222] text-[12px] font-bold tracking-[0.05em]">
                      <th className="px-6 py-5 whitespace-nowrap">Trip_ID</th>
                      <th className="px-6 py-5 whitespace-nowrap">Date</th>
                      <th className="px-6 py-5 whitespace-nowrap">Time</th>
                      <th className="px-6 py-5 whitespace-nowrap">Customer ID</th>
                      <th className="px-6 py-5 whitespace-nowrap">Customer Name</th>
                      <th className="px-6 py-5 whitespace-nowrap">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F1F3F9]">
                    {tripDetailsData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/30 transition-colors text-[14px] font-semibold">
                        <td className="px-6 py-6 text-[#1A202C]">{row.tripId}</td>
                        <td className="px-6 py-6 text-[#222222]">{row.date}</td>
                        <td className="px-6 py-6 text-[#222222]">{row.time}</td>
                        <td className="px-6 py-6 text-[#222222]">{row.customerId}</td>
                        <td className="px-6 py-6 text-[#222222]">{row.customerName}</td>
                        <td className="px-6 py-6">
                          <button
                            type="button"
className="cursor-pointer w-[50px] h-10 rounded-[10px] bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d52c4] transition-colors border-0"
                                            aria-label="View details"
                          >
                            <img src={eyeIcon} alt="View" className="w-4 h-4 brightness-0 invert" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === TAB_KEYS.LICENSE && (
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h2 className="text-xl md:text-2xl font-bold text-[#1A202C]">License</h2>
                  <button
                    type="button"
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] bg-[#3563E9] text-white text-[14px] font-bold hover:bg-[#2d52c4] transition-colors shrink-0"
                  >
                    <img src={addIcon} alt="" className="w-5 h-5 brightness-0 invert" />
                    Add License
                  </button>
                </div>

                <div className="space-y-4">
                  {licenseDocumentsData.map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(17,38,146,0.05)] border border-white/50 p-6 space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <h3 className="text-[16px] font-bold text-[#1A202C]">{doc.title}</h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-[#3563E9] text-white text-[14px] font-semibold hover:bg-[#2d52c4] transition-colors"
                          >
                            <img src={downloadIcon} alt="" className="w-4 h-4 brightness-0 invert" />
                            Download
                          </button>
                          <button
                            type="button"
                            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-[#3563E9] text-white text-[14px] font-semibold hover:bg-[#2d52c4] transition-colors"
                          >
                            <img src={trashIcon} alt="" className="w-4 h-4 brightness-0 invert" />
                            Delete
                          </button>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#90A3BF] font-medium leading-relaxed">{doc.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {doc.files.map((file) => (
                            <button
                              key={file.name}
                              type="button"
                              className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[#F1F3F9] bg-[#F6F7F9] text-[#1A202C] text-[13px] font-semibold hover:bg-[#EEF1F5] transition-colors"
                            >
                              <img src={file.iconSrc} alt="" className="w-4 h-4" />
                              {file.name}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === TAB_KEYS.DOCUMENT && (
              <div className="p-8 text-center text-[#90A3BF] font-semibold">Document content goes here.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfileDocument;
