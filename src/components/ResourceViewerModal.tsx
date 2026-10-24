import React, { useState } from 'react';
import { ResourceItem } from '../types';
import { useApp } from '../context/AppContext';
import { X, Printer, Download, Check, Sparkles, BookOpen } from 'lucide-react';

interface ResourceViewerModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceViewerModal: React.FC<ResourceViewerModalProps> = ({ resource, onClose }) => {
  const { incrementResourceDownload } = useApp();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [downloadFeedback, setDownloadFeedback] = useState(false);

  if (!resource) return null;

  const handleToggle = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrint = () => {
    incrementResourceDownload(resource.id);
    window.print();
  };

  const handleDownloadText = () => {
    incrementResourceDownload(resource.id);
    let content = `ELEVATE HER — PAKISTAN'S SISTERHOOD & WELLNESS PLATFORM\n`;
    content += `========================================================\n\n`;
    content += `RESOURCE: ${resource.title}\n`;
    content += `CATEGORY: ${resource.category}\n`;
    content += `SUBTITLE: ${resource.contentTemplate.subtitle}\n\n`;
    content += `INSTRUCTIONS:\n${resource.contentTemplate.instructions}\n\n`;
    content += `--------------------------------------------------------\n\n`;

    resource.contentTemplate.sections.forEach(sec => {
      content += `[ ${sec.heading.toUpperCase()} ]\n`;
      sec.items.forEach((item, idx) => {
        content += `  [ ] ${idx + 1}. ${item}\n`;
      });
      content += `\n`;
    });

    content += `\nElevate Her Pakistan · Connect. Learn. Grow. · hello@elevateher.pk\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${resource.title.replace(/[^a-zA-Z0-9]/g, '_')}_ElevateHer.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadFeedback(true);
    setTimeout(() => setDownloadFeedback(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#493B3B]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-[#F8F2E8] border border-[#E8D8C5] rounded-2xl w-full max-w-2xl my-8 overflow-hidden shadow-2xl relative text-[#493B3B] max-h-[90vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-[#E8D8C5] bg-[#F4DDE1]/40 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#493B3B]/80 font-medium">
            <BookOpen className="w-4 h-4 text-[#B85C6D]" />
            <span>{resource.category}</span>
            <span>·</span>
            <span>{resource.format}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#493B3B]/70 hover:text-[#493B3B] hover:bg-[#E8D8C5]/50 rounded-full transition-colors cursor-pointer"
            aria-label="Close worksheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Worksheet Area (Formatted for high-end editorial reading or printing) */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1 bg-white">
          <div className="border-b border-[#E8D8C5] pb-4">
            <span className="text-[10px] uppercase tracking-widest text-[#B85C6D] font-bold block mb-1">
              Elevate Her · Printable Community Resource
            </span>
            <h2 className="text-2xl font-serif-luxury font-bold text-[#493B3B]">
              {resource.title}
            </h2>
            <p className="text-xs text-[#493B3B]/70 italic mt-0.5 font-serif-luxury">
              {resource.contentTemplate.subtitle}
            </p>
          </div>

          <div className="bg-[#F8F2E8] p-3.5 rounded-xl border border-[#E8D8C5] text-xs text-[#493B3B]/90 leading-relaxed">
            <strong className="block text-[#493B3B] font-semibold mb-0.5">Guidance & Purpose:</strong>
            {resource.contentTemplate.instructions}
          </div>

          <div className="space-y-6 pt-2">
            {resource.contentTemplate.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3">
                <h3 className="text-sm font-bold tracking-wide uppercase text-[#493B3B] border-b border-[#E8D8C5]/60 pb-1">
                  {section.heading}
                </h3>
                <div className="space-y-2.5">
                  {section.items.map((item, iIdx) => {
                    const key = `${sIdx}-${iIdx}`;
                    const isChecked = !!checkedItems[key];
                    return (
                      <div
                        key={iIdx}
                        onClick={() => handleToggle(key)}
                        className={`p-3 rounded-lg border text-xs flex items-start gap-3 transition-colors cursor-pointer ${
                          isChecked 
                            ? 'bg-[#DCE6D9]/40 border-[#DCE6D9] text-[#2c472b]' 
                            : 'bg-white hover:bg-[#F8F2E8]/40 border-[#E8D8C5] text-[#493B3B]'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border shrink-0 ${
                          isChecked ? 'bg-[#4A6B48] border-[#4A6B48] text-white' : 'border-[#E8D8C5] bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className={isChecked ? 'line-through text-[#2c472b]/70' : ''}>
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E8D8C5] text-[11px] text-[#493B3B]/60 flex items-center justify-between">
            <span>Elevate Her Pakistan · For Personal & Community Use</span>
            <span className="font-mono text-[10px]">Total Community Downloads: {resource.downloadsCount + (downloadFeedback ? 1 : 0)}</span>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 px-6 border-t border-[#E8D8C5] bg-[#F8F2E8] shrink-0 flex items-center justify-between gap-3">
          <div className="text-xs text-[#493B3B]/70">
            {downloadFeedback ? (
              <span className="text-[#3c593a] font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Downloaded successfully!
              </span>
            ) : (
              <span>Interactive preview mode. You can check items or save offline.</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 text-xs font-medium text-[#493B3B] bg-white border border-[#E8D8C5] rounded-lg hover:bg-[#F4DDE1]/40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Worksheet</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#493B3B] rounded-lg hover:bg-[#362a2a] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.TXT)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
