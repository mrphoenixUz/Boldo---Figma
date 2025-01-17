import Image from 'next/image'
import React from 'react'
import atm from "@/images/atm.png"
import arrowBottom from "@/images/arrow-bottom.svg"

const Atm = () => {
    const features = [
        "We connect our customers with the best?",
        "Android research & development rockstar?"
    ]

    return (
        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-52 py-8 sm:py-12 md:py-16'>
            <div className="relative w-full aspect-[16/9] md:aspect-[16/8]">
                <Image 
                    src={atm} 
                    alt='atmosphere'
                    className="rounded-lg object-cover w-full h-full"
                    priority
                />
            </div>

            <div className='mt-8 sm:mt-10 md:mt-14 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-[100px]'>
                <h1 className='font-normal max-w-full lg:max-w-[500px] text-2xl sm:text-3xl md:text-4xl leading-normal sm:leading-relaxed md:leading-[56px]'>
                    We connect our customers with the best, and help them keep up-and stay open.
                </h1>

                <div className='flex flex-col gap-4'>
                    {features.map((text, index) => (
                        <div 
                            key={index}
                            className='flex justify-between items-center p-4 sm:p-6 hover:bg-[#0A2640] hover:text-white transition-colors cursor-pointer group'
                        >
                            <p className='text-base sm:text-lg font-medium pr-10'>{text}</p>
                            <Image 
                                src={arrowBottom} 
                                alt='arrow-bottom'
                                className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:rotate-180 group-hover:brightness-200" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Atm