'use client';

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BottomNav() {
    const [metaInfo, setMetaInfo] = useState([
        {
            value: '',
        },
        {
            value: '',
        },
        {
            value: '',
        },
    ]);
    useEffect(() => {
        getMeta();
    }, []);

    async function getMeta() {
        await axios
            .get('https://api.kargozargomrok.com/api/meta-info')
            .then((res) => {
                setMetaInfo(res.data.data);
            });
    }
    return (
        <div className="xl:hidden w-[calc(100%-20px)] md:w-[calc(100%-80px)] rounded-xl md:rounded-2xl bg-header backdrop-blur-md z-40 fixed bottom-2.5 left-2.5 md:left-10 flex justify-between items-center p-3 md:p-5 md:px-8 md:py-5">
            <Link
                href="/request"
                className="text-primary-1 px-3 md:px-5 py-1.5 rounded-lg bg-secondary font-semibold text-sm md:text-base"
            >
                ثبت سفارش
            </Link>
            <a
                href={`tel:${metaInfo[0].value}`}
                style={{ direction: 'ltr' }}
                className="text-primary-1 px-3 md:px-5 py-1.5 rounded-lg bg-secondary text-sm md:text-base"
            >
                {metaInfo[0].value}
            </a>
            <a
                href={`tel:${metaInfo[1].value}`}
                className="text-primary-1 px-3 md:px-5 py-1.5 rounded-lg bg-secondary text-sm md:text-base"
            >
                {metaInfo[1].value}
            </a>
        </div>
    );
}
