import Image from 'next/image';
import chandler from '@/images/chandler.png';
import rachel from '@/images/rachel.png';
import monica from '@/images/monica.png';
import blogImage1 from '@/images/cool.png';
import blogImage2 from '@/images/woman.png';
import blogImage3 from '@/images/category.png';

const BlogCard = ({ category, date, title, author, authorImage, image }) => (
    <div className="flex flex-col">
        <div className="relative w-full aspect-[4/3] mb-6">
            <Image
                src={image}
                alt={title}
                className="rounded-2xl object-cover w-full h-full"
            />
        </div>
        <div className="space-y-3">
            <div className="flex items-center gap-4">
                <span className="text-base font-bold text-[#0A2640]">Category</span>
                <span className="text-base font-normal text-[#777777]">{date}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-normal leading-tight max-w-[300px] sm:leading-relaxed">
                {title}
            </h3>
            <div className="flex items-center gap-3">
                <Image
                    src={authorImage}
                    alt={author}
                    width={32}
                    height={32}
                    className="rounded-full"
                />
                <span className="text-base font-normal">{author}</span>
            </div>
        </div>
    </div>
);

const Blog = () => {
    const blogPosts = [
        {
            category: "Category",
            date: "November 22, 2021",
            title: "Pitch termsheet backing validation focus release.",
            author: "Chandler Bing",
            authorImage: chandler,
            image: blogImage1
        },
        {
            category: "Category",
            date: "November 22, 2021",
            title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
            author: "Rachel Green",
            authorImage: rachel,
            image: blogImage2
        },
        {
            category: "Category",
            date: "November 22, 2021",
            title: "Beta prototype sales iPad gen-z marketing network effects value proposition",
            author: "Monica Geller",
            authorImage: monica,
            image: blogImage3
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-xl sm:text-2xl font-normal text-[#777777]">Our Blog</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-normal leading-tight sm:leading-snug md:leading-[72px] max-w-[842px] mx-auto">
                        Value proposition accelerator product management venture
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            category={post.category}
                            date={post.date}
                            title={post.title}
                            author={post.author}
                            authorImage={post.authorImage}
                            image={post.image}
                        />
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                    <button className="px-14 py-4 border-2 border-[#0A2640] text-[#0A2640] rounded-[56px] font-bold text-xl hover:bg-[#0A2640] hover:text-white transition-colors">
                        Load more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;