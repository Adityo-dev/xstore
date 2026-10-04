"use client";

import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniEquals } from "react-icons/hi2";
import { Fragment } from "react";
import { useCart } from "@/context/CartContext";
import { useModal } from "@/context/ModalContext";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";
import RowCard from "@/components/ui/cards/RowCard";

export interface BundleItemDetail {
  id: number;
  image: string;
  title: string;
  category?: string;
  originalPrice?: number;
  salePrice: number;
  tag?: string;
  badge?: string;
  reviews?: any[];
}

export interface BundlePackage {
  id: number;
  title: string;
  badge: string;
  items: BundleItemDetail[];
  originalTotal: number;
  bundlePrice: number;
  savings: number;
  stock?: number;
  categories?: string[];
}

export default function BundleCard({ data }: { data: BundlePackage }) {
  const { addToCart } = useCart();
  const { openModal } = useModal();

  if (!data || !data.items || data.items.length === 0) return null;

  const savingsAmount =
    data.savings ||
    (data.originalTotal > data.bundlePrice ? data.originalTotal - data.bundlePrice : 0);
  const bundleDiscountPercent =
    data.originalTotal > 0 && data.bundlePrice < data.originalTotal
      ? Math.round(((data.originalTotal - data.bundlePrice) / data.originalTotal) * 100)
      : savingsAmount > 0
        ? Math.round((savingsAmount / (data.bundlePrice + savingsAmount)) * 100)
        : null;

  const handleAddToCart = () => {
    const bundleCartItem = {
      id: `combo-${data.id}`,
      title: data.title,
      price: data.bundlePrice,
      salePrice: data.bundlePrice,
      originalPrice: data.originalTotal,
      image: data.items[0]?.image || "",
      isCombo: true,
      items: data.items.slice(0, 2),
      quantity: 1,
    };

    addToCart(bundleCartItem);
    openModal({
      view: "CART_DRAWER",
      layout: "DRAWER",
      position: "right",
      title: "🛒 Your Cart",
      data: bundleCartItem,
    });
  };

  return (
    <div className="bg-secondary-dark/60 border border-white/10 rounded-lg p-3 sm:p-5 w-full">
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3 sm:gap-4 md:gap-6 w-full">
        {/* Dynamic 2 Items using the exact RowCard from Recent Releases */}
        <div className="flex-1 flex flex-col md:flex-row items-stretch md:items-center gap-3 sm:gap-4 md:gap-6">
          {data.items.slice(0, 2).map((item, index) => {
            return (
              <Fragment key={item.id}>
                <div className="flex-1 flex w-full">
                  <RowCard game={item} className="flex-1 w-full" />
                </div>

                {/* Plus (+) Node Connector */}
                {index < Math.min(data.items.length, 2) - 1 && (
                  <div className="self-center shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-600 bg-secondary-dark flex items-center justify-center text-gray-300 text-sm font-bold my-1 xl:my-0">
                    <AiOutlinePlus />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        {/* Equals (=) Node Connector */}
        <div className="self-center shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-600 bg-secondary-dark flex items-center justify-center text-gray-300 text-base font-bold my-1 xl:my-0">
          <HiMiniEquals />
        </div>

        {/* Total Price & Add to Cart Box - Compact, Matching Height */}
        <div className="w-full xl:w-[320px] 2xl:w-[340px] shrink-0 bg-secondary-dark rounded-lg p-3 sm:p-3.5 md:p-4 border border-white/5 flex flex-col justify-between self-stretch">
          <div>
            {/* Header: Deal Badge (Left) & "Your Price" (Right) */}
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 flex-wrap">
                {data.badge && (
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded uppercase tracking-wider">
                    {data.badge}
                  </span>
                )}
                {bundleDiscountPercent && bundleDiscountPercent > 0 && (
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-danger bg-danger/10 border border-danger/20 px-2 py-0.5 rounded uppercase tracking-wider">
                    SAVE {bundleDiscountPercent}%
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">
                Your Price
              </span>
            </div>

            {/* Total Pricing Row */}
            <div className="flex items-baseline justify-end gap-2 my-1">
              <span className="line-through text-gray-400 text-xs sm:text-sm font-medium">
                ${data.originalTotal.toFixed(2)}
              </span>
              <span className="text-2xl sm:text-3xl md:text-[30px] font-bold text-secondary tracking-tight leading-none">
                ${data.bundlePrice.toFixed(2)}
              </span>
            </div>

            {/* Savings Callout - attractive client conversion text */}
            {savingsAmount > 0 && (
              <div className="text-right mt-1">
                <span className="inline-block text-xs sm:text-[13px] font-semibold text-secondary bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded">
                  You save ${savingsAmount.toFixed(2)}
                </span>
              </div>
            )}
          </div>

          {/* Value Perks & Action Button */}
          <div className="space-y-2.5 mt-2 pt-2 border-t border-white/5">
            {/* Trust Micro-perks */}
            <div className="flex items-center justify-between text-xs sm:text-[12.5px] text-gray-300">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                2 Items Included
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Instant Delivery
              </span>
            </div>

            {/* Action Button using user's DynamicActionButton component */}
            <DynamicActionButton
              onClick={handleAddToCart}
              className="w-full text-center cursor-pointer text-sm sm:text-base py-2 sm:py-2.5"
            >
              Add Bundle to Cart
            </DynamicActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
