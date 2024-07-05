import Avatar from '@/components/Avatar';
import Banner from '@/components/Banner';
import Faq from '@/components/Faq';

export default function About() {
    // const faqData = [
    //     {
    //         question:
    //             '1. آیا برای ترخیص کاال از گمرک نیاز است صاحب کالا (بازرگان) در گمرک حضور  پیدا کند؟',
    //         answer: 'خیر. صفر تا صد مراحل ترخیص کاال و تشریفات گمرکی توسط کارگزار رسمی گمرک مهندس محمدامین قنبری و کارمندان وی انجام میگیرد.',
    //     },
    //     {
    //         question: '2. هزینه های ترخیص کاال شامل چه مواردی میشود؟',
    //         answer: 'هزینه ها شامل حقوق ورودی، عوارض گمرکی، تخلیه و بارگیری،انبارداری و غیره میباشد که باید توسط بازرگان (صاحب کالا) پرداخت شود.',
    //     },
    //     {
    //         question: '3. ترخیص کاال از گمرک چند روز طول میکشد؟ ',
    //         answer: 'مدت زمان الزم برای ترخیص کاال از گمرک با توجه به عوامل تاثیر گذاری هچون  مسیر اظهارنامه (سبز،زرد، قرمز) و مجوزات مورد نیاز به طور میانگین تعیین میشود',
    //     },
    //     {
    //         question: '4. برای ترخیص کاال از گمرک چه مدارکی نیاز است؟',
    //         answer: 'مدارک مورد نیاز شامل قبض انبار، ترخیصیه، بارنامه، مجوزهای الزم ، گواهی بازرسی و غیره است.',
    //     },
    // ];
    const faqData = [
        {
            question: '1.  باید به کارگزار گمرک اعتماد کنیم؟',
            answer: 'کارگزار گمرک با مدیریت مهندس محمدامین قنبری به عنوان کارگزار رسمی گمرک  ایران دارای مجوز ویژه از ستاد مرکزی گمرک میباشد و تمامی کارمندان وی به  صورت رسمی به گمرک معرفی شده اند و در تمامی خدماتی که به شما ارائه میدهد  متعهد و با ضمانت است.',
        },
        {
            question: '2.  گمرک در ترخیص کاال چه وظایفی دارد؟ ',
            answer: 'صفرتا صد مراحل ترخیص کاال و تشریفات گمرکی شامل تنظیم اظهارنامه، اخذ  مجوزهای الزم، ارزش کاال و محاسبه حقوق ورودی و عوارض گمرکی، ارزیابی کاال  و غیره توسط کارگزار رسمی گمرک مهندس محمدامین قنبری و کارمندان وی انجام میشود',
        },
        {
            question: '3.  گمرک در مراجع اختالفات گمرکی چه وظایفی دارد؟',
            answer: ' به نمایندگی از شما بازرگان و صاحب کاالی عزیز در تمامی مراجع اختالفات گمرکی شامل کمیسیون بدوی اختالفات و کمیسیون تجدید نظر اختالفات گمرکی شرکت مینماید و از پرونده و کاالی شما تمام قد دفاع خواهد کرد',
        },
        {
            question: '4.  گمرک چه خدمات مشاوره ای ارائه میدهد؟',
            answer: 'مشاوره بازرگانی و گمرکی شامل عملیات ثبت سفارش، نحوه گرفتن مجوز ثبت  سفارش، تخصیص ارز، اسناد بازرگانی بین المللی، اصول حمل و نقل، اماکن گمرکی و  غیره',
        },
    ];
    return (
        <div>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <title>درباره کارگزار گمرک</title>
            <meta
                name="description"
                content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کاالی عزیز را بر طرف سازد.  "
            />
            <link rel="canonical" href={`https://kargozargomrok.com/about`} />
            <div className="flex flex-col gap-16 px-2.5 md:px-10 py-28 md:py-44">
                <Banner
                    data={['/about/banner.png']}
                    mobileData={['/about/mobileBanner.jpg']}
                />
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                    <div className="flex flex-col gap-5 w-full lg:w-3/5">
                        <h1 className="font-bold text-xl sm:text-3xl text-primary-1">
                            کالایتان را با خیال راحت به ما بسپارید
                        </h1>
                        <p className="text-xs sm:text-base leading-loose text-justify">
                            مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک
                            ایران مهندس محمدامین قنبری تشکیل شده است تا نیاز های
                            شما بازرگان وصاحب کاالی عزیز را در حوزه ترخیص
                            کاالهای وارداتی و صادراتی و مراجع اختالفات گمرکی و
                            مشاوره در زمینه امور بازرگانی و گمرکی بر طرف سازد.
                            این مجموعه با تجارب بیش از 01 ساله خود توانسته است
                            دستیار بازرگانان و صاحبین کاالهای زیادی در زمینه
                            امور گمرکی و بازرگانی باشد. در زمینه ترخیص کاال ما
                            محدود به یک گمرک و یا چند گمرک نیستیم خدمات ترخیص
                            کاالی ما با مجوز ویژه از گمرک ایران و در تمامی
                            گمرکات کشور از جمله گمرکات مستقر در مناطق آزاد تجاری
                            و ویژه اقتصادی انجام میشود. همچنین خدمات ترخیص کاال
                            و انجام تشریفات کامل گمرکی مجموعه ما محدود به یک یا
                            چند رویه گمرکی نیستند و تمامی رویه های گمرکی وارداتی
                            و صادراتی شامل واردات قطعی، واردات موقت، واردات موقت
                            به منظور پردازش، ترانزیت داخلی (عبور داخلی) ،
                            ترانزیت خارجی (عبور خارجی) ، مرجوعی، صادرات قطعی،
                            صادرات موقت و کابوتاژ را شامل میشود
                        </p>
                    </div>
                    <div className="flex flex-col shadow-md rounded-2xl bg-secondary p-8 w-full lg:w-2/5 gap-6">
                        <Avatar
                            image="/about/user.jpg"
                            name="محمدامین قنبری"
                            vertical
                        />
                        <p className="leading-loose text-justify text-xs sm:text-sm">
                            با سالم بنده کارگزار رسمی گمرک ایران هستم و همچنین
                            مدیریت مجموعه کارگزار گمرک و این وب سایت را برعهده
                            دارم و تجربه بنده بیش از 01 سال در زمینه بازرگانی و
                            فعالیت ترخیص انواع کاالهای وارداتی و صادراتی میباشد
                            و میتوانم با همراه تیم با تجربه خود کاالی شما
                            بازرگان عزیر و گرامی را از تمامی گمرکات کشور از جمله
                            گمرکات مستقر در مناطق آزاد تجاری و ویژه اقتصادی با
                            انجام تمامی مراحل تشریفات گمرکی رویه های
                            مربوط)واردات و صادرات( در کوتاهترین زمان و با کمترین
                            هزینه های گمرکی ممکن ترخیص نمایم و همچنین در صورت
                            ارجاع کاالی شما به کمیسیون های اختالفات گمرکی به
                            نمایندگی از شما در کمیسیون ها شرکت میکنم.
                        </p>
                    </div>
                </div>
                <Faq data={faqData} />
            </div>
        </div>
    );
}
