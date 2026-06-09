import type {Metadata} from "next";
import {Caveat, Geist, Geist_Mono, Instrument_Serif} from "next/font/google";
import "./globals.css";
import "@blossom-carousel/core/style.css";
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const caveat = Caveat({
  variable: "--font-caveat",
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
    <html lang="en" suppressHydrationWarning={true} className={`overscroll-none ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${caveat.variable}`}>
    <body className={`antialiased `}>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen bg-background">
          <main className="grow">
            {children}
          </main>
        </div>
      </ThemeProvider>
    </body>
    </html>
  );
}
