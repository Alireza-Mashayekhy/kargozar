'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';
import style from '@/assets/styles/skeleton.module.css';

export default function BlogCard(props: any) {
    if (props.isSkeleton) {
        return (
            <div className="bg-white rounded-2xl shadow-md">
                <div
                    className={`${style.skeleton} w-full aspect-video rounded-2xl`}
                ></div>
                <div className="flex flex-col gap-2.5 p-5">
                    <h4
                        className={`${style.skeleton} w-full h-[20px] rounded-full`}
                    />
                    <div className="flex flex-col gap-1">
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
                    </div>
                    <h4
                        className={`${style.skeleton} w-full h-[20px] rounded-full`}
                    />
                </div>
            </div>
        );
    }
    return (
        <div className="bg-white rounded-2xl border transition-all border-[#00000020] hover:shadow-md">
            <Image
                alt={props.title}
                className="w-full rounded-2xl"
                width={1000}
                height={1000}
                src={props.image || require('@/public/placeholders/image.png')}
            />
            <div className="flex flex-col gap-2.5 p-5">
                <h4 className="font-bold text-xl sm:text-2xl">{props.title}</h4>
                <p className="text-justify leading-snug text-sm sm:text-base">
                    {props.description}
                </p>
                <div className="flex justify-end">
                    <Link
                        href={props.slug ? props.slug : '/'}
                        className="flex items-center text-primary-1"
                    >
                        <span>مشاهده</span>
                        <FaChevronLeft />
                    </Link>
                </div>
            </div>
        </div>
    );
}
