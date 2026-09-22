import React from 'react';
import { ArrowDown } from 'lucide-react';

interface SectionBridgeProps {
  question?: string;
  statement: string;
  nextSectionTitle?: string;
  nextSectionId?: string;
  variant?: 'slate' | 'blue' | 'dark';
}

export const SectionBridge: React.FC<SectionBridgeProps> = ({
  question,
  statement,
  nextSectionTitle,
  nextSectionId,
  variant = 'slate',
}) => {
  const isDark = variant === 'dark';
  const isBlue = variant === 'blue';

  return (
    <div className="py-5 px-4 sm:px-6">
      <div
        className={`max-w-[460px] mx-auto rounded-2xl p-4 sm:p-5 text-center transition-all ${
          isDark
            ? 'bg-slate-900 border border-slate-800 text-slate-200'
            : isBlue
            ? 'bg-blue-50/90 border border-blue-200 text-blue-950'
            : 'bg-slate-50 border border-slate-200/90 text-slate-800'
        }`}
      >
        {question && (
          <div
            className={`text-[12px] sm:text-[12.5px] font-black uppercase tracking-wider mb-1.5 ${
              isDark ? 'text-blue-400' : isBlue ? 'text-blue-800' : 'text-slate-500'
            }`}
          >
            {question}
          </div>
        )}

        <p
          className={`text-[13.5px] sm:text-[14.5px] leading-relaxed font-medium mb-3 ${
            isDark ? 'text-slate-200' : isBlue ? 'text-blue-950 font-semibold' : 'text-slate-700'
          }`}
        >
          {statement}
        </p>

        {nextSectionTitle && nextSectionId && (
          <a
            href={`#${nextSectionId}`}
            className={`inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13px] font-black rounded-full px-3.5 py-1.5 transition-all hover:scale-[1.02] cursor-pointer ${
              isDark
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : isBlue
                ? 'bg-blue-900 hover:bg-blue-950 text-white shadow-xs'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
            }`}
          >
            <span>{nextSectionTitle}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        )}
      </div>
    </div>
  );
};
