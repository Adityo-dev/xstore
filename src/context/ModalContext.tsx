'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  IModalContextType,
  IModalState,
  IOpenModalProps,
  TModalAction,
} from '@/types/customModal.types';

// Define initial state
const initialState: IModalState = {
  isOpen: false,
  view: 'NONE',
  data: null,
  title: '',
  description: '',
  layout: 'MODAL',
  position: 'right',
  content: null,
};

// Create Reducer function
const modalReducer = (state: IModalState, action: TModalAction): IModalState => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
        view: action.payload.view,
        data: action.payload.data || null,
        title: action.payload.title || '',
        description: action.payload.description || '',
        layout: action.payload.layout || 'MODAL',
        position: action.payload.position || 'right',
        content: action.payload.content || null,
      };
    case 'CLOSE_MODAL':
      return initialState;
    default:
      return state;
  }
};

// Create context
export const ModalContext = createContext<IModalContextType | undefined>(undefined);

// Create provider
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const pathname = usePathname();

  // Auto-close modal/drawer on route navigation
  useEffect(() => {
    if (state.isOpen) {
      dispatch({ type: 'CLOSE_MODAL' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const openModal = (props: IOpenModalProps) => {
    dispatch({
      type: 'OPEN_MODAL',
      payload: props,
    });
  };

  const closeModal = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  };

  return (
    <ModalContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};
