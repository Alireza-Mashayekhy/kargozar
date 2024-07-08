'use client';
import Banner from '@/components/Banner';
import BlogCard from '@/components/Blog/Card';

import axios from 'axios';
import { useEffect, useState } from 'react';
import style from '@/assets/styles/skeleton.module.css';
import { FaChevronDown } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import Link from 'next/link';
import Pagination from '@/components/Pagination';
import { useDebouncedCallback } from 'use-debounce';
import { useParams } from 'next/navigation';

export default function Category() {
    const [blogData, setData] = useState<blogDataType[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [isShowCategories, setCategories] = useState(false);
    const [searchedText, setSearchText] = useState('');

    const params = useParams();

    const search = useDebouncedCallback((value) => {
        setLoading(true);
        setSearchText(value);
    }, 1000);

    interface blogDataType {
        content: string;
        images: Array<string>;
        slug: string;
        title: string;
        ulid: string;
        upper_content: string;
    }

    useEffect(() => {
        if (params.slug) {
            setLoading(true);
            axios
                .get(
                    `https://api.kargozargomrok.com/api/${params.slug}?page=${
                        params.page || 1
                    }&q=${searchedText}`
                )
                .then((res) => {
                    setData(res.data.data);
                    setTotal(res.data.meta.total);
                    setLoading(false);
                });
        }
    }, [params.page, params.slug, searchedText]);

    if (isLoading) {
        return (
            <div>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>
                    اخبرنامه گمرکی -{' '}
                    {params.slug === 'circular_letters'
                        ? 'بخشنامه گمرکی'
                        : params.slug === 'news_letters'
                        ? 'خبرنامه گمرکی'
                        : 'مقالات گمرکی'}
                </title>
                <meta
                    name="description"
                    content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کالای عزیز را بر طرف سازد.  "
                />
                <link
                    rel="canonical"
                    href={`https://kargozargomrok.com/blog/${params.slug}`}
                />
                <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                    <Banner
                        data={[
                            params.slug === 'circular_letters'
                                ? '/blog/bakhsnameBanner.jpg'
                                : params.slug === 'news_letters'
                                ? '/blog/khabarnameBanner.jpg'
                                : '/blog/maghalatBanner.jpg',
                        ]}
                        mobileData={[
                            params.slug === 'circular_letters'
                                ? '/blog/bakhshnameMobileBanner.jpg'
                                : params.slug === 'news_letters'
                                ? '/blog/khabarnameMobileBanner.jpg'
                                : '/blog/maghalatMobileBanner.jpg',
                        ]}
                    />
                    <div className="flex flex-wrap gap-5 justify-between items-center relative">
                        <div
                            onClick={() => setCategories(!isShowCategories)}
                            className="relative cursor-pointer w-full lg:max-w-96 flex items-center justify-between border rounded-md p-3 z-20"
                        >
                            <div>
                                دسته بندی:
                                {params.slug === 'circular_letters'
                                    ? 'بخشنامه گمرکی'
                                    : params.slug === 'news_letters'
                                    ? 'خبرنامه گمرکی'
                                    : 'مقالات گمرکی'}
                            </div>
                            <FaChevronDown />
                        </div>

                        {isShowCategories && (
                            <div className="absolute right-0 top-14 bg-white shadow rounded-2xl flex flex-col gap-2 w-96 overflow-hidden z-20">
                                <Link
                                    className="p-2 hover:bg-secondary"
                                    href="/blog/circular_letters"
                                >
                                    بخشنامه گمرکی
                                </Link>
                                <Link
                                    className="p-2 hover:bg-secondary"
                                    href="/blog/news_letters"
                                >
                                    خبرنامه گمرکی
                                </Link>
                                <Link
                                    className="p-2 hover:bg-secondary"
                                    href="/blog/posts"
                                >
                                    مقالات گمرکی
                                </Link>
                            </div>
                        )}

                        {isShowCategories && (
                            <div
                                onClick={() => {
                                    setCategories(false);
                                }}
                                className=" fixed left-0 top-0 z-10 inline-block w-screen h-screen"
                            />
                        )}

                        <div className="relative w-full lg:max-w-96 flex items-center justify-between border rounded-md">
                            <input
                                type="text"
                                placeholder="جستجو"
                                onInput={(e: any) => search(e.target.value)}
                                className="p-3 rounded-md outline-none w-full"
                            />
                            <IoMdSearch className="w-7 h-7 ml-3" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                        {[...new Array(12)].map((el, index) => (
                            <BlogCard key={index} isSkeleton />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <title>
                اخبرنامه گمرکی -{' '}
                {params.slug === 'circular_letters'
                    ? 'بخشنامه گمرکی'
                    : params.slug === 'news_letters'
                    ? 'خبرنامه گمرکی'
                    : 'مقالات گمرکی'}
            </title>
            <meta
                name="description"
                content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کالای عزیز را بر طرف سازد.  "
            />
            <link
                rel="canonical"
                href={`https://kargozargomrok.com/blog/${params.slug}`}
            />
            <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                <Banner
                    data={[
                        params.slug === 'circular_letters'
                            ? '/blog/bakhsnameBanner.jpg'
                            : params.slug === 'news_letters'
                            ? '/blog/khabarnameBanner.jpg'
                            : '/blog/maghalatBanner.jpg',
                    ]}
                    mobileData={[
                        params.slug === 'circular_letters'
                            ? '/blog/bakhshnameMobileBanner.jpg'
                            : params.slug === 'news_letters'
                            ? '/blog/khabarnameMobileBanner.jpg'
                            : '/blog/maghalatMobileBanner.jpg',
                    ]}
                />
                <div className="flex flex-wrap gap-5 justify-between items-center relative">
                    <div
                        onClick={() => setCategories(!isShowCategories)}
                        className="relative cursor-pointer w-full lg:max-w-96 flex items-center justify-between border rounded-md p-3 z-20"
                    >
                        <h1>
                            دسته بندی:
                            {params.slug === 'circular_letters'
                                ? 'بخشنامه گمرکی'
                                : params.slug === 'news_letters'
                                ? 'خبرنامه گمرکی'
                                : 'مقالات گمرکی'}
                        </h1>
                        <FaChevronDown />
                    </div>

                    {isShowCategories && (
                        <div className="absolute right-0 top-14 bg-white shadow rounded-2xl flex flex-col gap-2 w-96 overflow-hidden z-20">
                            <Link
                                className="p-2 hover:bg-secondary"
                                href="/blog/circular_letters"
                            >
                                بخشنامه گمرکی
                            </Link>
                            <Link
                                className="p-2 hover:bg-secondary"
                                href="/blog/news_letters"
                            >
                                خبرنامه گمرکی
                            </Link>
                            <Link
                                className="p-2 hover:bg-secondary"
                                href="/blog/posts"
                            >
                                مقالات گمرکی
                            </Link>
                        </div>
                    )}

                    {isShowCategories && (
                        <div
                            onClick={() => {
                                setCategories(false);
                            }}
                            className=" fixed left-0 top-0 z-10 inline-block w-screen h-screen"
                        />
                    )}

                    <div className="relative w-full lg:max-w-96 flex items-center justify-between border rounded-md">
                        <input
                            type="text"
                            placeholder="جستجو"
                            onInput={(e: any) => search(e.target.value)}
                            className="p-3 rounded-md outline-none w-full"
                        />
                        <IoMdSearch className="w-7 h-7 ml-3" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                    {blogData.map((el) => (
                        <BlogCard
                            key={el.ulid}
                            title={el.title}
                            image={el.images[0]}
                            slug={`/blog/${params.slug}/${el.slug}`}
                            description={el.upper_content}
                        />
                    ))}
                </div>
                <Pagination length={total / 12} />
            </div>
        </div>
    );
}
