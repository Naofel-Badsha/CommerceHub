
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaVimeoV, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  // মেনু ডাটা গ্রুপ
  const footerLinks = [
    {
      title: "Shopping",
      links: ["Wishlist", "Shop by Brand", "Offers", "Track order", "Size Guide"]
    },
    {
      title: "Infomation",
      links: ["Track Order", "Shipping & Returns", "About us", "Help", "Gift Cards"]
    },
    {
      title: "Account",
      links: ["Cart", "My account", "My orders", "Wishlist", "Affiliate Program"]
    }
  ];

  //----------Social---mediea------------------
  const socialLinks = [
    { id: 1, icon: <FaFacebookF size={14} />, href: "#" },
    { id: 2, icon: <FaTwitter size={14} />, href: "#" },
    { id: 3, icon: <FaLinkedinIn size={14} />, href: "#" },
    { id: 4, icon: <FaVimeoV size={14} />, href: "#" },
  ];


  // স্ক্রল টু টপ ফাংশন
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-[#F4F4F4] pt-20 pb-10 mt-5 relative text-[#233238]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">

        {/* প্রধান ৫-কলাম গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 lg:gap-6 pb-16 border-b border-gray-300">

          {/* ১ম কলাম: ব্র্যান্ড লোগো এবং কন্টাক্ট ইনফো */}
          <div className="flex flex-col gap-5">
            <div className="">
              <Link to="/" >
                <img className='w-[45px] ' src="https://i.ibb.co.com/B5rFVKRT/Chat-GPT-Image-Jun-12-2026-05-56-25-PM-removebg-preview.png" alt="" />
                <h2 className="text-[18px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00B3B0] via-[#004276] to-[#004276]">
                  CommerceHub
                </h2>
              </Link>
            </div>

            <div className="flex flex-col gap-4 text-sm text-gray-600 mt-2">
              <div className="flex items-center gap-2">
                <MdOutlineMailOutline size={18} className="text-gray-400" />
                <a href="mailto:Bazaro@gmail.com" className="hover:text-black transition-colors">commercehub@gmail.com</a>
              </div>
              <div className="flex items-start gap-2 max-w-[220px]">
                <IoLocationOutline size={20} className="text-gray-400 shrink-0 mt-0.5" />
                <span>29 SE 2nd Ave, Miami Florida 44041, United States</span>
              </div>
            </div>

            <div className="text-xl font-bold text-black mt-2">
              (+92) 413 90 762
            </div>
          </div>

          {/* ২য়, ৩য় এবং ৪থ কলাম: ডাইনামিক মেনু লিংক */}
          {footerLinks.map((group, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h4 className="font-bold text-xl tracking-wide text-black">{group.title}</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-600">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="flex items-center gap-2 group cursor-pointer">
                    <span className="w-1 h-1 rounded-full bg-gray-400 transition-colors group-hover:bg-[#00B3B0]"></span>
                    <a href="#" className="hover:text-[#00B3B0] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ৫ম কলাম: সাবস্ক্রিপশন এবং সোশ্যাল লিংক */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl tracking-wide text-black">Subcribe.</h4>
            <p className="text-sm text-gray-600">Our conversation is just getting started</p>

            {/* সাবস্ক্রাইব ইনপুট বক্স */}
            <div className="flex items-center w-full mt-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-white px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-300"
              />
              <button className="bg-[#00B3B0] text-white text-xs font-bold px-6 py-[15px] hover:bg-black transition-colors uppercase tracking-wider cursor-pointer">
                Subscribe
              </button>
            </div>

            {/* সোশ্যাল আইকনসমূহ */}
            <div className="mt-4">
              <span className="text-md font-bold block mb-3 text-black">Follow Us On</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    className="w-8 h-8 bg-white flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#00B3B0] hover:shadow-sm transition-all rounded-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ফুটার বটম পার্ট (কপিরাইট এবং পেমেন্ট গেটওয়ে) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-sm text-gray-500">
          <div>
            All rights reserved — 2026 © <span className="font-medium text-black hover:underline cursor-pointer">Themepure</span>
          </div>

          {/* পেমেন্ট আইকন গ্রুপিং */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
              <div className=" flex items-center justify-center ">
                <img src="https://i.ibb.co.com/Jwt3J3Rt/imageye-imgi-102-payment.webp" alt="Payment Images" className="max-w-full max-h-full  cursor-pointer" />
              </div>
          </div>
        </div>

      </div>

      {/* ব্যাক টু টপ বাটন (স্ক্রিনশটের মতো নিচে ডান পাশে ফিক্সড/অ্যাবসলিউট) */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-8 md:right-10 md:bottom-8 w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-50 transition-all cursor-pointer group"
      >
        <FaArrowUp size={14} className="transform transition-transform group-hover:-translate-y-0.5" />
      </button>
    </footer>
  )
}

export default Footer
