'use client';

import Image from 'next/image';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaRegNewspaper } from 'react-icons/fa6';
import { HiOutlineHome } from 'react-icons/hi';
import { IoMenu } from 'react-icons/io5';
import { MdOutlineDesignServices } from 'react-icons/md';
import { PiUsersThree } from 'react-icons/pi';
import HumberMenu from './HumberMenu';
import { useState } from 'react';

export default function Header() {
    interface MenuType {
        id: Number;
        icon: React.ReactNode;
        name: String;
    }

    const menus: MenuType[] = [
        {
            id: 1,
            icon: <HiOutlineHome color="white" className="w-5 h-5" />,
            name: 'صفحه اصلی',
        },
        {
            id: 2,
            icon: <FaRegNewspaper color="white" className="w-5 h-5" />,
            name: 'اخبارنامه',
        },
        {
            id: 3,
            icon: <MdOutlineDesignServices color="white" className="w-5 h-5" />,
            name: 'خدمات',
        },
        {
            id: 4,
            icon: <PiUsersThree color="white" className="w-5 h-5" />,
            name: 'درباره ما',
        },
        {
            id: 5,
            icon: <AiOutlinePhone color="white" className="w-5 h-5" />,
            name: 'تماس با ما',
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

    return (
        <div className="w-[calc(100%-20px)] md:w-[calc(100%-80px)] rounded-2xl z-50 bg-header backdrop-blur-md fixed top-2.5 md:top-5 left-2.5 md:left-10 flex justify-between items-center p-5 md:px-8 md:py-5">
            <IoMenu
                onClick={() => {
                    setIsMenuOpen(true);
                }}
                className="xl:hidden w-8 h-8 cursor-pointer"
                color="white"
            />
            <div className="flex gap-11 items-center">
                <div className="flex flex-row-reverse xl:flex-col gap-2.5">
                    <div className="flex items-center gap-2">
                        <Image
                            alt="KGLogo"
                            src={require('@/public/logo/KGLogo.png')}
                            className="w-5 md:w-7"
                        />
                        <div className="md:text-lg text-white">
                            کارگزار گمرک
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            alt="logo"
                            src={require('@/public/logo/logo.png')}
                            className="w-5 md:w-7"
                        />
                        <div className="md:text-lg text-white">گمرک</div>
                    </div>
                </div>
                <div className="hidden xl:flex items-center gap-5">
                    {menus.map((el) => {
                        return (
                            <div
                                key={`menu-${el.id}`}
                                className="flex items-center gap-1 cursor-pointer"
                            >
                                {el.icon}
                                <div className="text-white text-lg">
                                    {el.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="hidden xl:flex items-center gap-2">
                <button className="text-primary-1 px-5 py-1.5 rounded-lg bg-secondary font-semibold">
                    ثبت سفارش
                </button>
                <button className="text-primary-1 px-5 py-1.5 rounded-lg bg-secondary">
                    09999999999
                </button>
                <button className="text-primary-1 px-5 py-1.5 rounded-lg bg-secondary">
                    09999999999
                </button>
            </div>
            <HumberMenu
                active={isMenuOpen}
                closeMenu={() => {
                    setIsMenuOpen(false);
                }}
            />
        </div>
    );
}
