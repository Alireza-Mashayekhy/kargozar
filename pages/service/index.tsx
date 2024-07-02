import Banner from '@/components/Banner';
import BannerSection from '@/components/BannerSection';
import Card from '@/components/Card';
import ServiceCard from '@/components/ServiceCard';
import Layout from '@/components/layout';
import Head from 'next/head';

export default function Service() {
    const whyCards = [
        'کارگزار گمرک)کارگزار رسمی گمرک ایران( میتواند کلیه کاالهای شما بازرگانان و  صاحبین کاالی گرامی را با مجوز ویژه از ستاد مرکزی گمرک ایران در کوتاهترین زمان ممکن از تمامی گمرکات کشور از جمله گمرکات مستقر در مناطق آزاد تجاری و  ویژه اقتصادی ترخیص نماید و همچنین می تواند با به کارگیری روش های خاص  اقتصادی هزینه های گمرکی را تا حد امکان کاهش دهد',
        'فرآیند اخذ مجوزها برای ترخیص کاال تخصصی است و کارگزار گمرک)کارگزار  رسمی گمرک ایران( می تواند تمامی مجوزهای مربوط به کاالی شما تاجر و صاحب  کاالی عزیز را که اخذ آن ها الزم است از سازمان های مربوطه رسیدگی و دریافت نماید و همچنین گمرک ها برای اشخاص حقیقی و حقوقی که از کارگزار گمرکی برای ترخیص کاالی خود استفاده می نمایند تسهیالتی را در نظر می گیرند',
        'هنگامی که کاالیی در گمرکات با صاحبین کاال به اختالف بر بخورد کارگزار  گمرک)کارگزار رسمی گمرک ایران( می تواند به نمایندگی از شما بازرگان و صاحب  کاالی گرامی در گمرک مربوطه به اختالف رسیدگی کند و همچنین اگر این اختالفات به  مراجع اختالفات گمرکی ارجاع شود هم می تواند به نمایندگی از شما در این مراجع  حضور یابد و از کاالی شما که در گمرک به اختالف رسیده است دفاع کند',
    ];
    const ourServices = [
        {
            link: '/service/clearance',
            image: '/service/tarkhis.jpg',
            title: 'ترخیص کالا',
        },
        {
            link: '/service/commission',
            image: '/service/komision.jpg',
            title: 'کمیسیون اختلافات گمرک',
        },
        {
            link: '/service/counseling',
            image: '/service/moshavere.jpg',
            title: 'مشاوره بازرگانی',
        },
    ];
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>خدمات گمرکی</title>
                <meta
                    name="description"
                    content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کاالی عزیز را بر طرف سازد.  "
                />
                <link
                    rel="canonical"
                    href={`https://kargozargomrok.com/Service`}
                />
            </Head>
            <div className="flex flex-col gap-16 px-2.5 md:px-10 py-28 md:py-44">
                <Banner
                    data={['/service/banner.png']}
                    mobileData={['/service/mobileBanner.png']}
                />
                <div className="flex flex-col gap-4 sm:gap-9">
                    <h1 className="hidden">بهترین خدمات کارگزار گمرک</h1>
                    <h2 className="font-bold text-2xl sm:text-3xl text-primary-1">
                        چرا کارگزار گمرک
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-24">
                        {whyCards.map((el, index) => {
                            return (
                                <ServiceCard
                                    key={`whyCard-${index}`}
                                    title={el}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-4 sm:gap-9">
                    <div className="font-bold text-2xl sm:text-3xl text-primary-1">
                        خدمات ما
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24 mb-10">
                        {ourServices.map((el, index) => {
                            return (
                                <Card
                                    key={`card-${index}`}
                                    link={el.link}
                                    image={el.image}
                                    title={el.title}
                                />
                            );
                        })}
                    </div>
                </div>
                <BannerSection />
            </div>
        </Layout>
    );
}
