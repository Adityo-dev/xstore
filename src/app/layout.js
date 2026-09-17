import AppProviders from "@/providers/AppProviders";
import { Rethink_Sans, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: ["400", "600", "700"],
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "xstore - Modern Tech & Apparel E-Commerce",
  description: "Next.js 15 Scalable E-Commerce Store & Admin Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} ${rethinkSans.variable} antialiased bg-[#090d16] text-white min-h-screen selection:bg-cyan-500 selection:text-black`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
