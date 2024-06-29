'use client';
import Banner from '@/components/Banner';
import BlogCard from '@/components/Blog/Card';
import Layout from '@/components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from '@/assets/styles/skeleton.module.css';
import { FaChevronDown } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import Link from 'next/link';
import Pagination from '@/components/Pagination';
import { useDebouncedCallback } from 'use-debounce';

export default function Category() {
    const [blogData, setData] = useState<blogDataType[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isShowCategories, setCategories] = useState(false);
    const [searchedText, setSearchText] = useState('');

    const router = useRouter();

    const search = useDebouncedCallback(
        // function
        (value) => {
            setLoading(true);
            setSearchText(value);
        },
        // delay in ms
        1000
    );

    interface blogDataType {
        content: string;
        image: string;
        slug: string;
        title: string;
        ulid: string;
    }

    useEffect(() => {
        if (router.query.slug) {
            setLoading(true);
            axios
                .get(
                    `https://api.kargozargomrok.com/api/${
                        router.query.slug
                    }?page=${router.query.page || 1}&q=${searchedText}`
                )
                .then((res) => {
                    setData(res.data.data);
                    setLoading(false);
                });
        }
    }, [router.query.page, router.query.slug, searchedText]);

    if (isLoading) {
        return (
            <Layout>
                <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                    <div
                        className={`${style.skeleton} w-full aspect-[3] rounded-3xl`}
                    ></div>
                    <div className="flex flex-wrap gap-5 justify-between items-center relative">
                        <div
                            onClick={() => setCategories(!isShowCategories)}
                            className="relative cursor-pointer w-full lg:max-w-96 flex items-center justify-between border rounded-md p-3 z-20"
                        >
                            <div>
                                دسته بندی:
                                {router.query.slug === 'circular_letters'
                                    ? 'بخشنامه گمرکی'
                                    : router.query.slug === 'news_letters'
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
                                onInput={(e) => search(e.target.value)}
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
            </Layout>
        );
    }
    return (
        <Layout>
            <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                <Banner />
                <div className="flex flex-wrap gap-5 justify-between items-center relative">
                    <div
                        onClick={() => setCategories(!isShowCategories)}
                        className="relative cursor-pointer w-full lg:max-w-96 flex items-center justify-between border rounded-md p-3 z-20"
                    >
                        <div>
                            دسته بندی:
                            {router.query.slug === 'circular_letters'
                                ? 'بخشنامه گمرکی'
                                : router.query.slug === 'news_letters'
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
                            onInput={(e) => search(e.target.value)}
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
                            image={el.image}
                            slug={`/blog/${router.query.slug}/${el.slug}`}
                            description={el.content}
                        />
                    ))}
                </div>
                <Pagination length={blogData.length / 12} />
            </div>
        </Layout>
    );
}
