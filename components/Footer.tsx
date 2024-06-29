'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex flex-col items-center gap-12 rounded-t-3xl -mt-5 z-10  px-2.5 md:px-5 relative bg-gradient-to-t from-primary-1 to-black py-16 pb-20 sm:pb-36 xl:py-16">
            <div className="flex gap-10 sm:gap-24">
                <div className="flex items-center gap-2">
                    <Image
                        alt="KGLogo"
                        src={require('@/public/logo/KGLogo.png')}
                        className="w-10 sm:w-14"
                    />
                    <div className="text-lg sm:text-2xl text-white font-bold">
                        کارگزار گمرک
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        alt="logo"
                        src={require('@/public/logo/logo.png')}
                        className="w-10 sm:w-14"
                    />
                    <div className="text-lg sm:text-2xl text-white font-bold">
                        گمرک
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between sm:justify-center gap-10 sm:gap-28 w-full text-white">
                <div className="flex flex-col gap-5 max-w-96">
                    <div className="font-bold text-xl sm:text-3xl">
                        درباره کارگزار گمرک
                    </div>
                    <p className="text-justify text-sm sm:text-base">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد، تا با نرم{' '}
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-xl sm:text-3xl">
                        کارگزار گمرک
                    </div>
                    <div className="flex flex-col gap-3  text-sm sm:text-bas">
                        <Link href="/about">درباره ما</Link>
                        <Link href="/contact">تماس با ما</Link>
                        <Link href="/order">ثبت سفارش</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-xl sm:text-3xl">خدمات</div>
                    <div className="flex flex-col gap-3  text-sm sm:text-bas">
                        <Link href="/">خدمات</Link>
                        <Link href="/">خدمات</Link>
                        <Link href="/">خدمات</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-xl sm:text-3xl">
                        مجله گمرکی
                    </div>
                    <div className="flex flex-col gap-3  text-sm sm:text-bas">
                        <Link href="/">مجله </Link>
                        <Link href="/">مجله </Link>
                        <Link href="/">مجله </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full sm:w-fit">
                    <div className="font-bold text-xl sm:text-3xl">
                        راه های ارتباطی
                    </div>
                    <div className="flex gap-3 justify-between sm:justify-normal">
                        <div className="flex flex-col gap-3 text-sm sm:text-bas">
                            <div className="whitespace-nowrap">ایمیل:</div>
                            <div className="whitespace-nowrap">شماره تماس:</div>
                            <div className="whitespace-nowrap">آدرس:</div>
                        </div>
                        <div className="flex flex-col gap-3 text-sm sm:text-bas">
                            <div className="text-left">gomrok@gmail.com</div>
                            <div className="text-left">09999999999</div>
                            <div className="sm:max-w-44 text-justify">
                                لورم ایپسوم متن ساختگی با تولید سادگی
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
