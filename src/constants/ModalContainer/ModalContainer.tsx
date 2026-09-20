'use client';

import React from 'react';
import DynamicModal from './_components/DynamicModal/DynamicModal';
import DynamicDrawer from './_components/DynamicDrawer/DynamicDrawer';
import { useModal } from '@/context/ModalContext';
import { MODAL_COMPONENTS } from './modal-mapping';

export const ModalContainer = () => {
  const { isOpen, view, title, description, layout, position, content, closeModal } = useModal();

  if (!isOpen) return null;

  // Use dynamic content passed in openModal or fallback to view mapping
  const modalContent = content || (view !== 'NONE' ? MODAL_COMPONENTS[view] : null);

  if (!modalContent) return null;

  const isDrawerLayout =
    layout === 'DRAWER' ||
    view === 'PRODUCT_QUICK_VIEW' ||
    view === 'CART_DRAWER' ||
    view === 'MOBILE_MENU';

  if (isDrawerLayout) {
    return (
      <DynamicDrawer
        isOpen={isOpen}
        onClose={closeModal}
        title={title}
        description={description}
        position={position || 'right'}
      >
        {modalContent}
      </DynamicDrawer>
    );
  }

  return (
    <DynamicModal
      isOpen={isOpen}
      onClose={closeModal}
      title={title}
      description={description}
    >
      {modalContent}
    </DynamicModal>
  );
};

export default ModalContainer;
