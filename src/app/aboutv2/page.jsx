import React from 'react';
import { User, User2, User3 } from '../../../public/images/index';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-emerald-400 text-white py-16 flex justify-between">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-black md:text-4xl font-medium">
            We love to make great <br />
            things, things that matter.
          </h1>
        </div>
        <div>
            <h3 className='text-black'>Funding handshake buyer business-to-business metrics iPad partnership. <br /> First mover advantage innovator success deployment non-disclosure.</h3>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-[#0A2640] text-center mb-4">
            Handshake infographic mass market <br />
            crowdfunding iteration
          </h2>
          <div className="grid grid-cols-1 text-[#0A2640] md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">120m</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10.000</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">240</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center mb-8">
            Handshake infographic mass market <br />
            crowdfunding iteration
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto">
            A handshake is a short ritual in which two people grasp each other's right hand, often 
            accompanied by a brief up and down movement of the grasped hands. Using a handshake 
            gesture or giving someone a handshake is a common nonverbal greeting and parting
            ritual in many parts of the world.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center mb-12">
            The people behind the work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Image src={User} alt="Team member" className=" w-[250px] h-[250px] rounded-md mx-auto mb-4" />
              <h3 className="font-semibold">Michael Scott</h3>
              <p className="text-gray-600">General Manager</p>
            </div>
            <div className="text-center">
              <Image src={User} alt="Team member" className="w-[250px] h-[250px] rounded-md mx-auto mb-4" />
              <h3 className="font-semibold">Michael Scott</h3>
              <p className="text-gray-600">General Manager</p>
            </div>
            <div className="text-center">
              <Image src={User} alt="Team member" className="w-[250px] h-[250px] rounded-md mx-auto mb-4" />
              <h3 className="font-semibold">Michael Scott</h3>
              <p className="text-gray-600">General Manager</p>
            </div>
          </div>
          <div className="ml-auto mr-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
  <div className="flex ml-auto mr-auto items-center space-x-4">
    <Image src={User2} alt="Team member" className="w-[120px] h-[120px] rounded-md" />
    <div>
      <h3 className="font-semibold text-sm">Dwight Schrute</h3>
      <p className="text-gray-600 text-sm">General Manager</p>
    </div>
  </div>
  <div className="ml-auto mr-auto flex items-center space-x-4">
    <Image src={User3} alt="Team member" className="w-[120px] h-[120px] rounded-md" />
    <div>
      <h3 className="font-semibold text-sm">Pam Beesly</h3>
      <p className="text-gray-600 text-sm">Software Manager</p>
    </div>
  </div>
  <div className=" ml-auto mr-auto flex items-center space-x-4">
    <Image src={User3} alt="Team member" className="w-[120px] h-[120px] rounded-md" />
    <div>
      <h3 className="font-semibold text-sm">Pam Beesly</h3>
      <p className="text-gray-600 text-sm">Software Manager</p>
    </div>
  </div>
  <div className="ml-auto mr-auto flex items-center space-x-4">
    <Image src={User3} alt="Team member" className="w-[120px] h-[120px] rounded-md" />
    <div>
      <h3 className="font-semibold text-sm">Pam Beesly</h3>
      <p className="text-gray-600 text-sm">Software Manager</p>
    </div>
  </div>
</div>

        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center mb-16">
            Value proposition accelerator product <br />
            management venture
          </h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            <hr />
            <div>

              <h3 className="text-xl mb-4">
                We are <span className="text-emerald-400">committed.</span>
              </h3>
              <p className="text-gray-400">
                To develop and discover innovations that shape future market conditions and provide 
                new opportunities in the crowdfunding sphere.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">
                We are <span className="text-emerald-400">responsible.</span>
              </h3>
              <p className="text-gray-400">
                Making digital financial strategies is always more important than simply collecting 
                money. Our philosophy ensures that your project runs smoothly.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">
                We aim for <span className="text-emerald-400">progress.</span>
              </h3>
              <p className="text-gray-400">
                Developing the market to create leverage. We come together to drive business teams 
                specifically where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;