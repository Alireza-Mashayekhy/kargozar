import Banner from '@/components/Banner';
import Card from '@/components/Card';
import Layout from '@/components/layout';

export default function blog() {
    interface categoriesType {
        image: string;
        title: string;
    }

    const categories: categoriesType[] = [
        {
            image: require('@/public/blog/bakhshname.png'),
            title: 'بخشنامه گمرکی',
        },
        {
            image: require('@/public/blog/khabarname.png'),
            title: 'خبرنامه گمرکی',
        },
        {
            image: require('@/public/blog/maghalat.png'),
            title: 'مقالات گمرکی',
        },
    ];
    return (
        <Layout>
            <div className="flex flex-col gap-10 md:gap-16">
                <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
                    <Banner data={[require('@/public/blog/banner.jpg')]} />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
                        {categories.map((item) => {
                            return (
                                <Card
                                    key={item.title}
                                    title={item.title}
                                    image={item.image}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
