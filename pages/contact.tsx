import Avatar from '@/components/Avatar';
import Banner from '@/components/Banner';
import Layout from '@/components/layout';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Contact() {
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
    return (
        <Layout>
            <div className="flex flex-col gap-16 px-2.5 md:px-10 py-28 md:py-44">
                <Banner data={['/contact/banner.png']} />
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
                <div className="flex flex-col gap-8">
                    <h2 className="font-bold text-xl sm:text-3xl text-primary-1">
                        ثبت سفارش
                    </h2>
                    <div className="flex flex-col md:flex-row gap-5 sm:gap-12">
                        <div className="flex flex-col w-full md:w-1/2 gap-5 sm:gap-12">
                            <input
                                type="text"
                                className="border rounded-xl px-4 py-3 sm:px-7 sm:py-4 w-full focus:border-primary-1 text-sm sm:text-base"
                                placeholder="نام و نام خانوادگی"
                            />
                            <input
                                type="text"
                                className="border rounded-xl px-4 py-3 sm:px-7 sm:py-4 w-full focus:border-primary-1 text-sm sm:text-base"
                                placeholder="ایمیل"
                            />
                            <input
                                type="text"
                                className="border rounded-xl px-4 py-3 sm:px-7 sm:py-4 w-full focus:border-primary-1 text-sm sm:text-base"
                                placeholder="شماره تماس"
                            />
                        </div>
                        <textarea
                            placeholder="توضیحات"
                            className="border rounded-xl p-3 sm:p-5 w-full md:w-1/2 focus:border-primary-1 text-sm sm:text-base resize-none min-h-32"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className=" sm:text-xl px-8 py-2 text-white bg-primary-1 rounded-lg">
                            ارسال پیام
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
