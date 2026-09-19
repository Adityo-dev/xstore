'use client';

import React, { ReactNode, MouseEventHandler } from 'react';
import Link from 'next/link';
import { Loader2, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'white'
  | 'light'
  | 'danger'
  | 'ghost';

export interface DynamicActionButtonProps {
  children?: ReactNode;
  label?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  hoverDefault?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: LucideIcon | React.ComponentType<{ className?: string; size?: number }> | null;
  showIcon?: boolean;
  iconPosition?: 'left' | 'right';
  className?: string;
  target?: string;
}

export default function DynamicActionButton({
  children,
  label,
  href,
  onClick,
  type = 'button',
  variant = 'default',
  hoverDefault = false,
  disabled = false,
  isLoading = false,
  icon: Icon,
  showIcon = false,
  iconPosition = 'left',
  className = '',
  target,
}: DynamicActionButtonProps) {
  const actualVariant = hoverDefault ? 'white' : variant;

  const variantStyles: Record<string, string> = {
    default: 'bg-primary text-white hover:bg-white hover:text-primary border-primary',
    primary: 'bg-primary text-white hover:bg-white hover:text-primary border-primary',
    secondary: 'bg-secondary text-white hover:bg-white hover:text-secondary border-secondary',
    white: 'bg-white text-black hover:bg-primary hover:text-white border-white',
    light: 'bg-white text-black hover:bg-primary hover:text-white border-white',
    outline: 'bg-transparent text-primary hover:bg-primary hover:text-white border-primary',
    danger: 'bg-red-600 text-white hover:bg-red-700 border-red-600',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/10 border-transparent',
  };

  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-lg text-[17px] font-semibold border transition duration-300 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed';

  const combinedClasses = cn(
    baseStyles,
    variantStyles[actualVariant] || variantStyles.default,
    className
  );

  const shouldShowIcon = isLoading || showIcon || !!Icon;

  const renderIcon = () => {
    if (isLoading) {
      return <Loader2 className="h-4 w-4 animate-spin" />;
    }
    if (Icon) {
      return <Icon className="h-4 w-4" size={18} />;
    }
    return null;
  };

  const content = (
    <>
      {shouldShowIcon && iconPosition === 'left' && renderIcon()}
      {(children || label) && <span>{children || label}</span>}
      {shouldShowIcon && iconPosition === 'right' && renderIcon()}
    </>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {content}
    </button>
  );
}
