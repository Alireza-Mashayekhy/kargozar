'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Card(props: any) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="flex flex-col items-center gap-5 relative pb-10 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={props.image}
                alt={props.title}
                className="w-full rounded-3xl shadow-md relative z-10"
            />
            <div
                className={`w-11/12 rounded-2xl shadow-md bg-primary-2 py-5 flex justify-center transition-all sm:absolute ${
                    hovered ? 'sm:-bottom-14' : 'sm:bottom-6'
                }`}
            >
                {props.title}
            </div>
        </div>
    );
}
