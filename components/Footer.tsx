'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
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
        <div className="flex flex-col items-center gap-12 rounded-t-3xl -mt-5 z-10  px-2.5 md:px-5 relative bg-gradient-to-t from-primary-1 to-black py-16 pb-20 sm:pb-36 xl:py-16">
            <div className="flex gap-10 sm:gap-24">
                <div className="flex items-center gap-2">
                    <Image
                        alt="Footer KGLogo"
                        title="KGLogo"
                        src="/logo/KGLogo.webp"
                        className="w-10 sm:w-14"
                        width={500}
                        height={500}
                    />
                    <div className="text-lg sm:text-2xl text-white font-bold">
                        کارگزار گمرک
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        alt="Footer logo"
                        title="logo"
                        src="/logo/logo.webp"
                        width={500}
                        height={500}
                        className="w-10 sm:w-14"
                    />
                    <div className="text-lg sm:text-2xl text-white font-bold">
                        گمرک
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between sm:justify-center gap-10 sm:gap-28 w-full text-white">
                <div className="flex flex-col gap-5 max-w-96">
                    <div className="font-bold text-xl sm:text-3xl">
                        درباره کارگزار گمرک
                    </div>
                    <p className="text-justify text-sm sm:text-base">
                        مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران
                        مهندس محمدامین قنبری تشکیل شده است تا نیاز های شما
                        بازرگان و صاحبین کالای عزیز را در حوزه ترخیص کالاهای
                        وارداتی و صادراتی در کوتاهترین زمان و با کمترین هزینه
                        های گمرکی ممکن و مراجع اختلافات گمرکی و مشاوره در زمینه
                        امور بازرگانی و گمرکی بر طرف سازد.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-xl sm:text-3xl">
                        کارگزار گمرک
                    </div>
                    <div className="flex flex-col gap-3  text-sm sm:text-bas">
                        <Link href="/about">درباره ما</Link>
                        <Link href="/contact">تماس با ما</Link>
                        <Link href="/request">ثبت سفارش</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-xl sm:text-3xl">خدمات</div>
                    <div className="flex flex-col gap-3  text-sm sm:text-bas">
                        <Link href="/service/clearance">ترخیص کالا</Link>
                        <Link href="/service/commission">
                            مراجع اختلافات گمرک
                        </Link>
                        <Link href="/service/counseling">مشاوره بازرگانی</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-xl sm:text-3xl">
                        مجله گمرکی
                    </div>
                    <div className="flex flex-col gap-3  text-sm sm:text-bas">
                        <Link href="blog/circular-letters">بخشنامه گمرکی </Link>
                        <Link href="blog/news-letters">خبرنامه گمرکی </Link>
                        <Link href="blog/posts">مقالات گمرکی </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full sm:w-fit">
                    <div className="font-bold text-xl sm:text-3xl">
                        راه های ارتباطی
                    </div>
                    <div className="flex gap-3 justify-between sm:justify-normal">
                        <div className="flex flex-col gap-3 text-sm sm:text-bas">
                            <div className="whitespace-nowrap">شماره تلفن:</div>
                            <div className="whitespace-nowrap">
                                شماره موبایل:
                            </div>
                            <div className="whitespace-nowrap">آدرس:</div>
                        </div>
                        <div className="flex flex-col gap-3 text-sm sm:text-bas">
                            <a
                                href={`tel:${metaInfo[1].value}`}
                                className="text-left"
                            >
                                {metaInfo[1].value}
                            </a>
                            <a
                                href={`tel:${metaInfo[0].value}`}
                                className="text-left"
                            >
                                {metaInfo[0].value}
                            </a>
                            <div className="sm:max-w-44 text-justify">
                                {metaInfo[2].value}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
