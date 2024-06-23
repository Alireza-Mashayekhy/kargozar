import Banner from '@/components/Banner';
import BannerSection from '@/components/BannerSection';
import BlogSection from '@/components/Blog/Section';
import Image from 'next/image';

export default function Home() {
    const banners = [
        require('@/public/landing/banner_1.jpg'),
        require('@/public/landing/banner_2.jpg'),
    ];

    interface servicesCategoriesType {
        id: number;
        image: string;
        title: string;
    }

    const blogs = [
        {
            slug: 'lorem',
            image: null,
            title: 'لورم',
            description:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان ',
        },
        {
            slug: 'lorem',
            image: null,
            title: 'لورم',
            description:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان ',
        },
        {
            slug: 'lorem',
            image: null,
            title: 'لورم',
            description:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان ',
        },
        {
            slug: 'lorem',
            image: null,
            title: 'لورم',
            description:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان ',
        },
        {
            slug: 'lorem',
            image: null,
            title: 'لورم',
            description:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان ',
        },
        {
            slug: 'lorem',
            image: null,
            title: 'لورم',
            description:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان ',
        },
    ];

    const servicesCategories: servicesCategoriesType[] = [
        {
            id: 1,
            image: require('@/public/landing/tarkhisService.png'),
            title: 'ترخیص کالا',
        },
        {
            id: 2,
            image: require('@/public/landing/komesionService.png'),
            title: 'کمیسیون اختلافات گمرک',
        },
        {
            id: 3,
            image: require('@/public/landing/moshavereService.png'),
            title: 'مشاوره بازرگانی',
        },
    ];
    return (
        <div className="flex flex-col gap-10 md:gap-16">
            <div className="flex flex-col gap-16 px-2.5 md:px-10 pt-28 md:pt-44">
                <div>
                    <Banner data={banners} />
                    <div className="w-full sm:w-11/12 md:w-4/5 mt-5 sm:mt-0 bg-white py-3 sm:py-6 rounded-xl sm:rounded-2xl shadow-md mx-auto sm:-top-5 md:-top-12 relative z-10 flex items-center justify-around">
                        {servicesCategories.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-center gap-1.5 cursor-pointer"
                                >
                                    <Image
                                        alt={item.title}
                                        src={item.image}
                                        className="w-10 sm:w-16"
                                    />
                                    <div className="text-sm sm:text-xl text-center">
                                        {item.title}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <BannerSection />
            </div>
            <BlogSection title="مجله گمرکی" data={blogs} />
        </div>
    );
}
