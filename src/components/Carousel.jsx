"use client";
import { useState, useEffect } from 'react';
import arrowRight from "@/images/arrow-right.svg";
import arrowLeft from "@/images/arrow-left.svg";
import albus from "@/images/albus.png";
import severus from "@/images/severus.png";
import harry from "@/images/harry.png";
import Image from 'next/image';

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);

    const testimonials = [
        {
            image: albus,
            quote: "Buyer buzz partner network disruptive non-disclosure agreement business",
            author: "Albus Dumbledore",
            position: "Manager @ Howarts"
        },
        {
            image: severus,
            quote: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
            author: "Severus Snape",
            position: "Manager @ Slytherin"
        },
        {
            image: harry,
            quote: "Release facebook responsive web design business model canvas seed money monetization.",
            author: "Harry Potter",
            position: "Team Leader @ Gryffindor"
        },
        {
            image: harry,
            quote: "Network effects business model canvas seed money validation ecosystem bootstrapping.",
            author: "Hermione Granger",
            position: "Developer @ Gryffindor"
        },
        {
            image: harry,
            quote: "Strategy freemium interaction design partnership equity business plan canvas.",
            author: "Ron Weasley",
            position: "Lead Researcher @ Gryffindor"
        }
    ];

    useEffect(() => {
        const updateVisibleSlides = () => {
            setVisibleSlides(window.innerWidth >= 1024 ? 3 : 1);
        };

        updateVisibleSlides();
        window.addEventListener('resize', updateVisibleSlides);
        return () => window.removeEventListener('resize', updateVisibleSlides);
    }, []);

    const nextSlide = () => {
        if (currentIndex < testimonials.length - visibleSlides) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(testimonials.length - visibleSlides);
        }
    };

    return (
        <div className="bg-[#0A2640] mx-auto container py-8 sm:py-12 lg:py-16 px-4 my-8 sm:my-12 lg:my-[122px]">
            <div className="px-4 sm:px-8 md:px-16 lg:px-40">
                <div className="flex flex-col xl:flex-row lg:justify-between lg:items-center mb-8 lg:mb-12 gap-6 lg:gap-0">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-normal sm:leading-tight lg:leading-[72px] max-w-full lg:max-w-[716px]">
                        An enterprise template to ramp up your company website
                    </h2>

                    <div className="flex gap-4 justify-center lg:justify-start">
                        <button
                            onClick={prevSlide}
                            className="p-2 sm:p-3 lg:p-4 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <Image src={arrowLeft} alt="arrow-left" width={36} height={36} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 sm:p-3 lg:p-4 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <Image src={arrowRight} alt="arrow-right" width={36} height={36} />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out items-start gap-4 sm:gap-5"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-full xl:w-1/3 lg:w-1/2 flex-shrink-0"
                            >
                                <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg h-full">
                                    <blockquote className="mb-6 sm:mb-8 lg:mb-10 text-lg sm:text-xl lg:text-2xl max-w-full lg:max-w-[270px] font-normal leading-normal sm:leading-relaxed lg:leading-9">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <Image
                                            src={testimonial.image}
                                            width={58}
                                            height={58}
                                            alt={testimonial.author}
                                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[58px] lg:h-[58px] rounded-full"
                                        />
                                        <div>
                                            <div className="font-bold text-sm sm:text-base text-[#0A2640]">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-[#0A2640] text-xs sm:text-sm font-normal">
                                                {testimonial.position}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
