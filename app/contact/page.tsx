'use client';
import Avatar from '@/components/Avatar';
import Banner from '@/components/Banner';

import axios from 'axios';

import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Contact() {
    const [full_name, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const socials = [
        {
            icon: (
                <FaTelegramPlane
                    color="white"
                    className="w-5 h-5 sm:w-8 sm:h-8"
                />
            ),
        },
    ];

    const sendRequest = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!full_name || !phone || !email || !description) {
            toast.error('لطفا تمامی مقادیر را پر کنید');
        } else if (phone.length !== 11) {
            toast.error('شماره وارد شده اشتباه است');
        } else {
            setLoading(true);
            const data: any = {
                name: full_name,
                phone: phone,
                email: email,
                content: description,
            };
            await axios
                .post(`https://api.kargozargomrok.com/api/contact-us`, data)
                .then((res) => {
                    toast.success('درخواست شما با موفقیت ثبت شد.');
                    setLoading(false);
                    setFullName('');
                    setPhone('');
                    setDescription('');
                    setEmail('');
                })
                .catch((err) => {
                    // toast.error(err);
                    console.log(err);
                    setLoading(false);
                });
        }
    };
    return (
        <div>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <title>تماس با کارگزار گمرک</title>
            <meta
                name="description"
                content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کاالی عزیز را بر طرف سازد.  "
            />
            <link rel="canonical" href={`https://kargozargomrok.com/contact`} />
            <div className="flex flex-col gap-16 px-2.5 md:px-10 py-28 md:py-44">
                <Banner
                    data={['/contact/banner.png']}
                    mobileData={['/contact/mobileBanner.jpg']}
                />
                <div className="flex flex-col-reverse lg:flex-row gap-10">
                    <div className="flex flex-col justify-between shadow-md rounded-2xl bg-secondary p-8 w-full lg:w-3/5 gap-6">
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="flex flex-col gap-3">
                                    <h3 className="font-bold text-lg sm:text-2xl text-primary-1">
                                        شماره تماس 1:
                                    </h3>
                                    <div
                                        className="text-sm sm:text-lg pr-4"
                                        style={{ direction: 'ltr' }}
                                    >
                                        021_28427180
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="flex flex-col gap-3">
                                    <h3 className="font-bold text-lg sm:text-2xl text-primary-1">
                                        شماره تماس 2:
                                    </h3>
                                    <div
                                        className="text-sm sm:text-lg pr-4"
                                        style={{ direction: 'ltr' }}
                                    >
                                        09128938490
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold text-lg sm:text-2xl text-primary-1">
                                    آدرس:
                                </h3>
                                <div className="text-sm sm:text-lg pr-4">
                                    خیـــابـــان آزادی، خیـــابـــان حبیب الله،
                                    خیابان قاسمی،جنب جهاد دانشگاهی شریف، مرکز
                                    نوآوری باکس
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold text-lg sm:text-2xl text-primary-1">
                                    راه های ارتباطی:
                                </h3>
                                <div className="flex">
                                    {socials.map((el, index) => {
                                        return (
                                            <div
                                                key={`icon-${index}`}
                                                className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-md bg-primary-1 cursor-pointer"
                                            >
                                                {el.icon}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between shadow-md rounded-2xl bg-secondary p-8 w-full lg:w-2/5 gap-6">
                        <Avatar
                            image="/about/user.jpg"
                            name="محمدامین قنبری"
                            vertical
                        />
                        <p className="leading-loose text-justify text-xs sm:text-sm">
                            با سالم بنده کارگزار رسمی گمرک ایران هستم و همچنین
                            مدیریت مجموعه کارگزار گمرک و این وب سایت را برعهده
                            دارم و تجربه بنده بیش از 01 سال در زمینه بازرگانی و
                            فعالیت ترخیص انواع کاالهای وارداتی و صادراتی می باشد
                            و میتوانم با همراه تیم با تجربه خود کاالی شما
                            بازرگان عزیر و گرامی را از تمامی گمرکات کشور از جمله
                            گمرکات مستقر در مناطق آزاد تجاری و ویژه اقتصادی با
                            انجام تمامی مراحل تشریفات گمرکی رویه های
                            مربوط)واردات و صادرات( در کوتاهترین زمان و با کمترین
                            هزینه های گمرکی ممکن ترخیص نمایم و همچنین در صورت
                            ارجاع کاالی شما به کمیسیون های اختالفات گمرکی به
                            نمایندگی از شما در کمیسیون ها شرکت می کنم.
                        </p>
                    </div>
                </div>
                <form onSubmit={sendRequest} className="flex flex-col gap-8">
                    <h1 className="font-bold text-xl sm:text-3xl text-primary-1">
                        با کارگزار گمرک در تماس باشید
                    </h1>
                    <div className="flex flex-col md:flex-row gap-5 sm:gap-12">
                        <div className="flex flex-col w-full md:w-1/2 gap-5 sm:gap-12">
                            <input
                                type="text"
                                className="border rounded-xl px-4 py-3 sm:px-7 sm:py-4 w-full focus:border-primary-1 text-sm sm:text-base"
                                placeholder="نام و نام خانوادگی"
                                value={full_name}
                                onChange={(e: any) =>
                                    setFullName(e.target.value)
                                }
                            />
                            <input
                                type="text"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                className="border rounded-xl px-4 py-3 sm:px-7 sm:py-4 w-full focus:border-primary-1 text-sm sm:text-base"
                                placeholder="ایمیل"
                            />
                            <input
                                type="text"
                                value={phone}
                                onChange={(e: any) => setPhone(e.target.value)}
                                inputMode="numeric"
                                className="border rounded-xl px-4 py-3 sm:px-7 sm:py-4 w-full focus:border-primary-1 text-sm sm:text-base"
                                placeholder="شماره تماس"
                            />
                        </div>
                        <textarea
                            value={description}
                            onChange={(e: any) =>
                                setDescription(e.target.value)
                            }
                            placeholder="توضیحات"
                            className="border rounded-xl p-3 sm:p-5 w-full md:w-1/2 focus:border-primary-1 text-sm sm:text-base resize-none min-h-32"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className=" sm:text-xl px-8 py-2 text-white bg-primary-1 rounded-lg"
                        >
                            {(loading && (
                                <svg
                                    aria-hidden="true"
                                    role="status"
                                    className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="#1C64F2"
                                    ></path>
                                </svg>
                            )) || <span>ارسال پیام</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
