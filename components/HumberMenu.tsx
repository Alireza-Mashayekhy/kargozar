'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactEventHandler, useEffect, useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaRegNewspaper } from 'react-icons/fa6';
import { HiOutlineHome } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { MdOutlineDesignServices } from 'react-icons/md';
import { PiUsersThree } from 'react-icons/pi';

export default function HumberMenu({
    active,
    closeMenu,
}: {
    active: Boolean;
    closeMenu: ReactEventHandler;
}) {
    const [menuIndex, setMenuIndex] = useState<Number>(0);

    const pathname = usePathname();

    useEffect(() => {
        if (pathname) {
            if (pathname === '/') {
                setMenuIndex(0);
            } else if (
                pathname === '/blog' ||
                pathname === '/blog/[slug]' ||
                pathname === '/blog/[slug]/[slugDetail]'
            ) {
                setMenuIndex(1);
            } else if (
                pathname === '/service' ||
                pathname === '/service/[slug]'
            ) {
                setMenuIndex(2);
            } else if (pathname === '/about') {
                setMenuIndex(3);
            } else if (pathname === '/contact') {
                setMenuIndex(4);
            }
        }
    }, [pathname]);

    interface MenuType {
        id: Number;
        icon: React.ReactNode;
        name: string;
        link: string;
    }

    const menus: MenuType[] = [
        {
            id: 1,
            icon: (
                <HiOutlineHome
                    color={menuIndex === 0 ? 'black' : 'white'}
                    className="w-8 h-8"
                />
            ),
            name: 'صفحه اصلی',
            link: '/',
        },
        {
            id: 2,
            icon: (
                <FaRegNewspaper
                    color={menuIndex === 1 ? 'black' : 'white'}
                    className="w-8 h-8"
                />
            ),
            name: 'اخبارنامه',
            link: '/blog',
        },
        {
            id: 3,
            icon: (
                <MdOutlineDesignServices
                    color={menuIndex === 2 ? 'black' : 'white'}
                    className="w-8 h-8"
                />
            ),
            name: 'خدمات',
            link: '/service',
        },
        {
            id: 4,
            icon: (
                <PiUsersThree
                    color={menuIndex === 3 ? 'black' : 'white'}
                    className="w-8 h-8"
                />
            ),
            name: 'درباره ما',
            link: '/about',
        },
        {
            id: 5,
            icon: (
                <AiOutlinePhone
                    color={menuIndex === 4 ? 'black' : 'white'}
                    className="w-8 h-8"
                />
            ),
            name: 'تماس با ما',
            link: '/contact',
        },
    ];

    return (
        <div
            className={`w-screen h-screen bg-primary-1 xl:hidden flex flex-col gap-7 fixed -top-2.5 md:-top-5 -left-2.5 md:-left-10 backdrop-blur-[2px] z-50 px-6 py-12 transition-all ${
                active ? '' : 'translate-x-full'
            }`}
        >
            <IoClose
                onClick={(e: any) => {
                    closeMenu(e);
                }}
                className="absolute left-4 top-4 w-8 h-8 cursor-pointer"
                color="white"
            />
            <div className="flex flex-row-reverse gap-2.5 justify-around">
                <div className="flex flex-col justify-between items-center gap-2">
                    <Image
                        alt="Humber KGLogo"
                        title="KGLogo"
                        loading="eager"
                        src="/logo/KGLogo.png"
                        className="w-14"
                        width={1000}
                        height={1000}
                    />
                    <div className="text-2xl text-white font-bold">
                        کارگزار گمرک
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center gap-2">
                    <Image
                        alt="Humber logo"
                        title="logo"
                        loading="eager"
                        src="/logo/logo.png"
                        width={1000}
                        height={1000}
                        className="w-14"
                    />
                    <div className="text-2xl text-white font-bold">گمرک</div>
                </div>
            </div>
            <span className="h-1.5 w-full rounded-full bg-gradient-to-r from-primary-1 via-primary-2 to-primary-1" />
            {menus.map((el, index) => {
                return (
                    <Link
                        href={el.link}
                        key={`menu-${el.id}`}
                        className={`flex items-center gap-3 cursor-pointer px-3 py-2 rounded-xl ${
                            menuIndex === index
                                ? 'bg-gradient-to-r from-primary-1 to-primary-2 to-65%'
                                : 'text-white'
                        }`}
                    >
                        {el.icon}
                        <div className=" text-2xl font-bold">{el.name}</div>
                    </Link>
                );
            })}
        </div>
    );
}
