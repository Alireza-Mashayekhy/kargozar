'use client';

import Link from 'next/link';

export default function BottomNav() {
    return (
        <div className="xl:hidden w-[calc(100%-20px)] md:w-[calc(100%-80px)] rounded-xl md:rounded-2xl bg-header backdrop-blur-md z-40 fixed bottom-2.5 left-2.5 md:left-10 flex justify-between items-center p-3 md:p-5 md:px-8 md:py-5">
            <Link
                href="/request"
                className="text-primary-1 px-3 md:px-5 py-1.5 rounded-lg bg-secondary font-semibold text-sm md:text-base"
            >
                ثبت سفارش
            </Link>
            <button
                style={{ direction: 'ltr' }}
                className="text-primary-1 px-3 md:px-5 py-1.5 rounded-lg bg-secondary text-sm md:text-base"
            >
                021_28427180
            </button>
            <button className="text-primary-1 px-3 md:px-5 py-1.5 rounded-lg bg-secondary text-sm md:text-base">
                09128938490
            </button>
        </div>
    );
}
