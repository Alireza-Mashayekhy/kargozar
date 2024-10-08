'use client';
import Banner from '@/components/Banner';
import Card from '@/components/Card';

export default function blog() {
    interface categoriesType {
        image: string;
        title: string;
        link: string;
    }

    const categories: categoriesType[] = [
        {
            image: '/blog/maghalat.webp',
            title: 'مقالات گمرکی',
            link: 'blog/posts',
        },
        {
            image: '/blog/khabarname.webp',
            title: 'خبرنامه گمرکی',
            link: 'blog/news-letters',
        },
        {
            image: '/blog/bakhshname.webp',
            title: 'بخشنامه گمرکی',
            link: 'blog/circular-letters',
        },
    ];
    return (
        <div>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <title>مجله گمرکی</title>
            <meta
                name="description"
                content="مجموعه کارگزار گمرک با مدیریت کارگزار رسمی گمرک ایران مهندس
                    محمدامین قنبری تشکیل شده است تا نیاز های شما بازرگان وصاحب
                    کالای عزیز را بر طرف سازد.  "
            />
            <link rel="canonical" href="https://kargozargomrok.com/blog" />
            <div className="flex flex-col gap-10 md:gap-16">
                <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                    <Banner
                        data={['/blog/banner.webp']}
                        mobileData={['/blog/mobileBanner.webp']}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
                        {categories.map((item) => {
                            return (
                                <Card
                                    key={item.title}
                                    title={item.title}
                                    image={item.image}
                                    link={item.link}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
