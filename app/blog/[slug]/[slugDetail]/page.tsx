'use client';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import style from '@/assets/styles/skeleton.module.css';
import Banner from '@/components/Banner';
import Avatar from '@/components/Avatar';
import { FiDownload } from 'react-icons/fi';
import Image from 'next/image';
import Subscription from '@/components/Blog/Subscription';
import BlogSection from '@/components/Blog/Section';
import { useParams } from 'next/navigation';

export default function BlogDetail() {
    const fileRef = useRef<any>();

    interface agentType {
        image: string;
        name: string;
        description: string;
    }
    interface blogDataType {
        content: string;
        images: Array<string>;
        slug: string;
        title: string;
        ulid: string;
        file: string;
        upper_content: string;
        lower_content: string;
        middle_image: string;
        related: Array<any>;
        agent: agentType;
        created_at: string;
    }

    const [isLoading, setLoading] = useState(true);
    const [blogData, setData] = useState<blogDataType>({
        content: '',
        images: [],
        slug: '',
        title: '',
        ulid: '',
        file: '',
        upper_content: '',
        lower_content: '',
        middle_image: '',
        related: [],
        agent: {
            image: '',
            name: '',
            description: '',
        },
        created_at: '',
    });

    const params = useParams();

    useEffect(() => {
        if (params.slugDetail) {
            setLoading(true);
            axios
                .get(
                    `https://api.kargozargomrok.com/api/${params.slug}/${params.slugDetail}`
                )
                .then((res) => {
                    setData(res.data.data);
                    setLoading(false);
                });
        }
    }, [params.slug, params.slugDetail]);

    if (isLoading) {
        return (
            <div>
                <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                    <div
                        className={`${style.skeleton} w-full aspect-[3] !rounded-3xl`}
                    ></div>
                    <div
                        className={`${style.skeleton} w-full aspect-[3] !rounded-3xl`}
                    ></div>
                    <div className="flex flex-col gap-3">
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />{' '}
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />{' '}
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />{' '}
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />{' '}
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
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
            <title>اخبرنامه گمرکی - {blogData.title}</title>
            <meta
                name="description"
                content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کالای عزیز را بر طرف سازد.  "
            />
            <link
                rel="canonical"
                href={`https://kargozargomrok.com/blog/${params.slug}/${params.slugDetail}`}
            />
            <div className="flex flex-col gap-10 md:gap-16">
                <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 pt-28 md:pt-44 mb-10">
                    <Banner
                        data={blogData.images}
                        mobileData={blogData.images}
                    />
                    <div className="flex flex-col gap-5 rounded-2xl shadow-md bg-secondary py-3 sm:py-5 px-5 sm:px-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl sm:text-3xl font-bold">
                                {blogData.title}
                            </h1>
                            <div className="text-sm sm:text-base">
                                {new Date(
                                    Date.parse(blogData.created_at)
                                ).toLocaleDateString('Fa-IR', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <Avatar
                                image={blogData.agent.image}
                                name={blogData.agent.name}
                            />
                            {blogData.file && (
                                <button
                                    onClick={() => {
                                        fileRef.current.src = blogData.file;
                                    }}
                                    className="flex items-center gap-2 text-white bg-primary-1 rounded-lg py-2 px-4 text-sm sm:text-base"
                                >
                                    دانلود بخشنامه <FiDownload color="white" />
                                </button>
                            )}
                            <iframe ref={fileRef} className="hidden"></iframe>
                        </div>
                        <p className="text-justify text-sm sm:text-base">
                            {blogData.agent.description}
                        </p>
                    </div>
                    <p className="text-justify text-sm sm:text-lg">
                        {blogData.upper_content}
                    </p>
                    <Image
                        className="rounded-3xl shadow-md w-full"
                        alt="blog image"
                        title="blog image"
                        src={blogData.middle_image}
                        width={500}
                        height={500}
                    />
                    <p className="text-justify text-sm sm:text-lg">
                        {blogData.lower_content}
                    </p>
                    <Subscription />
                </div>
                {blogData.related.length && (
                    <BlogSection
                        title="مجله های  گمرکی مرتبط"
                        data={blogData.related}
                    />
                )}
            </div>
        </div>
    );
}
