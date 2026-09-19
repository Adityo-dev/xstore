'use client';

import React, { ReactNode, MouseEventHandler } from 'react';
import Link from 'next/link';
import { Loader2, LucideIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  label?: string;
  children?: ReactNode;
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
  label,
  children,
  href,
  onClick,
  type = 'button',
  variant = 'default',
  hoverDefault = false,
  disabled = false,
  isLoading = false,
  icon: Icon = Plus,
  showIcon = false,
  iconPosition = 'left',
  className = '',
  target,
}: DynamicActionButtonProps) {
  const actualVariant = (hoverDefault ? 'white' : variant) as ButtonVariant;

  const iconElement = isLoading ? (
    <Loader2 className="h-4 w-4 animate-spin" />
  ) : (
    showIcon && Icon && <Icon className="h-4 w-4" size={18} />
  );

  const buttonText = label || children;

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      {buttonText && <span>{buttonText}</span>}
      {iconPosition === 'right' && iconElement}
    </>
  );

  if (href && !disabled) {
    return (
      <Button
        asChild
        variant={actualVariant}
        className={className}
      >
        <Link
          href={href}
          onClick={onClick}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {content}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      type={type}
      variant={actualVariant}
      className={className}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {content}
    </Button>
  );
}
