'use client';

import React from 'react';
import AsideAddToCard from '@/components/ui/addToCartAndView/_components/AsideAddToCard/AsideAddToCard';
import MobileNavBar from '@/components/main/mainNavigationBar/_components/MobileAsideNav/_components/MobileNavBar/MobileNavBar';
import AsideViewDetails from '@/components/ui/addToCartAndView/_components/AsideViewDetails/AsideViewDetails';
import { TModalView } from '@/types/customModal.types';

export const MODAL_COMPONENTS: Partial<Record<TModalView, React.ReactNode>> = {
  CART_DRAWER: <AsideAddToCard />,
  MOBILE_MENU: <MobileNavBar />,
  PRODUCT_QUICK_VIEW: <AsideViewDetails />,
  NONE: null,
};
