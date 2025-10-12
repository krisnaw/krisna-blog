import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React, {Suspense} from "react";
import FooterSection from "@/components/section/footer.section";
import HeaderSection from "@/components/section/header.section";
import FloatingMenu from "@/components/common/floating-menu";

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
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased  overscroll-none`}>
      <div className="min-h-screen flex flex-col">
        <Suspense>
          <HeaderSection/>
        </Suspense>
        <main className="flex-grow">
          {children}
        </main>
        <FloatingMenu/>
        <FooterSection/>
      </div>
    </body>
    </html>
  );
}
