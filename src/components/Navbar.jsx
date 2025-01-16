import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/images/logo.svg"

const Navbar = () => {
    return (
        <div className='container mx-auto text-white flex justify-between items-center'>
            <Link href={"/"} className='flex gap-3'>
                <Image src={logo} alt='logo' />
                <span className='font-bold text-[43.5px]'>Boldo</span>
            </Link>
            <ul className='flex justify-between gap-10 items-center'>
                <li className='text-base font-semibold'>Product</li>
                <li className='text-base font-semibold'>Services</li>
                <li className='text-base font-semibold'>About</li>
                <Link href={"/login"} className='py-2 px-10 bg-white text-[#0A2640] rounded-3xl font-bold'>Log In</Link>
            </ul>
        </div>
    )
}

export default Navbar