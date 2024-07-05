'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from './Card';

export default function BlogSection(props: any) {
    const sliderRef = useRef<any>(null);

    const [sliderIndex, setSliderIndex] = useState(0);
    const [slidePerView, setSlidePerView] = useState(4);

    const checkWidth = () => {
        if (window.innerWidth > 1280) {
            setSlidePerView(4);
        } else if (window.innerWidth > 1024) {
            setSlidePerView(3);
        } else if (window.innerWidth > 768) {
            setSlidePerView(2);
        } else {
            setSlidePerView(1);
        }
    };

    useEffect(() => {
        checkWidth();
        window.addEventListener('resize', checkWidth);
    }, []);

    interface blogType {
        title: string;
        images: Array<string>;
        slug: string;
        upper_content: string;
        type: string;
    }

    return (
        <div className="flex flex-col gap-4 sm:gap-8 overflow-hidden">
            <div className="flex items-center justify-between px-2.5 sm:px-10">
                <h3 className="text-primary-1 font-bold text-xl sm:text-3xl">
                    {props?.title}
                </h3>
                <Link
                    href="/blog"
                    className="bg-primary-1 px-4 py-1.5 sm:px-8 sm:py-3 text-white rounded-md sm:rounded-xl font-bold text-xs sm:text-base"
                >
                    ورود به مجله
                </Link>
            </div>
            <div className="bg-primary-2 pt-7 sm:pt-16 pb-28">
                <Swiper
                    onSlideChange={(e: any) => setSliderIndex(e.activeIndex)}
                    ref={sliderRef}
                    className="w-full relative !px-2.5 sm:!px-10 !overflow-visible"
                    spaceBetween={48}
                    slidesPerView={slidePerView}
                >
                    {props.loading &&
                        [...new Array(15)].map(
                            (item: blogType, index: Number) => {
                                return (
                                    <SwiperSlide
                                        key={`blog-${index}`}
                                        className=" !h-auto"
                                    >
                                        <BlogCard isSkeleton />
                                    </SwiperSlide>
                                );
                            }
                        )}
                    {!props.loading &&
                        props.data?.map((item: blogType, index: Number) => {
                            return (
                                <SwiperSlide
                                    key={`blog-${index}`}
                                    className=" !h-auto"
                                >
                                    <BlogCard
                                        title={item?.title}
                                        image={item?.images[0]}
                                        slug={`/blog/${item?.type}s/${item?.slug}`}
                                        description={item?.upper_content}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    <div className="flex items-center absolute left-1/2 -translate-x-1/2 gap-2 mt-10">
                        {props.data?.map((item: any, index: number) => {
                            if (index < props.data.length - slidePerView + 1) {
                                return (
                                    <span
                                        key={`dot-${index}`}
                                        className={` h-2.5 rounded-full transition-all cursor-pointer ${
                                            sliderIndex === index
                                                ? 'bg-primary-1 w-5'
                                                : 'bg-secondary w-2.5'
                                        }`}
                                        onClick={() => {
                                            sliderRef.current.swiper.slideTo(
                                                index
                                            );
                                        }}
                                    />
                                );
                            }
                        })}
                    </div>
                </Swiper>
            </div>
        </div>
    );
}
