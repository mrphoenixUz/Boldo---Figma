import stats from "@/images/stats.svg"
import man from "@/images/man.png"
import tick from "@/images/tick.svg"
import woman from "@/images/woman.png"
import pieStats from "@/images/pie-stats.svg"
import feather from "@/images/feather.svg"
import eye from "@/images/eye.svg"
import sun from "@/images/sun.svg"
import Image from "next/image";

const Matrix = () => {
    const metrics = [
        "We connect our customers with the best.",
        "Advisor success customer launch party.",
        "Business-to-consumer long tail."
    ];

    return (
        <div className="flex flex-col">
            <div className="container mx-auto py-6 lg:py-12 px-4 md:px-8 lg:px-24">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-36 items-center mb-16 lg:mb-28">
                    <div className="relative">
                        <div className="relative w-full md:w-[400px] lg:w-full aspect-square">
                            <div className="absolute inset-0 bg-pink-100 rounded-lg">
                                <Image
                                    src={man}
                                    alt="Business person on phone with growth chart"
                                    className="rounded-lg object-cover w-full h-full"
                                    width={494}
                                    height={506}
                                />
                            </div>
                        </div>

                        <div className="absolute -bottom-[60px] md:-bottom-[80px] lg:-bottom-[104px] left-1/2 md:left-[280px] lg:left-[345px] -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 box-content w-36 md:w-40 lg:w-48">
                            <div className="text-center flex items-center justify-center">
                                <Image src={stats} alt="stats" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-full md:max-w-[400px] lg:max-w-[500px] mt-20 md:mt-0">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-normal md:leading-[48px] lg:leading-[56px] mb-6 lg:mb-10">
                            We connect our customers with the best, and help them keep up-and stay open.
                        </h2>

                        <div className="mb-8 lg:mb-14">
                            {metrics.map((metric, index) => (
                                <div key={index} className="flex items-center mb-4 lg:mb-6">
                                    <Image src={tick} alt="tick" width={36} height={36} className="w-8 md:w-9 lg:w-auto" />
                                    <span className="font-normal text-base md:text-lg lg:text-xl ml-4 md:ml-5 lg:ml-7">{metric}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-[#0A2640] text-white px-8 md:px-10 lg:px-14 py-3 md:py-3.5 lg:py-4 rounded-[56px] font-bold text-lg lg:text-xl">
                            Start now
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto pt-20 md:pt-24 lg:pt-12 px-4 md:px-8 lg:px-24">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-36 items-center mb-16 lg:mb-28">
                    <div className="max-w-full md:max-w-[400px] lg:max-w-[500px]">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-normal md:leading-[48px] lg:leading-[56px] mb-6 lg:mb-10">
                            We connect our customers with the best, and help them keep up-and stay open.
                        </h2>

                        <div className="flex gap-3 md:gap-2 lg:gap-3 max-w-full bg-[#0A2640] text-white rounded-[4px]">
                            <Image src={feather} alt="feather" className="ml-3 md:ml-4 lg:ml-5" />
                            <p className="font-semibold text-sm md:text-base py-3 md:py-3.5 lg:py-4">We connect our customers with the best.</p>
                        </div>
                        <div className="flex gap-3 md:gap-2 lg:gap-3 max-w-full bg-white rounded-[4px] my-4 md:my-5 lg:my-6">
                            <Image src={eye} alt="eye" className="ml-3 md:ml-4 lg:ml-5" />
                            <p className="font-semibold text-sm md:text-base py-3 md:py-3.5 lg:py-4">Advisor success customer launch party.</p>
                        </div>
                        <div className="flex gap-3 md:gap-2 lg:gap-3 max-w-full bg-white rounded-[4px]">
                            <Image src={sun} alt="sun" className="ml-3 md:ml-4 lg:ml-5" />
                            <p className="font-semibold text-sm md:text-base py-3 md:py-3.5 lg:py-4">Business-to-consumer long tail.</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full md:w-[400px] lg:w-full aspect-square">
                            <div className="absolute inset-0 bg-pink-100 rounded-lg">
                                <Image
                                    src={woman}
                                    alt="Business person on phone with growth chart"
                                    className="rounded-lg object-cover w-full h-full"
                                    width={494}
                                    height={506}
                                />
                            </div>
                        </div>

                        <div className="absolute -bottom-[60px] md:-bottom-[80px] lg:-bottom-[104px] left-1/2 md:left-[160px] lg:left-[200px] -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 box-content w-36 md:w-40 lg:w-48">
                            <div className="text-center flex items-center justify-center">
                                <Image src={pieStats} alt="stats" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Matrix;