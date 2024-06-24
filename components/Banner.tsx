'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useCallback, useRef, useState } from 'react';

export default function Banner(props: any) {
    const sliderRef = useRef<any>(null);

    const [sliderIndex, setSliderIndex] = useState(0);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    if (!props.data?.length) {
        return (
            <Image
                className="rounded-3xl shadow-md w-full"
                alt="default"
                src={require('@/public/placeholders/image.png')}
            />
        );
    } else if (props.data.length === 1) {
        return (
            <Image
                className="rounded-3xl shadow-md w-full"
                alt={props.data[0]}
                src={props.data[0]}
            />
        );
    } else {
        return (
            <Swiper
                onSlideChange={(e) => setSliderIndex(e.activeIndex)}
                ref={sliderRef}
                className="w-full relative"
                spaceBetween={50}
            >
                {props.data.map((img: string, index: Number) => {
                    return (
                        <SwiperSlide key={`img-${index}`}>
                            <Image
                                alt={img}
                                src={img}
                                className="h-full rounded-xl sm:rounded-3xl"
                            />
                        </SwiperSlide>
                    );
                })}
                <button
                    onClick={handlePrev}
                    className={`absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-md bg-primary-1 w-6 sm:w-11 h-6 sm:h-11 ${
                        sliderIndex === 0 ? 'opacity-50 cursor-default' : ''
                    }`}
                >
                    <FaChevronRight
                        className="w-4 sm:w-6 h-4 sm:h-6"
                        color="white"
                    />
                </button>
                <button
                    onClick={handleNext}
                    className={`absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-md bg-primary-1 w-6 sm:w-11 h-6 sm:h-11 ${
                        sliderIndex === props.data.length - 1
                            ? 'opacity-50 cursor-default'
                            : ''
                    }`}
                >
                    <FaChevronLeft
                        className="w-4 sm:w-6 h-4 sm:h-6"
                        color="white"
                    />
                </button>
                <div className="flex items-center absolute bottom-2 sm:bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-10 gap-1 sm:gap-2 bg-primary-2 py-1.5 px-2 sm:py-2 sm:px-3 rounded-full shadow-md">
                    {props.data.map((item: any, index: number) => {
                        return (
                            <span
                                key={`dot-${index}`}
                                className={`h-1.5 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                                    sliderIndex === index
                                        ? 'bg-primary-1 w-3 sm:w-5'
                                        : 'bg-secondary w-1.5 sm:w-2.5'
                                }`}
                                onClick={() => {
                                    sliderRef.current.swiper.slideTo(index);
                                }}
                            />
                        );
                    })}
                </div>
            </Swiper>
        );
    }
}
