import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

interface dataType {
    question: string;
    answer: string;
}

interface propsType {
    data: dataType[];
}

export default function Faq(props: propsType) {
    const [faqIndex, setFaqIndex] = useState(-1);
    return (
        <div className="flex flex-col gap-5 sm:gap-12">
            <h2 className="font-bold text-xl sm:text-3xl text-primary-1">
                پرسش متداول درباره کارگزار گمرک
            </h2>
            <div className="hidden md:flex gap-10">
                <div className="flex flex-col gap-10 w-1/2">
                    {props.data.map((el, index) => {
                        return (
                            index % 2 === 0 && (
                                <div
                                    key={index}
                                    className={`w-full overflow-hidden rounded-lg transition-all bg-secondary ${
                                        index === faqIndex ? 'h-fit' : 'h-20'
                                    }`}
                                >
                                    <div
                                        onClick={() => {
                                            faqIndex === index
                                                ? setFaqIndex(-1)
                                                : setFaqIndex(index);
                                        }}
                                        className={`flex gap-5 cursor-pointer justify-between items-center h-20 px-7 ${
                                            faqIndex === index &&
                                            'text-primary-1'
                                        }`}
                                    >
                                        <h3 className="">{el.question}</h3>
                                        <FaChevronDown
                                            className={`min-w-6 min-h-6 w-6 h-6 transition-all ${
                                                faqIndex === index
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </div>
                                    <p className="text-sm px-7 pb-5 text-justify leading-relaxed">
                                        {el.answer}
                                    </p>
                                </div>
                            )
                        );
                    })}
                </div>
                <div className="flex flex-col gap-10 w-1/2">
                    {props.data.map((el, index) => {
                        return (
                            index % 2 !== 0 && (
                                <div
                                    key={index}
                                    className={`w-full overflow-hidden rounded-lg transition-all bg-secondary ${
                                        index === faqIndex ? 'h-fit' : 'h-20'
                                    }`}
                                >
                                    <div
                                        onClick={() => {
                                            faqIndex === index
                                                ? setFaqIndex(-1)
                                                : setFaqIndex(index);
                                        }}
                                        className={`flex gap-5 cursor-pointer justify-between items-center h-20 px-7 ${
                                            faqIndex === index &&
                                            'text-primary-1'
                                        }`}
                                    >
                                        <h3 className="">{el.question}</h3>
                                        <FaChevronDown
                                            className={`min-w-6 min-h-6 w-6 h-6 transition-all ${
                                                faqIndex === index
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </div>
                                    <p className="text-sm px-7 pb-5 text-justify leading-relaxed">
                                        {el.answer}
                                    </p>
                                </div>
                            )
                        );
                    })}
                </div>
            </div>
            <div className="flex md:hidden flex-col gap-2 sm:gap-5 w-full">
                {props.data.map((el, index) => {
                    return (
                        <div
                            key={index}
                            className={`w-full overflow-hidden rounded-lg transition-all bg-secondary ${
                                index === faqIndex ? 'h-fit' : 'h-16 sm:h-20'
                            }`}
                        >
                            <div
                                onClick={() => {
                                    faqIndex === index
                                        ? setFaqIndex(-1)
                                        : setFaqIndex(index);
                                }}
                                className={`flex gap-5 cursor-pointer justify-between items-center h-16 sm:h-20 px-4 sm:px-7 ${
                                    faqIndex === index && 'text-primary-1'
                                }`}
                            >
                                <h3 className="text-sm sm:text-base">
                                    {el.question}
                                </h3>
                                <FaChevronDown
                                    className={`sm:min-w-6 sm:min-h-6 sm:w-6 sm:h-6 transition-all ${
                                        faqIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </div>
                            <p className="text-xs sm:text-sm px-4 sm:px-7 pb-5 text-justify leading-relaxed">
                                {el.answer}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
