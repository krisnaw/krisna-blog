import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React, {Suspense} from "react";
import FooterSection from "@/components/section/footer.section";
import HeaderSection from "@/components/section/header.section";
import FloatingMenu from "@/app/floating-menu";

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
    <link rel="icon" href="/fav.svg" sizes="any" />
      <body className={`${geistSans.variable} ${geistMono.variable} 
      antialiased min-h-screen overscroll-none`}>
        <Suspense>
          <HeaderSection />
        </Suspense>
        <div>
          {children}
        </div>
        <FloatingMenu/>
        <FooterSection />
      </body>
    </html>
  );
}
