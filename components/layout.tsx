'use client';
import '@/assets/styles/globals.css';
import '@/assets/styles/font.scss';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import BottomNav from './BottomNav';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Toaster position="top-center" />
            <Header />
            <BottomNav />
            {children}
            <Footer />
        </div>
    );
}
