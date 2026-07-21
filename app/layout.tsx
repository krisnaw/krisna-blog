import type {Metadata} from "next";
import {Caveat, Geist, Geist_Mono, Instrument_Serif, Inter} from "next/font/google";
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

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" suppressHydrationWarning={true} className={`overscroll-none ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${caveat.variable} ${inter.variable}`}>
    <body className={`antialiased `}>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          <main id="main-content" className="grow mx-auto max-w-xl py-10 border-x border-dashed border-gray-200">
            {children}
          </main>
        </div>
      </ThemeProvider>
    </body>
    </html>
  );
}
