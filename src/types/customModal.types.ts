import React from 'react';

// Modal views type for xstore e-commerce & gaming platform
export type TModalView =
  | 'CART_DRAWER'
  | 'MOBILE_MENU'
  | 'PRODUCT_QUICK_VIEW'
  | 'ORDER_DETAILS'
  | 'LOGIN_REQUIRED'
  | 'DELETE_CONFIRM'
  | 'WRITE_REVIEW'
  | 'FILTER_DRAWER'
  | 'CUSTOM'
  | 'NONE';

export type TDrawerPosition = 'right' | 'left' | 'top' | 'bottom';

// Open Modal Props
export interface IOpenModalProps {
  view: TModalView;
  data?: unknown;
  title?: string;
  description?: string;
  layout?: 'MODAL' | 'DRAWER';
  position?: TDrawerPosition;
  content?: React.ReactNode;
}

// Modal state interface
export interface IModalState {
  isOpen: boolean;
  view: TModalView;
  data: unknown;
  title: string;
  description: string;
  layout: 'MODAL' | 'DRAWER';
  position: TDrawerPosition;
  content: React.ReactNode | null;
}

// Action types
export type TModalAction =
  | {
    type: 'OPEN_MODAL';
    payload: IOpenModalProps;
  }
  | { type: 'CLOSE_MODAL' };

export interface IModalContextType extends IModalState {
  openModal: (props: IOpenModalProps) => void;
  closeModal: () => void;
}
