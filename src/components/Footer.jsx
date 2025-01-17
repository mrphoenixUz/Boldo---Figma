import React from 'react';
import logo from "@/images/logo.svg";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            {/* Newsletter Section */}
            <div className='bg-[#0A2640] px-4 md:px-8'>
                <div className='container mx-auto'>
                    <div className='max-w-[716px] py-12 md:py-20 mx-auto text-center'>
                        <h1 className='font-normal text-3xl md:text-5xl leading-tight md:leading-[72px] text-white'>
                            An enterprise template to ramp up your company website
                        </h1>
                        <div className='mt-8 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center'>
                            <input
                                type="text"
                                placeholder='Your email address'
                                className='placeholder:text-lg md:placeholder:text-xl pl-6 md:pl-8 placeholder:font-normal 
                                         outline-none rounded-[240px] w-full md:w-[370px] h-[56px] flex items-center'
                            />
                            <Link
                                href={"/"}
                                className='bg-[#65E4A3] rounded-[56px] py-4 px-8 md:px-14 text-lg md:text-xl 
                                         font-bold text-[#0A2640] w-full md:w-auto text-center'
                            >
                                Start now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-white text-[#777777] pt-12 md:pt-24 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Logo and Description */}
                        <div className=''>
                            <Link href={"/"} className='flex gap-3 justify-center md:justify-start'>
                                <Image src={logo} alt='logo' />
                                <span className='font-bold text-[#0A2640] text-3xl md:text-[43.5px]'>Boldo</span>
                            </Link>
                            <p className="text-base leading-7 font-normal mt-6 md:mt-10 mb-8 md:mb-16 text-center md:text-left">
                                Social media validation business model canvas graphical user interface launch
                                party creative facebook iPad twitter.
                            </p>
                            <p className="text-base font-normal pb-8 md:pb-28 text-center md:text-left">
                                All rights reserved.
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div className='col-span-1 md:col-span-3'>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
                                {/* Landings */}
                                <div className='text-center md:text-left'>
                                    <h3 className="font-bold text-xl mb-4 md:mb-8 text-black">Landings</h3>
                                    <ul className="space-y-4 md:space-y-6">
                                        <li><a href="#" className="hover:text-blue-800">Home</a></li>
                                        <li><a href="#" className="hover:text-blue-800">Products</a></li>
                                        <li><a href="#" className="hover:text-blue-800">Services</a></li>
                                    </ul>
                                </div>

                                {/* Company */}
                                <div className='text-center md:text-left'>
                                    <h3 className="font-bold text-xl mb-4 md:mb-8 text-black">Company</h3>
                                    <ul className="space-y-4 md:space-y-6">
                                        <li><a href="#" className="hover:text-blue-800">Home</a></li>
                                        <li>
                                            <a href="#" className="inline-flex items-center justify-center md:justify-start hover:text-blue-800">
                                                Careers
                                                <span className="bg-[#65E4A3] text-[#0A2640] text-sm font-bold ml-2 px-2 py-0.5 rounded-[120px]">
                                                    Hiring!
                                                </span>
                                            </a>
                                        </li>
                                        <li><a href="#" className="hover:text-blue-800">Services</a></li>
                                    </ul>
                                </div>

                                {/* Resources */}
                                <div className='text-center md:text-left'>
                                    <h3 className="font-bold text-xl mb-4 md:mb-8 text-black">Resources</h3>
                                    <ul className="space-y-4 md:space-y-6">
                                        <li><a href="#" className="hover:text-blue-800">Blog</a></li>
                                        <li><a href="#" className="hover:text-blue-800">Products</a></li>
                                        <li><a href="#" className="hover:text-blue-800">Services</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;