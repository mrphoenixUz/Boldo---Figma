"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "@/images/logo.svg"
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='bg-[#0A2640] text-white'>
            <div className='container mx-auto px-4 lg:px-24 py-4'>
                <div className='flex justify-between items-center'>
                    <Link href={"/"} className='flex gap-3'>
                        <Image src={logo} alt='logo' />
                        <span className='font-bold text-[43.5px]'>Boldo</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className='hidden lg:flex items-center gap-10'>
                        <a href="#" className='text-base font-semibold hover:text-gray-200 transition-colors'>
                            Product
                        </a>
                        <Link href={"/blog"} className='text-base font-semibold hover:text-gray-200 transition-colors'>
                            Blog
                        </Link>
                        <Link href={"/about"} className='text-base font-semibold hover:text-gray-200 transition-colors'>
                            About
                        </Link>
                        <a
                            href="/login"
                            className='py-2 px-10 bg-white text-[#0A2640] rounded-3xl font-bold 
                                     hover:bg-gray-100 transition-colors'
                        >
                            Log In
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='lg:hidden z-20'
                        aria-label='Toggle menu'
                    >
                        {isMenuOpen ? (
                            <X className='w-6 h-6' />
                        ) : (
                            <Menu className='w-6 h-6' />
                        )}
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={`fixed inset-0 bg-[#0A2640] lg:hidden transition-transform duration-300 ease-in-out z-10
                                  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <div className='flex flex-col items-center justify-center h-full gap-8'>
                            <a
                                href="#"
                                className='text-xl font-semibold hover:text-gray-200 transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Product
                            </a>
                            <a
                                href="#"
                                className='text-xl font-semibold hover:text-gray-200 transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a
                                href="/about"
                                className='text-xl font-semibold hover:text-gray-200 transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="/login"
                                className='py-2 px-10 bg-white text-[#0A2640] rounded-3xl font-bold 
                                         hover:bg-gray-100 transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Log In
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;