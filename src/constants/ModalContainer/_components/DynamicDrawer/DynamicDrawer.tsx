'use client';

import React, { useEffect } from 'react';
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
    right: 'top-0 right-0 h-full w-[85vw] sm:w-[400px] animate-slideInRight',
    left: 'top-0 left-0 h-full w-[85vw] sm:w-[400px] animate-slideInLeft',
    top: 'top-0 left-0 w-full h-[60vh] animate-slideDown',
    bottom: 'bottom-0 left-0 w-full h-[60vh] animate-slideDown',
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-[999] cursor-pointer transition-opacity duration-300"
      />

      {/* Aside Panel */}
      <div
        className={cn(
          'fixed top-0 w-[85vw] sm:w-[400px] h-[100vh] bg-[#1e1e1e] text-white z-[1000] shadow-2xl flex flex-col',
          positionStyles[position],
          className
        )}
      >
        {/* Floating Close Button (Original DynamicAsidePanel style) */}
        <button
          onClick={onClose}
          className={cn(
            'absolute top-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#776BF8] text-white hover:rotate-90 transition duration-300 cursor-pointer shadow-lg z-[1001]',
            position === 'right' ? '-left-12' : '-right-12'
          )}
          aria-label="Close panel"
        >
          ✕
        </button>

        {/* Title Header */}
        {title && (
          <div className="border-b border-gray-700 p-4">
            <h2 className="text-xl font-semibold text-white">
              {title}
            </h2>
            {description && (
              <p className="text-xs text-gray-400 mt-1">{description}</p>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-6 custom-scrollbar">
          {children}
        </div>
      </div>
    </>
  );
};

export default DynamicDrawer;
