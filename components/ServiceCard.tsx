'use client';

import { useState } from 'react';

export default function ServiceCard(props: any) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col items-center relative bg-primary-1 rounded-3xl"
        >
            <div className="relative w-full p-8 md:p-14 py-10 md:py-20 text-white text-sm sm:text-lg text-justify z-10 leading-relaxed">
                {props.title}
            </div>
            <span
                className={`absolute top-0 left-0 w-full h-full bg-[#DED0F230] backdrop-blur-[10px] transition-all rounded-3xl ${
                    hovered && 'rotate-6'
                }`}
                style={{ boxShadow: '-2 2 0 10 #ffffff52' }}
            />
        </div>
    );
}
