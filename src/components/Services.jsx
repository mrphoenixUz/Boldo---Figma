import React from 'react';
import cool from "@/images/cool.png"
import cooler from "@/images/cooler.png"
import coolest from "@/images/coolest.png"
import Image from 'next/image';


const ServiceCard = ({ title, description, imgContent }) => (
    <div className="flex flex-col p-6 bg-white rounded-lg">
        <Image src={imgContent} alt='title' />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
            href="#"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium"
        >
            Explore page
            <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </a>
    </div>
);

const Services = () => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-[842px] mx-auto flex flex-col">
                <h2 className="text-xl font-normal text-[#777777] mt-20 mb-3">Our Services</h2>
                <p className="text-5xl font-normal leading-[72px]">
                    Handshake infographic mass market crowdfunding iteration.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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