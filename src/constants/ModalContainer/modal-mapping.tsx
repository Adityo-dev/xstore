'use client';

import React from 'react';
import AsideAddToCard from '@/components/ui/addToCartAndView/_components/AsideAddToCard/AsideAddToCard';
import MobileAsideNav from '@/components/shared/mainNavigationBar/_components/MobileAsideNav/MobileAsideNav';
import AsideViewDetails from '@/components/ui/addToCartAndView/_components/AsideViewDetails/AsideViewDetails';
import { TModalView } from '@/types/customModal.types';

export const MODAL_COMPONENTS: Partial<Record<TModalView, React.ReactNode>> = {
  CART_DRAWER: <AsideAddToCard />,
  MOBILE_MENU: <MobileAsideNav />,
  PRODUCT_QUICK_VIEW: <AsideViewDetails />,
  NONE: null,
};
