import React from "react";
import man from "@/images/man.png";
import category from "@/images/category.png";
import woman from "@/images/woman.png";
import cool from "@/images/cool.png";
import group from "@/images/group.png";
import shapkalibrat from "@/images/shapkalibrat.png";
import kastimlibrat from "@/images/kastmlibrat.png";
import zorbratbrat from "@/images/zorbrat.png";
import blog1 from "@/images/blog1.png";
import blog2 from "@/images/blog2.png";
import blog3 from "@/images/blog3.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#0a192f] text-white pb-20">
        <div className="max-w-6xl mx-auto px-4 pt-8 text-center">
          <p className="text-sm mb-8">About</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium max-w-4xl mx-auto leading-tight mb-6">
            We love to make great things, things that matter.
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto px-4 -mt-16">
        <div className="grid grid-cols-12 gap-4">
          {/* First row */}
          <div className="col-span-4">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={man}
                alt="Blog post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-5">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={woman}
                alt="Blog post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="rounded-2xl overflow-hidden bg-[#4ade80]">
              <Image
                src={cool}
                alt="Blog post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="col-span-3">
            <div className="rounded-2xl overflow-hidden bg-[#60a5fa]">
              <Image
                src={category}
                alt="Blog post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-5">
            {/* This is intentionally empty to maintain grid layout */}
          </div>
          <div className="col-span-4">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={group}
                alt="Blog post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className=" text-center max-w-6xl mx-auto  py-20">
        <p className="text-sm text-gray-600 mb-4">Our story</p>
        <h2 className="text-3xl font-medium mb-6">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
        <p className="text-gray-600 ">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.
        </p>
      </div>
      <div className="w-full">
        {/* Stats Section */}
        <section className="bg-[#0a192f] text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm mb-4">Our numbers</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-16 max-w-2xl mx-auto">
              Handshake infographic mass market crowdfunding iteration.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[#4ade80] text-5xl md:text-6xl font-medium mb-2">
                  120m
                </p>
                <p className="text-gray-400">Cool feature title</p>
              </div>
              <div>
                <p className="text-[#4ade80] text-5xl md:text-6xl font-medium mb-2">
                  10.000
                </p>
                <p className="text-gray-400">Cool feature title</p>
              </div>
              <div>
                <p className="text-[#4ade80] text-5xl md:text-6xl font-medium mb-2">
                  240
                </p>
                <p className="text-gray-400">Cool feature title</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm text-gray-600 mb-4">Our team</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              The leadership team
            </h2>
            <p className="text-gray-600 mb-16 max-w-2xl">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-8 text-center md:text-left">
                <Image
                  src={shapkalibrat}
                  alt="Blog post"
                  className="w-full h-auto rounded-2xl mb-4"
                />
                <Image
                  src={kastimlibrat}
                  alt="Blog post"
                  className="w-full h-auto rounded-2xl mb-4"
                />
                <Image
                  src={zorbratbrat}
                  alt="Blog post"
                  className="w-full h-auto rounded-2xl mb-4"
                />
                <div className="rounded-2xl overflow-hidden mb-4 bg-gray-100"></div>
                <h3 className="text-xl font-medium mb-1"></h3>
                <p className="text-gray-600"></p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#0B1B2B] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm mb-2">Our values</p>
            <h2 className="text-white text-4xl font-medium">
              Things in we believe
            </h2>
            <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 ">
            {/* First Value */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="">
                <Image src={blog1} alt="Blog post" />
              </div>
              <div>
                <h3 className="text-white text-xl font-medium mb-2">
                  We are commited.
                </h3>
                <p className="text-gray-400">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.
                </p>
              </div>
            </div>

            {/* Second Value */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="">
                <Image src={blog2} alt="Blog post" />
              </div>
              <div>
                <h3 className="text-white text-xl font-medium mb-2">
                  We are responsible.
                </h3>
                <p className="text-gray-400">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.
                </p>
              </div>
            </div>

            {/* Third Value */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="">
                <Image src={blog3} alt="Blog post" />
              </div>
              <div>
                <h3 className="text-white text-xl font-medium mb-2">
                  We aim for progress.
                </h3>
                <p className="text-gray-400">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
