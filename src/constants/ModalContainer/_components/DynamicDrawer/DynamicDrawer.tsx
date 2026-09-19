'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TDrawerPosition } from '@/types/customModal.types';

interface DynamicDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  position?: TDrawerPosition;
  children: React.ReactNode;
  className?: string;
}

const DynamicDrawer: React.FC<DynamicDrawerProps> = ({
  isOpen,
  onClose,
  title,
  description,
  position = 'right',
  children,
  className = '',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const positionStyles: Record<TDrawerPosition, string> = {
    right: 'top-0 right-0 h-full w-[85vw] sm:w-[420px] md:w-[460px] animate-slideInRight border-l border-[#2a2d36]',
    left: 'top-0 left-0 h-full w-[85vw] sm:w-[420px] md:w-[460px] animate-slideInLeft border-r border-[#2a2d36]',
    top: 'top-0 left-0 w-full h-[60vh] animate-slideDown border-b border-[#2a2d36]',
    bottom: 'bottom-0 left-0 w-full h-[60vh] animate-slideDown border-t border-[#2a2d36]',
  };

  return (
    <div className="fixed inset-0 z-[10000] flex">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
      />

      {/* Drawer Panel */}
      <div
        className={cn(
          'fixed z-10 flex flex-col bg-[#18191c] text-white shadow-2xl overflow-hidden',
          positionStyles[position],
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#2a2d36] bg-[#1E2129]">
          <div>
            {title && (
              <h2 className="text-xl font-semibold font-marcellus text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xs text-gray-400 mt-0.5">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#18191c] text-gray-400 hover:text-white hover:bg-[#776BF8] transition duration-300 cursor-pointer"
            aria-label="Close panel"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DynamicDrawer;
