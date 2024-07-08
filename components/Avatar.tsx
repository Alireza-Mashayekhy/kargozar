'use client';
import Image from 'next/image';

interface propsType {
    image: string;
    name: string;
    vertical?: Boolean;
}
export default function Avatar(props: propsType) {
    return (
        <div
            className={`flex items-center gap-3 sm:gap-5 ${
                props.vertical && 'flex-col'
            }`}
        >
            <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border border-primary-1 p-1.5">
                <div className="w-full h-full relative">
                    <Image
                        src={props.image}
                        alt={props.name}
                        title={props.name}
                        className=" rounded-full w-full h-full"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <h3 className="font-bold text-lg sm:text-2xl">{props.name}</h3>
        </div>
    );
}
