import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';

export default function BlogCard(props: any) {
    return (
        <div className="bg-white rounded-2xl">
            <Image
                alt={props.title}
                src={props.image || require('@/public/placeholders/image.png')}
            />
            <div className="flex flex-col gap-2 5 p-5">
                <h4 className="font-bold text-2xl">{props.title}</h4>
                <p className="text-justify leading-snug">{props.description}</p>
                <div className="flex justify-end">
                    <Link
                        href={props.link ? `/blog/${props.slug}` : '/'}
                        className="flex items-center text-primary-1"
                    >
                        <span>مشاهده</span>
                        <FaChevronLeft />
                    </Link>
                </div>
            </div>
        </div>
    );
}
