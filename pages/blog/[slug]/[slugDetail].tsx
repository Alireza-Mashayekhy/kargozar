'use client';
import Layout from '@/components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from '@/assets/styles/skeleton.module.css';
import Banner from '@/components/Banner';
import Avatar from '@/components/Avatar';

export default function BlogDetail() {
    interface blogDataType {
        content: string;
        image: string;
        slug: string;
        title: string;
        ulid: string;
    }

    const [isLoading, setLoading] = useState(true);
    const [blogData, setData] = useState<blogDataType>({
        content: '',
        image: '',
        slug: '',
        title: '',
        ulid: '',
    });

    const router = useRouter();

    useEffect(() => {
        if (router.query.slugDetail) {
            console.log(router.query.slugDetail);
            setLoading(true);
            axios
                .get(
                    `https://api.kargozargomrok.com/api/${router.query.slug}/${router.query.slugDetail}`
                )
                .then((res) => {
                    setData(res.data.data);
                    setLoading(false);
                });
        }
    }, [router.query.slug, router.query.slugDetail]);

    if (isLoading) {
        return (
            <Layout>
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
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                <Banner data={[blogData.image]} />
                <div className="flex flex-col gap-5 rounded-2xl shadow-md bg-secondary py-5 px-8">
                    <Avatar image="/placeholders/avatar.png" name="test" />
                </div>
            </div>
        </Layout>
    );
}
