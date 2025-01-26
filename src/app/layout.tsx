import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: 'Master the art of Music',
    description: '',
};

function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang='en' className={'dark'}>
        <body className={inter.className}>
        <div className={'relative w-full flex items-center justify-center'}>
            <Navbar/>
        </div>
        {children}
        </body>
        </html>
    );
}

export default RootLayout;
