"use client"
import Image from 'next/image'
import React from 'react'
import rightFirst from "@/images/right-first.png"
import rightSecond from "@/images/right-second.png"
import rightThird from "@/images/right-third.png"
import logo from "@/images/logo.svg"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Hero = () => {
    const logos = [logo, logo, logo, logo, logo, logo, logo];

    return (
        <div className='bg-[#0A2640] px-4 md:px-8 lg:px-24'>
            <div className='container mx-auto pt-8 md:pt-16'>
                {/* Main Content Section */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-8 lg:mb-14'>
                    {/* Left Content */}
                    <div className='max-w-full lg:max-w-[555px] text-center lg:text-left'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight lg:leading-[72px]'>
                            Save time by building fast with Boldo Template
                        </h1>
                        <p className='text-base font-normal text-[#F1F1F1] mt-4 mb-6 lg:mb-10'>
                            Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start'>
                            <Link
                                href={"/buy"}
                                className='bg-[#65E4A3] rounded-[56px] py-3 md:py-4 px-8 md:px-14 
                                         text-lg md:text-xl font-bold text-[#0A2640] text-center'
                            >
                                Buy template
                            </Link>
                            <Link
                                href={"/explore"}
                                className='border-[2px] border-white rounded-[56px] py-3 md:py-4 
                                         px-8 md:px-14 text-white text-lg md:text-xl font-bold text-center'
                            >
                                Explore
                            </Link>
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className='flex flex-col gap-4 md:gap-6 w-full lg:w-auto'>
                        <div className='w-full'>
                            <Image
                                src={rightFirst}
                                alt='imageStats'
                                className='w-full h-auto'
                                style={{ maxWidth: '493px', margin: '0 auto' }}
                                priority
                            />
                        </div>
                        <div className='flex gap-4 md:gap-10 justify-center'>
                            <Image
                                src={rightSecond}
                                alt='imageStats'
                                className='w-[45%] md:w-auto h-auto'
                                style={{ maxWidth: '192px' }}
                            />
                            <Image
                                src={rightThird}
                                alt='imageStats'
                                className='w-[55%] md:w-auto h-auto'
                                style={{ maxWidth: '261px' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Logo Carousel */}
                <div className="w-full relative pb-10 md:pb-20">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        grabCursor={true}
                        loop={true}
                        pagination={false}
                        navigation={false}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                        }}
                        onSlideChangeTransitionEnd={(swiper) => {
                            const slides = swiper.slides;
                            slides.forEach((slide, index) => {
                                const diff = Math.abs(swiper.activeIndex - index);
                                const scale = diff === 0 ? 1 : diff === 1 ? 0.8 : 0.6;
                                const opacity = diff === 0 ? 1 : diff === 1 ? 0.6 : 0.3;

                                slide.style.transform = `scale(${scale})`;
                                slide.style.opacity = `${opacity}`;
                            });
                        }}
                    >
                        {logos.map((logo, index) => (
                            <SwiperSlide
                                key={index}
                                className="transition-all duration-300 flex justify-center"
                            >
                                <div className='flex items-center gap-2 md:gap-3'>
                                    <Image src={logo} alt='logo' className='w-8 md:w-auto' />
                                    <span className='font-bold text-white text-2xl md:text-[43.5px]'>
                                        Boldo
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Hero