import { useState } from 'react';
import { Plus, Paperclip, Image, Mic, Smile, Send } from 'lucide-react';

const conversations = [
  { id: '1', avatar: 'photo', initial: null, active: true },
  { id: '2', avatar: null, initial: 'T', color: 'bg-[#3563E9]' },
  { id: '3', avatar: null, initial: 'A', color: 'bg-[#EAB308]' },
  { id: '4', avatar: null, initial: 'E', color: 'bg-[#94A3B8]' },
];

const Inbox = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="-m-4 md:-m-8 w-[calc(100%+2rem)] md:w-[calc(100%+4rem)] min-h-[calc(100vh-5rem)] flex bg-[#F6F7F9]">
      <aside className="w-[88px] md:w-24 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col items-center py-6 gap-6">
        <button type="button" className="cursor-pointer w-12 h-12 md:w-14 md:h-14 rounded-full text-[#90A3BF] flex items-center justify-center hover:text-[#3563E9] hover:bg-[#3563E9]/5 transition-colors" aria-label="New conversation">
          <Plus className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
        </button>
        <div className="flex flex-col items-center gap-5">
          {conversations.map((c) => (
            <button key={c.id} type="button" className="cursor-pointer rounded-full flex-shrink-0 overflow-hidden transition-all" aria-label={c.initial ? `Conversation ${c.initial}` : 'Active conversation'}>
              {c.avatar === 'photo' ? (
                <div className="w-12 h-12 md:w-14 md:h-14">
                  <img src="/assets/User profile picture.png" alt="" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className={`w-12 h-12 md:w-14 md:h-14 ${c.color || 'bg-gray-200'} flex items-center justify-center text-white font-semibold text-lg`}>
                  {c.initial}
                </div>
              )}
            </button>
          ))}
        </div>
      </aside>

      <section className="flex-1 flex flex-col bg-white min-w-0">
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
          <div className="flex justify-end gap-4">
            <div className="flex flex-col items-end max-w-[85%] min-w-[280px]">
              <p className="bg-white border border-gray-100 rounded-2xl rounded-br-md px-6 py-5 text-[15px] leading-relaxed text-gray-800 shadow-sm min-h-[72px]">
                Hi, I just booked a car through your website for next week, but I haven&apos;t received the confirmation email yet. Can you check?
              </p>
              <div className="flex gap-2 mt-3 flex-wrap justify-end">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                  <Image className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                  <span className="text-xs">—</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs font-medium">+5</div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
              <img src="/assets/User profile picture.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <div className="flex flex-col items-end max-w-[85%] overflow-visible">
              <div className="relative flex items-center h-16 min-w-[360px] max-w-[420px] overflow-visible rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[5px]" style={{ background: 'linear-gradient(to right, #E0ECFF 66%, #D4E0FF 66%)', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                <button type="button" className="cursor-pointer absolute left-2.5 bottom-[-5px] w-9 h-9 rounded-full bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d52c4] transition-colors z-10 flex-shrink-0" style={{ boxShadow: '0 2px 8px rgba(53, 99, 233, 0.35)' }} aria-label="Play audio">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <span className="absolute left-12 top-3 text-[15px] font-medium text-[#3563E9] tabular-nums">02:45</span>
                <div className="flex-1 flex items-center justify-center min-h-[28px] min-w-0 pl-14 pr-4 py-2.5" style={{ gap: '1.8px' }}>
                  {(() => {
                    const heights = [3, 12, 5, 14, 7, 4, 11, 6, 9, 4, 13, 5, 8, 10, 4, 12, 6, 9, 5, 11, 7, 14, 4, 8, 10, 6, 12, 5, 9, 7, 4, 11, 8, 6, 13, 5, 10, 7, 9, 4, 12, 6, 8, 11, 5, 14, 7, 9];
                    return heights.map((h, i) => {
                      const up = Math.max(2, Math.min(h, 10));
                      const down = Math.max(2, Math.min(heights[(i + 7) % heights.length], 10));
                      return (
                        <span key={i} className="flex flex-col items-center justify-center flex-shrink-0">
                          <span className="w-[2px] bg-[#3563E9] rounded-full" style={{ height: `${up}px` }} />
                          <span className="w-[2px] bg-[#3563E9] rounded-full" style={{ height: `${down}px` }} />
                        </span>
                      );
                    });
                  })()}
                </div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
              <img src="/assets/User profile picture.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex justify-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#3563E9] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">T</div>
            <div className="flex flex-col gap-5 max-w-[85%] min-w-[280px] overflow-visible">
              <p className="bg-[#3563E9] text-white rounded-2xl rounded-bl-md px-6 py-5 text-[15px] leading-relaxed min-h-[72px]">
                Of course. Could you please provide me with my booking reference number or the email you used for the reservation?
              </p>
              <p className="bg-[#3563E9] text-white rounded-2xl rounded-bl-md px-6 py-5 text-[15px] leading-relaxed min-h-[72px]">
                Thank you. I&apos;ve located your booking. The confirmation was sent, but it looks like it may have gone to your spam folder. I&apos;ll resend it now—please check your inbox again.
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 pt-4 pb-5 bg-white rounded-b-2xl rounded-t-xl">
          <div className="min-h-[52px]" aria-hidden />
          <div className="border-t border-[#E0E0E0] w-full my-0 mx-0" />
          <div className="flex items-center gap-3 pt-4">
            <button type="button" className="cursor-pointer p-2.5 text-[#9E9E9E] hover:text-[#616161] hover:bg-gray-50 rounded-lg transition-colors" aria-label="Voice message">
              <Mic className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button type="button" className="cursor-pointer p-2.5 text-[#9E9E9E] hover:text-[#616161] hover:bg-gray-50 rounded-lg transition-colors" aria-label="Add image">
              <Image className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button type="button" className="cursor-pointer p-2.5 text-[#9E9E9E] hover:text-[#616161] hover:bg-gray-50 rounded-lg transition-colors" aria-label="Attach file">
              <Paperclip className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="It was nice to meet you"
              className="flex-1 min-w-0 py-2.5 px-1 text-[15px] text-[#616161] placeholder:text-[#9E9E9E] bg-transparent border-none focus:outline-none focus:ring-0"
            />
            <button type="button" className="cursor-pointer p-2.5 text-[#9E9E9E] hover:text-[#616161] hover:bg-gray-50 rounded-lg transition-colors" aria-label="Emoji">
              <Smile className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button type="button" className="cursor-pointer w-12 h-12 rounded-full bg-[#4285F4] text-white flex items-center justify-center hover:bg-[#3367D6] transition-colors flex-shrink-0 ml-1" aria-label="Send message">
              <Send className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inbox;
