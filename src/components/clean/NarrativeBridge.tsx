import React from 'react';

interface NarrativeBridgeProps {
  question?: string;
  statement: string;
  destination: string;
  bgColor?: string;
}

export const NarrativeBridge: React.FC<NarrativeBridgeProps> = ({
  question,
  statement,
  destination,
  bgColor = 'bg-white',
}) => {
  return (
    <div className={`w-full py-4 px-3.5 sm:px-5 ${bgColor} border-b border-slate-200/70 text-center`}>
      <div className="max-w-[460px] mx-auto bg-slate-50/90 border border-slate-200/90 rounded-xl p-3 sm:p-3.5 shadow-2xs">
        {question && (
          <p className="text-[12px] sm:text-[13px] font-bold text-slate-500 uppercase tracking-wide mb-0.5">
            {question}
          </p>
        )}
        <p className="text-[13.5px] sm:text-[14.5px] font-bold text-slate-800 leading-snug">
          {statement}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[11.5px] sm:text-[12px] font-black text-blue-900 uppercase tracking-wider">
          <span>↓</span>
          <span>{destination}</span>
        </div>
      </div>
    </div>
  );
};
