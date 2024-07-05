'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Card(props: any) {
    const [hovered, setHovered] = useState(false);
    return (
        <Link
            href={props.link || '/'}
            className="flex flex-col items-center gap-5 relative pb-10 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={props.image}
                alt={props.title + '-' + props.link}
                title={props.title}
                width={1000}
                height={1000}
                className="w-full rounded-3xl shadow-md relative z-10"
                loading="eager"
            />
            <h3
                className={`w-11/12 rounded-2xl shadow-md bg-primary-2 py-5 flex justify-center transition-all sm:absolute ${
                    hovered ? 'sm:-bottom-14' : 'sm:bottom-6'
                }`}
            >
                {props.title}
            </h3>
        </Link>
    );
}
