import Navbar from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Water Rocket Competition",
  description: "Water Rocket Competition Ho Chi Minh city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={cn("antialiased", geistMono.variable, geistSans.variable)}
      >
        <Navbar />
        <main className="mt-[70px]"> {children}</main>
      </body>
    </html>
  );
}
