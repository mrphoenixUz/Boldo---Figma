"use client"
import Image from 'next/image'
import React from 'react'
import rightFirst from "@/images/right-first.png"
import rightSecond from "@/images/right-second.png"
import rightThird from "@/images/right-third.png"
import logo from "@/images/logo.svg"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Hero = () => {
    const logos = [logo, logo, logo, logo, logo, logo, logo ];
    return (
        <div className='container mx-auto mt-16'>
            <div className='flex items-center justify-between mb-14'>
                <div className='max-w-[555px]'>
                    <h1 className='text-5xl font-normal text-white leading-[72px]'>Save time by building  fast with Boldo Template</h1>
                    <p className='text-base font-normal text-[#F1F1F1] mt-4 mb-10'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                    <div className='flex gap-6'>
                        <Link href={"/buy"} className='bg-[#65E4A3] rounded-[56px] py-4 px-14 text-xl font-bold text-[#0A2640]'>Buy template</Link>
                        <Link href={"/explore"} className='border-[2px] border-white rounded-[56px] py-4 px-14 text-white text-xl font-bold' >Explore</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <Image src={rightFirst} alt='imageStats' width={493} height={231} />
                    <div className='flex gap-10'>
                        <Image src={rightSecond} alt='imageStats' width={192} height={165} />
                        <Image src={rightThird} alt='imageStats' width={261} height={165} />
                    </div>
                </div>
            </div>
            <div className="w-full relative pb-20">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    pagination={false}
                    navigation={false}
                    // breakpoints={{
                    //     640: { slidesPerView: 2 },
                    //     1024: { slidesPerView: 3 },
                    // }}
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
                            <div className='flex gap-3'>
                                <Image src={logo} alt='logo' />
                                <span className='font-bold text-white text-[43.5px]'>Boldo</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Hero