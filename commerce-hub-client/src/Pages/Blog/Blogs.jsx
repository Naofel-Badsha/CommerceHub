import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";
import Heading from "../../Components/Heading";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      date: '06 July, 2025',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop', // ডামি ইমেজ ইউআরএল (আপনার ইমেজ দিয়ে পরিবর্তন করে নিবেন)
      categories: ['Fashion', 'Life Style', 'News'],
      title: 'Fast fashion: How clothes are linked to climate change',
    },
    {
      id: 2,
      date: '04 April, 2024',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
      categories: ['Fashion', 'Life Style', 'News'],
      title: 'Minimal Design Trends That Are Shaping the Digital World',
    },
    {
      id: 3,
      date: '18 July, 2023',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop',
      categories: ['Fashion', 'Life Style', 'News'],
      title: 'Smart Gadgets in Modern Life: Design, Innovation, and Impact',
    },
  ];
  return (
    <section className="py-20 px-4 container mx-auto font-sans bg-white">
      {/*----------Header---------*/}
      <Heading
        subtitle="Our Blog & News"
        title="Latest News & Articles" />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-14">
        {blogs.map((blog) => (
          <div key={blog.id} className="group cursor-pointer bg-[#fff] p-4 shadow border border-gray-200 rounded-xl">
            {/*-----------Date------Tag-------*/}
            <div className="relative overflow-hidden mb-4 aspect-[4/3]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
              />
              <span className="absolute top-3 right-3 bg-white text-[14px] font-medium text-gray-700 py-1 px-2 shadow-sm">
                {blog.date}
              </span>
            </div>

            {/*---------Tag-------Category--------- */}
            <div className="py-4">
              <div className="flex items-center justify-center gap-1 text-xs text-[#44606a] mb-2 ">
                <FaTag />
                <span className="text-[15px] text-[#44606a] font-medium">{blog.categories.join(', ')}</span>
              </div>
              <h3 className="text-xl text-center font-semibold text-[#44606a] leading-snug group-hover:text-[#00B3B0] transition-colors duration-300">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/*------------DiscoverMore----Button--------*/}
      <Link to={"/blogs"}>
        <div className="text-center">
          <button className="border rounded-full border-[#00B3B0] text-[#44606a] text-md font-semibold capitalize tracking-wider py-3.5 px-8 hover:bg-[#00B3B0] hover:text-white transition-colors duration-300 cursor-pointer">
            Discover More
          </button>
        </div>
      </Link>
    </section>
  )
}

export default Blogs
