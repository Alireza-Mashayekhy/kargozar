'use client';
import Image from 'next/image';

export default function BannerSection() {
    return (
        <div className="flex flex-col-reverse lg:flex-row bg-primary-1 rounded-3xl">
            <div className="flex flex-col justify-center gap-10 w-full lg:w-1/2 px-5 md:px-14 text-white py-5">
                <h2 className="text-xl sm:text-3xl font-bold">
                    ترخیص کالا و انجام تشریفات کامل گمرکی از تمامی گمرکات کشور
                </h2>
                <div className="flex flex-col">
                    <p className="text-justify leading-relaxed text-sm sm:text-base">
                        فرآیند ترخیص کالا امری تخصصی میباشد که حتما نیاز است که
                        توسط شخصی که دانش و تخصص کافی و تجربه لازم را دارد این
                        فرآیند انجام شود.
                    </p>
                    <p className="text-justify leading-relaxed text-sm sm:text-base">
                        مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران
                        مهندس محمدامین قنبری دارای تجربه بیش از 10 ساله در امور
                        بازرگانی و ترخیص کالا میتواند کالای شما تاجر و صاحب
                        کالای عزیز را طبق قانون و مقررات امور گمرکی و صادرات و
                        واردات و اصول تجاری از گمرک در کمترین زمان ممکن با تنظیم
                        اظهارنامه و انجام تشریفات گمرکی مورد نظر ترخیص نماید و
                        همچنین با به کارگیری روش های خاص خود میتوانیم مبالغ
                        پرداختی به گمرک را تا حد ممکن کاهش دهیم و اگر کالای شما
                        در گمرک دچار اختلافات شود و به کمیسیون های گمرکی ارجاع
                        شود ما به عنوان کارگزار رسمی گمرک به نمایندگی از شما در
                        کمیسیون ها شرکت میکنیم
                    </p>
                </div>
            </div>
            <Image
                alt="bannerSection"
                title="bannerSection"
                src="/global/banner.webp"
                className="w-full lg:w-1/2"
                width={500}
                height={500}
                priority
            />
        </div>
    );
}
