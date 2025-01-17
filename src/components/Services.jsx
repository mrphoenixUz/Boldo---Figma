import React from 'react';
import cool from "@/images/cool.png"
import cooler from "@/images/cooler.png"
import coolest from "@/images/coolest.png"
import arrowRight from "@/images/arrow-right.svg"
import Image from 'next/image';

const ServiceCard = ({ title, description, imgContent }) => (
    <div className="flex flex-col p-4 sm:p-6 bg-white rounded-lg">
        <div className="w-full">
            <Image
                src={imgContent}
                alt={title}
                className="w-full h-auto"
            />
        </div>
        <h3 className="text-xl sm:text-2xl font-normal mb-2 sm:mb-3 mt-4 sm:mt-6">{title}</h3>
        <p className="text-base sm:text-xl text-[#777777] mb-4 sm:mb-7 font-normal">{description}</p>
        <a
            href="#"
            className="inline-flex items-center gap-2 sm:gap-3 text-[#0A2640] hover:text-gray-900 font-bold text-lg sm:text-xl"
        >
            Explore page
            <Image src={arrowRight} alt='arrowRight' />
        </a>
    </div>
);

const Services = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 md:mb-20 max-w-[842px] mx-auto flex flex-col">
                <h2 className="text-lg sm:text-xl font-normal text-[#777777] mt-10 sm:mt-16 md:mt-20 mb-2 sm:mb-3">
                    Our Services
                </h2>
                <p className="text-2xl sm:text-4xl md:text-5xl font-normal leading-tight sm:leading-[72px]">
                    Handshake infographic mass market crowdfunding iteration.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <ServiceCard
                    title="Cool feature title"
                    description="Learning curve network effects return on investment."
                    imgContent={cool}
                />
                <ServiceCard
                    title="Even cooler feature"
                    description="Learning curve network effects return on investment."
                    imgContent={cooler}
                />
                <ServiceCard
                    title="Cool feature title"
                    description="Learning curve network effects return on investment."
                    imgContent={coolest}
                />
            </div>
        </section>
    );
};

export default Services;