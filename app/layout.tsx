import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krisna Wijaya | Software Developer",
  description: "Personal website of Krisna Wijaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="overscroll-none">
      <body className={`${geistSans.variable} ${geistMono.variable} 
      antialiased flex flex-col min-h-screen overscroll-none`}>
      <SiteHeader/>
      <div className="flex-grow min-h-screen">
         {children}
      </div>
      <SiteFooter/>
      </body>
    </html>
  );
}
