'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function Pagination(props: any) {
    const params = useParams();
    const router = useRouter();
    const path = usePathname();
    const [route, setRoute] = useState('');

    return (
        <div className="flex items-center gap-5 w-full justify-center">
            <div
                className={`flex items-center justify-center w-14 h-14 rounded-md bg-primary-1  ${
                    params.page == Math.ceil(props.length).toString() ||
                    Math.ceil(props.length) === 1
                        ? 'opacity-50 cursor-default'
                        : 'cursor-pointer'
                }`}
            >
                <FaChevronRight color="white" className="w-6 h-6" />
            </div>
            {[...new Array(Math.ceil(props.length))].map((el, index) => (
                <div
                    onClick={() => {
                        setRoute(path + '?page=' + (index + 1).toString());
                        router.push(route);
                    }}
                    key={`pagination-${index}`}
                    className={`flex items-center justify-center w-14 h-14 rounded-md  cursor-pointer  ${
                        params.page == (index + 1).toString()
                            ? 'bg-primary-1 text-white'
                            : ''
                    } ${
                        !params.page && index === 0
                            ? 'bg-primary-1 text-white'
                            : ''
                    }`}
                >
                    {index + 1}
                </div>
            ))}
            <div
                className={`flex items-center justify-center w-14 h-14 rounded-md bg-primary-1  ${
                    !params.page || params.page == '1'
                        ? 'opacity-50 cursor-default'
                        : 'cursor-pointer'
                }`}
            >
                <FaChevronLeft color="white" className="w-6 h-6" />
            </div>
        </div>
    );
}
