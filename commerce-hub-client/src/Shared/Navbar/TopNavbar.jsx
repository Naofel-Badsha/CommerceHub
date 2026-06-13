
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TopNavbar = () => {
  const socialLinks = [
    { id: 1, href: "https://facebook.com", icon: <FaFacebookF size={13} /> },
    { id: 2, href: "https://twitter.com", icon: <FaTwitter size={13} /> },
    { id: 3, href: "https://youtube.com", icon: <FaYoutube size={14} /> },
    { id: 4, href: "https://linkedin.com", icon: <FaLinkedinIn size={13} /> },
    { id: 5, href: "https://instagram.com", icon: <FaInstagram size={13} /> },
  ];

  return (
    <div className='bg-[#00B3B0] border-b border-[#0d8a88]'>
      <div className="container m-auto text-xs py-2 px-4 sm:px-8   flex flex-col md:flex-row justify-between items-center gap-2  ">

        {/*--------Right-----Side---------*/}
        <div className="font-medium text-center md:text-left w-full md:w-auto">
          Get Up to <span className="text-white font-bold">30% OFF</span> Store wide – Limited time only
        </div>

        {/*---------Left--------Side---------*/}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 divide-x divide-gray-600">

          {/*-------------Navifgation----Link----------*/}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <a href="#newsletter" className="hover:text-white transition-colors duration-200">Newsletter</a>
            <a href="#trace-order" className="pl-3 sm:pl-4 hover:text-white transition-colors duration-200">Trace order</a>
            <a href="#contact-us" className="pl-3 sm:pl-4 hover:text-white transition-colors duration-200">Contact us</a>
            <a href="#sitemap" className="pl-3 sm:pl-4 hover:text-white transition-colors duration-200">Sitemap</a>
          </div>

          {/*-----------Social---------Icons-----------------*/}
          <div className="flex items-center gap-3 pl-3 sm:pl-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00B3B0] transition-colors duration-200 bg-[#E5E7EB] p-1.5 rounded-full"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopNavbar
