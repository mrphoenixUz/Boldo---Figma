import React from 'react'
import logo from "@/images/logo.svg"
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className='container mx-auto bg-[#0A2640] flex flex-col items-center justify-center'>
                <div className='max-w-[716px] py-20 text-center flex flex-col justify-center items-center'>
                    <h1 className='font-normal text-5xl leading-[72px] text-white'>An enterprise template to ramp up your company website</h1>
                    <div className='mt-12 flex gap-6 items-center'>
                        <input type="text" placeholder='Your email address' className='placeholder:text-xl pl-8 placeholder:font-normal outline-none rounded-[240px] w-[370px] h-[56px] flex items-center' />
                        <Link href={"/"} className='bg-[#65E4A3] rounded-[56px] py-4 px-14 text-xl font-bold text-[#0A2640]'>Start now</Link>
                    </div>
                </div>
            </div>
            <footer className="bg-white text-[#777777] pt-24">
                <div className="container mx-auto px-24 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className=''>
                        <Link href={"/"} className='flex gap-3'>
                            <Image src={logo} alt='logo' />
                            <span className='font-bold text-[#0A2640] text-[43.5px]'>Boldo</span>
                        </Link>
                        <p className="text-base leading-7 font-normal mt-10 mb-16">
                            Social media validation business model canvas graphical user interface launch
                            party creative facebook iPad twitter.
                        </p>
                        <p className="text-base font-normal mt-4 pb-28">All rights reserved.</p>
                    </div>

                    <div className='flex gap-40 mt-6 ml-44'>
                        <div>
                            <h3 className="font-bold text-xl mb-8 text-black">Landings</h3>
                            <ul className="leading-[60px]">
                                <li><a href="#" className="hover:text-blue-800">Home</a></li>
                                <li><a href="#" className="hover:text-blue-800">Products</a></li>
                                <li><a href="#" className="hover:text-blue-800">Services</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl mb-8 text-black">Company</h3>
                            <ul className="leading-[60px]">
                                <li><a href="#" className="hover:text-blue-800">Home</a></li>
                                <li>
                                    <a href="#" className="flex items-center hover:text-blue-800">
                                        Careers
                                        <span className="bg-[#65E4A3] text-[#0A2640] text-sm font-bold ml-2 px-2 py-0.5 rounded-[120px]">
                                            Hiring!
                                        </span>
                                    </a>
                                </li>
                                <li><a href="#" className="hover:text-blue-800">Services</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl mb-8 text-black">Resources</h3>
                            <ul className="leading-[60px]">
                                <li><a href="#" className="hover:text-blue-800">Blog</a></li>
                                <li><a href="#" className="hover:text-blue-800">Products</a></li>
                                <li><a href="#" className="hover:text-blue-800">Services</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer