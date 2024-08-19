'use client';
import Avatar from '@/components/Avatar';
import Banner from '@/components/Banner';
import Faq from '@/components/Faq';
import style from '@/assets/styles/skeleton.module.css';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ServiceDetail() {
    const params = useParams();
    const [title, setTitle] = useState(
        `خدمات گمرکی - ${
            params.slug === 'clearance'
                ? 'خدمات ترخیص کالا'
                : params.slug === 'commission'
                ? 'خدمات شرکت در مراجع های گمرکی'
                : 'خدمات مشاوره امور گمرکی و بازرگانی'
        }`
    );

    const [loading, setLoading] = useState(true);

    const [serviceData, setServiceData] = useState({
        banner: '',
        mobileBanner: '',
        agent: {
            image: '',
            name: '',
            description: '',
        },
        title: '',
        title2: '',
        list: {
            title: '',
            items: [''],
        },
        imageAndTest: {
            image: '',
            text: '',
        },
        contentTitle: '',
        contentCols: '',
        content: [
            {
                title: '',
                items: [''],
                text: '',
            },
        ],
    });

    useEffect(() => {
        if (params.slug) {
            if (params.slug === 'clearance') {
                setServiceData({
                    banner: '/service/tarkhisBanner.webp',
                    mobileBanner: '/service/tarkhisMobileBanner.webp',
                    agent: {
                        image: '/about/user.webp',
                        name: 'محمدامین قنبری',
                        description:
                            'اینجانب به عنوان کارگزار رسمی گمرک ایران با شماره پروانه:170641 و مدیر مجموعه کارگزار گمرک دارای تجربه 10 ساله در زمینه بازرگانی و فعالیت ترخیص انواع کالاهای وارداتی و صادراتی میباشم و میتوانم به همراه تیم خود کالای شما تاجر و صاحب کالای گرامی را در کوتاهترین زمان ممکن و با کمترین هزینه های گمرکی ممکن از تمامی گمرکات کشور از جمله گمرکات مستقر در مناطق آزاد تجاری و ویژه اقتصادی و در کلیه رویه های گمرکی (وارداتی و صادراتی) و با انجام تشریفات کامل گمرکی از گمرک های مربوطه ترخیص نمایم.',
                    },
                    title: 'خدمات ترخیص کالا',
                    title2: 'ترخیص کلیه کالا ها توسط کارگزار رسمی گمرک از تمامی گمرکات کشور',
                    list: {
                        title: 'ترخیص کالا شامل کلیه کالاهای وارداتی و صادراتی شامل:',
                        items: [
                            'بررسی پروفرما و تعرفه کالا و سایر اسناد بازرگانی و مدارک مورد نیاز گمرک',
                            'بررسی ارزش کالا',
                            'اظهار کالا در سامانه EPL',
                            'محاسبه حقوق ورودی',
                            'محاسبه عوارض و هزینه های گمرکی مربوط به کالا',
                            'اخذ مجوزهای مورد نیاز',
                            'اخذ انواع معافیت های گمرکی',
                            'مراجعه حضوری به گمرک مربوطه جهت انجام مراحل ترخیص',
                            'سایر موارد',
                        ],
                    },
                    imageAndTest: {
                        image: '/service/tarkhis.webp',
                        text: 'شما تاجر و صاحب کالای عزیز میتوانید با اعتماد به مجموعه کارگزار گمرک (کارگزار رسمی گمرک ایران) بدون نیاز به حضور شما در گمرکات و بدون دغدغه و با اطمینان خاطر صفر تا صد مراحل ترخیص و انجام تشریفات گمرکی کالای خود را به ما بسپارید و این مجموعه متعهد میشود کالای شمارا با کاهش دادن زمان و هزینه های ترخیص از گمرکات ترخیص نماید.',
                    },
                    contentTitle: 'خدمات انواع رویه های گمرکی ترخیص کالا شامل:',
                    contentCols: 'sm:grid-cols-4',
                    content: [
                        {
                            title: 'کالاهای وارداتی:',
                            items: [
                                'ورود قطعی',
                                'ورود موقت',
                                'ورود موقت برای پردازش',
                                'عبور داخلی (ترانزیت داخلی)',
                                'عبور خارجی (ترانزیت خارجی)',
                                'مرجوعی',
                            ],
                            text: '',
                        },
                        {
                            title: 'کالاهای صادراتی:',
                            items: ['صدور قطعی', 'صدور موقت'],
                            text: '',
                        },
                        {
                            title: 'کابوتاژ (کران بری)',
                            items: [],
                            text: '',
                        },
                        {
                            title: '',
                            items: [],
                            text: 'ترخیص کالا همچنین شامل مراحلی از جمله اخذ ترخیصیه، دریافت کوتاژ، دریافت قبض رسید انبار، بارگذاری در سامانه EPL و... میشود. برای انجام هر یک از این مراحل نیاز به آگاهی از مواردی مانند قوانین امور گمرکی و قوانین ترخیص و شرایط آن و نحوه دریافت مدارک می باشد. البته یادآور شویم که تنها آگاهی از موارد ذکر شده کافی نبوده و تجربه عملی است که میتواند در  انجام فرآیند ترخیص موثر باشد. در نهایت مجموعه کارگزار گمرک (کارگزار رسمی گمرک ایران) با اطلاعات کافی و تجربه لازم میتواند ترخیص کالا را به نحو احسن برای شما به انجام برساند',
                        },
                    ],
                });
            } else if (params.slug === 'commission') {
                setServiceData({
                    banner: '/service/komisionBanner.webp',
                    mobileBanner: '/service/komisionMobileBanner.webp',
                    agent: {
                        image: '/about/user.webp',
                        name: 'محمدامین قنبری',
                        description:
                            'اینجانب به عنوان کارگزار رسمی گمرک ایران با شماره پروانه:170641 و مدیر مجموعه کارگزار گمرک دارای تجربه 10 ساله در زمینه بازرگانی و فعالیت ترخیص انواع کالاهای وارداتی و صادراتی میباشم و میتوانم به همراه تیم خود به نمایندگی از شما تاجر و صاحب کالای گرامی در تمامی کمیسیون های اختلافات گمرکی و کمیته های تخصصی حسابرسی پس از ترخیص و بازبینی شرکت نمایم و با تکیه بر قوانین امور گمرکی و صادرات و واردات و ترخیص از پرونده و کالای شما در این مراجع دفاع کنم.',
                    },
                    title: 'خدمات شرکت در مراجع های گمرکی',
                    title2: 'شرکت در مراجع اختلافات گمرکی به نمایندگی از صاحب کالا توسط کارگزار رسمی گمرک',
                    list: {
                        title: 'خدمات مراجع اختلافات گمرکی شامل',
                        items: [
                            'بررسی تخصصی پرونده و کالای موضوع مورد اختلاف',
                            'بررسی علت ایجاد اختلاف',
                            'شرکت در کمیسیون ها به نمایندگی از صاحبین کالا',
                        ],
                    },
                    imageAndTest: {
                        image: '/service/komision.webp',
                        text: 'هنگامی که کالایی در گمرکات بین کارشناسان یا ارزیابان یا سایر کارکنان گمرک و صاحبین کالا به اختلاف بر میخورند اختلافات مورد نظر در گمرک مربوطه بررسی میشود واگر مورد اختلاف بین گمرک و صاحب کالا هنوز باقی باشد که در گمرک مربوطه پرونده تشکیل میشود و به مراجع اختلافات گمرکی فرستاده میشود و این اختلافات میتواند شامل اختلاف در ارزش کالا و اختلاف در مجاز یا مجاز مشروط یا ممنوع بودن کالا و همچنین اختلاف در حقوق ورودی، عوارض و هزینه های گمرکی و غیره باشد که برای شرکت در کمیسیون های اختلافات گمرکی حتما نیازمند دانش کافی به قوانین و مقررات و تجربه لازم است مجموعه کارگزار گمرک (کارگزار رسمی گمرک ایران) به همراه تیم مجرب خود میتواند به نمایندگی از شما در این کمیسیون ها شرکت نماید و به مورد اختلاف رسیدگی کند تا حقی از شما ضایع نشود.',
                    },
                    contentTitle: '',
                    contentCols: 'sm:grid-cols-2',
                    content: [
                        {
                            title: 'کمیسیون های اختلافات گمرکی:',
                            items: [],
                            text: 'این کمیسیون ها شامل کمیسیون بدوی و تجدیدنظر میباشد که کمیسیون بدوی شامل ۹ عضو میباشد و کمیسیون تجدیدنظر شامل ۵ عضو است و از بین اعضای کمیسیون بدوی یک نفر رئیس و یک نفر نایب رئیس در نخستین جلسه کمیسیون با رای مخفی انتخاب و با حکم رئیس کل گمرک منصوب میشوند و در کمیسیون تجدید نظر یک نفر از کارمندان وزارت امور اقتصادی و دارایی به انتخاب وزیر رئیس و یک نفر از معاونین گمرک ایران به انتخاب رئیس کل گمرک نایب رئیس منصوب میشوند',
                        },
                        {
                            title: 'کمیته حسابرسی پس از ترخیص:',
                            items: [],
                            text: 'گمرک ایران موظف است به منظور اطمینان یافتن از رعایت مقررات گمرکی ظرف سه سال از تاریخ صدور سند ترخیص در صورت کشف اسناد خلاف واقع که مشمول قاچاق نشود و درباره ترخیص کالایی که متضمن زیان مالی دولت است و همچنین امتیازات غیر موجهی برای صاحب کالا ایجاد نموده باشد که گروه حسابرسی حداقل از چهار نفر شامل رئیس، حسابرس ارشد و حسابرسان تشکیل میشود',
                        },
                    ],
                });
            } else if (params.slug === 'counseling') {
                setServiceData({
                    banner: '/service/moshavereBanner.webp',
                    mobileBanner: '/service/moshavereMobileBanner.webp',
                    agent: {
                        image: '/about/user.webp',
                        name: 'محمدامین قنبری',
                        description:
                            'اینجانب به عنوان کارگزار رسمی گمرک ایران با شماره پروانه:170641 و مدیر مجموعه کارگزار گمرک دارای تجربه 10 ساله در زمینه بازرگانی و فعالیت ترخیص انواع کالاهای وارداتی و صادراتی میباشم و میتوانم به همراه تیم خود در زمینه اسناد و قراردادهای تجاری، تعیین دقیق تعرفه کالا، واردات کالا، صادرات کالا، ترانزیت کالا، ثبت سفارش، خرید ارز، حمل و نقل، مجوز ها و غیره به شما تاجر و صاحب کالای گرامی خدمات مشاوره ارائه نمایم.',
                    },
                    title: 'خدمات مشاوره امور گمرکی و بازرگانی',
                    title2: 'مشاوره امور بازرگانی و گمرکی توسط کارگزار رسمی گمرک',
                    list: {
                        title: 'خدمات مشاوره امور بازرگانی و گمرکی شامل:',
                        items: [
                            'واردات کالا',
                            'صادرات کالا',
                            'ترانزیت کالا',
                            'اسناد تجاری',
                            'قراردادهای تجاری',
                            'تعرفه کالا',
                            'ثبت سفارش',
                            'خرید ارز',
                            'مجوزها',
                            'حمل و نقل',
                            'اسناد حمل و نقل',
                        ],
                    },
                    imageAndTest: {
                        image: '/service/moshavere.webp',
                        text: '',
                    },
                    contentTitle: '',
                    contentCols: 'sm:grid-cols-1',
                    content: [
                        {
                            title: 'مشاوره واردات کالا:',
                            items: [],
                            text: 'در واردات کالا مجموعه ما در زمینه تنظیم قرارداد اولیه و پروفرما اینویس که یک طرف شما تاجر و صاحب کالای عزیز هستید و یک طرف هم فروشنده خارجی میباشد مشاوره تخصصی میدهیم و همچنین در زمینه گرفتن اسناد تجاری کالا و پرداخت پول به فروشنده و تحویل گرفتن کالا از شرکت حمل و نقل بین المللی و غیره به شما مشاوره میدهیم',
                        },
                        {
                            title: 'مشاوره صادرات کالا:',
                            items: [],
                            text: 'در صادرات کالا مجموعه ما به شما در تنظیم اسناد بازرگانی کالا و تنظیم قرارداد اولیه وپروفرما اینویس و همچنین در زمینه حمل و نقل بین المللی و تحویل کالا و اسناد به خریدار خارجی و غیره به شما تاجر و صاحب کالای عزیز که یک طرف معامله به عنوان فروشنده (صادرکننده) هستید مشاوره تخصصی ارائه میدهیم',
                        },
                        {
                            title: 'مشاوره ترانزیت کالا:',
                            items: [],
                            text: 'هرگاه شما صاحب کالای گرامی بخواهید کالایی را از یک گمرک مرزی به یک گمرک داخلی انتقال دهید یا کالایی را از یک گمرک مرزی وارد قلمرو گمرکی کنید و از یک گمرک مرزی خارج شود فرآیندهایی دارد که در زمینه باربری، حمل و نقل، انبارداری، بیمه، پلمپ و غیره خدمات مشاوره ارائه میدهیم',
                        },
                        {
                            title: 'مشاوره تعرفه کالا:',
                            items: [],
                            text: 'شما تاجر و صاحب کالای عزیز میتوانید کد تعرفه دقیق کالای خود را که قصد واردات یا صادرات آن را دارید از مجموعه کارگزار گمرک (کارگزار رسمی گمرک ایران) دریافت نمایید و همچنین ما به شما در زمینه تعیین ارزش گمرکی کالا و محاسبه حقوق ورودی و عوارض گمرکی و هزینه های گمرکی مشاوره ارائه میدهیم',
                        },
                        {
                            title: 'مشاوره ثبت سفارش و خرید ارز:',
                            items: [],
                            text: 'در این مشاوره ما به شما روش ثبت سفارش و دریافت مجوز ورود و تخصیص ارز (خرید ارز) در سامانه جامع تجارت را توضیح میدهیم و مواردی که باید رعایت کنید و همچنین توضیح اینکه چه کالاهایی نیاز به ثبت سفارش (دریافت مجوز ورود) ندارند را به طور کامل مشاوره میدهیم و تا پایان عملیات ثبت سفارش و خرید ارز در  کنار شما تاجر و صاحب کالای گرامی هستیم',
                        },
                        {
                            title: 'مشاوره مجوزها:',
                            items: [],
                            text: 'مجموعه ما در این مشاوره، مجوزهایی که کالای شما نیاز دارد و اینکه آیا کالای شما نیاز به مجوزهای جداگانه ای دارد یا خیر را به شما خدمات مشاوره ارائه میدهیم که  به این مجوزها، مجوزهای ترخیص هم میگویند که برخی از این مجوزها شامل مجوز  بهداشت، مجوز نباتی، مجوز محیط زیست، مجوز استاندارد و غیره میباشد که یکی از  مهمترین مراحل ترخیص کالا همین بخش اخذ مجوزها است',
                        },
                        {
                            title: 'مشاوره حمل و نقل:',
                            items: [],
                            text: 'شما تاجر و صاحب کالای عزیز هنگامی که قصد واردات و صادرات کالایی را داشته باشید برای وارد کردن کالا به قلمرو گمرکی و همچنین خارج کردن کالا از قلمرو گمرکی نیاز به وسیله حمل کالا دارید که این وسیله حمل ممکن است دریایی، زمینی، هوایی و ریلی باشد و شما برای حمل کالای خود به منظور واردات و صاردات باید به یک شرکت حمل و نقل بین المللی مراجعه کنید که مجموعه کارگزار گمرک به عنوان کارگزار رسمی گمرک ایران شما را در انتخاب شرکت حمل مناسب و درباره اسناد حمل کالا و هزینه حمل و نقل کالا راهنمایی میکند و خدمات مشاوره تخصصی حمل و نقل ارائه میدهد',
                        },
                    ],
                });
            }
            setLoading(false);
        }
    }, [params.slug]);

    const faqData = [
        {
            question:
                '1.آیا برای ترخیص کالا از گمرک نیاز است صاحب کالا (بازرگان) در گمرک حضور  پیدا کند؟',
            answer: 'خیر. صفر تا صد مراحل ترخیص کالا و تشریفات گمرکی توسط کارگزار رسمی گمرک مهندس محمدامین قنبری و کارمندان وی انجام میگیرد.',
        },
        {
            question: '2. هزینه های های ترخیص کالا شامل چه مواردی میشود؟',
            answer: 'هزینه ها شامل حقوق ورودی، عوارض گمرکی، تخلیه و بارگیری، انبارداری و غیره میباشد که باید توسط بازرگان (صاحب کالا) پرداخت شود.',
        },
        {
            question: '3. ترخیص کالا از گمرک چند روز طول میکشد؟',
            answer: 'مدت زمان لازم برای ترخیص کالا از گمرک با توجه به عوامل تاثیر گذاری هچون  مسیر اظهارنامه (سبز، زرد، قرمز) و مجوزات مورد نیاز به طور میانگین تعیین میشود',
        },
        {
            question: '4. برای ترخیص کالا از گمرک چه مدارکی نیاز است؟ ',
            answer: 'مدارک مورد نیاز شامل قبض انبار، ترخیصیه، بارنامه، مجوزهای لازم، گواهی بازرسی و غیره است.',
        },
    ];

    if (loading) {
        return (
            <div>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta
                    name="description"
                    content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کالای عزیز را بر طرف سازد.  "
                />
                <link
                    rel="canonical"
                    href={`https://kargozargomrok.com/service/${params.slug}`}
                />
                <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                    <div
                        className={`${style.skeleton} w-full aspect-[3] !rounded-3xl`}
                    ></div>
                    <div
                        className={`${style.skeleton} w-full aspect-[3] !rounded-3xl`}
                    ></div>
                    <div className="flex flex-col gap-3">
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
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />{' '}
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />{' '}
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
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
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />{' '}
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />{' '}
                        <p
                            className={`${style.skeleton} w-full h-[10px] rounded-full`}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta
                name="description"
                content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کالای عزیز را بر طرف سازد.  "
            />
            <link
                rel="canonical"
                href={`https://kargozargomrok.com/service/${params.slug}`}
            />
            <div className="flex flex-col gap-10 sm:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                {serviceData.banner && (
                    <Banner
                        data={[serviceData.banner]}
                        mobileData={[serviceData.mobileBanner]}
                    />
                )}
                <div className="flex flex-col items-center gap-5 rounded-2xl shadow-md bg-secondary py-3 sm:py-5 px-5 sm:px-8">
                    <Avatar
                        image={serviceData.agent.image}
                        name={serviceData.agent.name}
                        vertical
                    />
                    <p className="text-center text-sm sm:text-base">
                        {serviceData.agent.description}
                    </p>
                </div>
                <h1 className="text-center text-2xl sm:text-4xl text-primary-1 font-bold">
                    {serviceData.title}
                </h1>
                <h3 className="text-center text-lg sm:text-2xl font-bold">
                    {serviceData.title2}
                </h3>
                <div className="flex flex-col gap-3">
                    <h2 className="text-lg sm:text-2xl font-bold ">
                        {serviceData.list.title}
                    </h2>
                    <ul className="list-decimal pr-5 flex flex-col sm:flex-row sm:flex-wrap gap-x-12">
                        {serviceData.list.items.map((item, index) => {
                            return (
                                <li
                                    key={`item-${index}`}
                                    className="sm:text-lg my-2 !w-fit"
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <p className="text-justify sm:text-xl leading-relaxed items-center flex">
                        {serviceData.imageAndTest.text}
                    </p>
                    <Image
                        src={serviceData.imageAndTest.image}
                        width={500}
                        height={500}
                        alt="inner image"
                        title="inner image"
                        className="rounded-3xl w-full"
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <h2 className="text-lg sm:text-2xl font-bold ">
                        {serviceData.contentTitle}
                    </h2>
                    <div
                        className={`grid gap-10 grid-cols-1 ${serviceData.contentCols}`}
                    >
                        {serviceData.content.map((el, index) => {
                            return (
                                <div
                                    key={`content-${index}`}
                                    className="flex flex-col gap-2"
                                >
                                    <h3 className="text-xl">{el.title}</h3>
                                    <ul className="list-decimal pr-5">
                                        {el.items.map((item, index) => {
                                            return (
                                                <li
                                                    className="my-2"
                                                    key={`content-item-${index}`}
                                                >
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <p className="text-justify">{el.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {params.slug === 'clearance' && (
                    <Faq
                        data={faqData}
                        title="پرسش های متداول درباره ترخیص کالا"
                    />
                )}
            </div>
        </div>
    );
}
