'use client';
import Banner from '@/components/Banner';

import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaChevronDown } from 'react-icons/fa6';

export default function Request() {
    const [isShowCategories, setCategories] = useState(false);
    const [loading, setLoading] = useState(false);
    const [full_name, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    const [selectedType, setSelectedType] = useState({
        title: '',
        ulid: '',
    });
    const [requestType, setType] = useState([]);

    interface requestTypes {
        title: string;
        ulid: string;
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            axios
                .get(`https://api.kargozargomrok.com/api/service-types`)
                .then((res) => {
                    setType(res.data.data);
                });
        }
    }, []);

    const sendRequest = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!full_name || !phone || !selectedType.ulid || !description) {
            toast.error('لطفا تمامی مقادیر را پر کنید');
        } else if (phone.length !== 11) {
            toast.error('شماره وارد شده اشتباه است');
        } else {
            setLoading(true);
            const data: any = {
                full_name: full_name,
                phone: phone,
                service_type_id: selectedType.ulid,
                description: description,
            };
            await axios
                .post(`https://api.kargozargomrok.com/api/orders`, data)
                .then((res) => {
                    toast.success('درخواست شما با موفقیت ثبت شد.');
                    setLoading(false);
                    setFullName('');
                    setPhone('');
                    setDescription('');
                    setSelectedType({
                        title: '',
                        ulid: '',
                    });
                })
                .catch((err) => {
                    // toast.error(err);
                    console.log(err);
                    setLoading(false);
                });
        }
    };

    return (
        <div>
            <div className="flex flex-col gap-16 px-2.5 md:px-10 py-28 md:py-44">
                <Banner
                    data={['/request.png']}
                    mobileData={['/mobileRequest.jpg']}
                />
                <form onSubmit={sendRequest} className="flex flex-col gap-8">
                    <h2 className="font-bold text-xl sm:text-3xl text-primary-1">
                        ثبت سفارش
                    </h2>
                    <div className="flex flex-col md:flex-row gap-5 sm:gap-12">
                        <div className="flex flex-col w-full md:w-1/2 gap-5 sm:gap-12">
                            <div className="flex flex-col gap-2">
                                <label>نام و نام خانوادگی</label>
                                <input
                                    value={full_name}
                                    onChange={(e: any) =>
                                        setFullName(e.target.value)
                                    }
                                    type="text"
                                    name="full_name"
                                    placeholder="لطفا وارد کنید"
                                    className="border rounded-xl px-4 py-3 sm:px-7 sm:py-4 w-full focus:border-primary-1 text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>شماره تماس:</label>
                                <input
                                    value={phone}
                                    onChange={(e: any) =>
                                        setPhone(e.target.value)
                                    }
                                    type="text"
                                    placeholder="لطفا وارد کنید"
                                    className="border rounded-xl px-4 py-3 sm:px-7 sm:py-4 w-full focus:border-primary-1 text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col gap-2 relative">
                                <label>نوع درخواست</label>
                                <div
                                    onClick={() =>
                                        setCategories(!isShowCategories)
                                    }
                                    className="border rounded-xl flex items-center justify-between px-4 py-3 sm:px-7 sm:py-4 w-full focus:border-primary-1 text-sm sm:text-base"
                                >
                                    <div className="min-h-6">
                                        {selectedType.title}
                                    </div>
                                    <FaChevronDown />
                                </div>

                                {isShowCategories && (
                                    <div className="absolute right-0 top-24 bg-white shadow rounded-xl flex flex-col gap-2 w-full overflow-hidden z-20">
                                        {requestType.map((el: requestTypes) => {
                                            return (
                                                <div
                                                    key={el.ulid}
                                                    className="px-5 py-2 cursor-pointer"
                                                    onClick={() => {
                                                        setSelectedType(el);
                                                        setCategories(
                                                            !isShowCategories
                                                        );
                                                    }}
                                                >
                                                    {el.title}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {isShowCategories && (
                                    <div
                                        onClick={() => {
                                            setCategories(false);
                                        }}
                                        className=" fixed left-0 top-0 z-10 inline-block w-screen h-screen"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <label>توضیحات تکمیلی</label>

                            <textarea
                                value={description}
                                onChange={(e: any) =>
                                    setDescription(e.target.value)
                                }
                                placeholder="لطفا توضیحات تکمیلی را وارد نمایید (اختیاری)"
                                className="border rounded-xl p-3 sm:p-5 w-full h-full focus:border-primary-1 text-sm sm:text-base resize-none min-h-32"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className=" sm:text-xl px-8 py-2 text-white bg-primary-1 rounded-lg"
                        >
                            {(loading && (
                                <svg
                                    aria-hidden="true"
                                    role="status"
                                    className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="#1C64F2"
                                    ></path>
                                </svg>
                            )) || <span>ثبت درخواست</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
