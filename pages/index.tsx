'use client';
import Banner from '@/components/Banner';
import BannerSection from '@/components/BannerSection';
import BlogSection from '@/components/Blog/Section';
import Layout from '@/components/layout';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const banners = [
        require('@/public/landing/banner_1.jpg'),
        require('@/public/landing/banner_2.jpg'),
    ];

    const mobileBanners = [
        require('@/public/landing/mobileBanner_1.jpg'),
        require('@/public/landing/mobileBanner_2.jpg'),
    ];

    interface servicesCategoriesType {
        id: number;
        image: string;
        title: string;
        link: string;
    }
    useEffect(() => {
        axios.get(`https://api.kargozargomrok.com/api/feed`).then((res) => {
            setBlogs(res.data.data);
            setLoading(false);
        });
    }, []);

    const servicesCategories: servicesCategoriesType[] = [
        {
            id: 1,
            image: require('@/public/landing/tarkhisService.png'),
            title: 'ترخیص کالا',
            link: '/service/clearance',
        },
        {
            id: 2,
            image: require('@/public/landing/komesionService.png'),
            title: 'کمیسیون اختلافات گمرک',
            link: '/service/commission',
        },
        {
            id: 3,
            image: require('@/public/landing/moshavereService.png'),
            title: 'مشاوره بازرگانی',
            link: '/service/counseling',
        },
    ];

    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>کارگزار گمرک</title>
                <meta
                    name="description"
                    content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کاالی عزیز را بر طرف سازد.  "
                />
                <link rel="canonical" href="https://kargozargomrok.com" />
            </Head>
            <div className="flex flex-col gap-10 md:gap-16">
                <div className="flex flex-col gap-16 px-2.5 md:px-10 pt-28 md:pt-44">
                    <h1 className="hidden">
                        مجموعه کارگزار گمرک با مدیریت مهندس محمدامین قنبری
                    </h1>
                    <div>
                        <Banner data={banners} mobileData={mobileBanners} />
                        <div className="w-full sm:w-11/12 md:w-4/5 mt-5 sm:mt-0 bg-white py-3 sm:py-6 rounded-xl sm:rounded-2xl shadow-md mx-auto sm:-top-5 md:-top-12 relative z-10 flex items-center justify-around">
                            {servicesCategories.map((item) => {
                                return (
                                    <Link
                                        href={item.link}
                                        key={item.id}
                                        className="flex flex-col items-center gap-1.5 cursor-pointer"
                                    >
                                        <Image
                                            alt={item.title}
                                            title={item.title}
                                            src={item.image}
                                            loading="eager"
                                            className="w-10 sm:w-16"
                                        />
                                        <div className="text-sm sm:text-xl text-center">
                                            {item.title}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <BannerSection />
                </div>
                <BlogSection
                    title="مجله گمرکی"
                    data={blogs}
                    loading={loading}
                />
            </div>
        </Layout>
    );
}
