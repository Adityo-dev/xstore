import { AsideProvider } from "@/components/context/AsideContext";
import { CartProvider } from "@/components/context/CartContext";
import DynamicAsidePanel from "@/components/DynamicAsidePanel";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import MainFooter from "@/shared/footer/MainFooter";
import MainNavigationBar from "@/shared/navigationBar/MainNavigationBar";
import { Rethink_Sans, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: ["400", "600", "700"],
  display: "swap",
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | xstore",
    default: "xstore - Your Premium E-Commerce Destination",
  },
  description: "Discover a wide range of high-quality products at xstore. Shop premium collections with fast shipping and excellent customer service.",
  keywords: ["ecommerce", "shop", "premium products", "xstore", "online shopping"],
  openGraph: {
    title: "xstore - Premium E-Commerce Destination",
    description: "Discover a wide range of high-quality products at xstore. Shop premium collections today.",
    siteName: "xstore",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "xstore - Premium E-Commerce Destination",
    description: "Shop premium collections with fast shipping and excellent customer service.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} ${rethinkSans.variable} antialiased`}
      >
        <CartProvider>
          <AsideProvider>
            <MainNavigationBar />
            {children}
            <DynamicAsidePanel />
          </AsideProvider>
        </CartProvider>

        <MainFooter />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
