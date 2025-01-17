'use client';

import Image from "next/image";
import { Blog1, Blog2, Blog3, Blog4, Blog5, Blog6, Main_bg } from "../../../public/images/index";

const BlogComponent = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <span className="text-sm text-gray-600">Blog</span>
          <h1 className="text-4xl font-bold mb-8">Thoughts and words</h1>
          
          {/* Featured Post */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={Main_bg}
                alt="Featured post" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-600">Category</span>
                <span className="text-sm text-gray-600">November 22, 2021</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Pitch termsheet backing validation focus release
              </h2>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                <span className="text-sm text-gray-700">Chandler Bing</span>
              </div>
            </div>
          </div>
        </div>
  <hr />
  <br /><br />
        {/* Latest News Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Latest news</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={Blog1}
                  alt="Blog post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="text-sm text-gray-600">November 22, 2021</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Pitch termsheet backing validation focus release
                </h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-sm text-gray-700">Chandler Bing</span>
                </div>
              </div>
            </div>
  
            {/* Blog Post 2 */}
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={Blog2}
                  alt="Blog post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="text-sm text-gray-600">November 22, 2021</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Seed round direct mailing non-disclosure agreement graphical user interface rockstar
                </h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-sm text-gray-700">Rachel Green</span>
                </div>
              </div>
            </div>
  
            {/* Blog Post 3 */}
            
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={Blog3}
                  alt="Blog post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="text-sm text-gray-600">November 22, 2021</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Beta prototype sales iPad gen-z marketing network effects value proposition
                </h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-sm text-gray-700">Monica Geller</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={Blog4}
                  alt="Blog post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="text-sm text-gray-600">November 22, 2021</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Beta prototype sales iPad gen-z marketing network effects value proposition
                </h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-sm text-gray-700">Monica Geller</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={Blog5}
                  alt="Blog post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="text-sm text-gray-600">November 22, 2021</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Beta prototype sales iPad gen-z marketing network effects value proposition
                </h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-sm text-gray-700">Monica Geller</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={Blog6}
                  alt="Blog post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="text-sm text-gray-600">November 22, 2021</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Beta prototype sales iPad gen-z marketing network effects value proposition
                </h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-sm text-gray-700">Monica Geller</span>
                </div>
              </div>
            </div>
          </div>

          
  
          <div className="text-center mt-8">
            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              Load more
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogComponent;