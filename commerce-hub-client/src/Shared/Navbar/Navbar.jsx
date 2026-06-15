import { useEffect, useState } from 'react';
import { FaMoon, FaRegHeart, FaSearch, FaSun, FaUser } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';
import { TiShoppingCart } from 'react-icons/ti';
import { Link, NavLink } from 'react-router-dom';
import TopNavbar from './TopNavbar';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if (saved === "light") {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;

        if (darkMode) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'Shop', to: '/shop' },
        { name: 'About', to: '/about' },
        { name: 'Blogs', to: '/blogs' },
        { name: 'Contact', to: '/contact' },
    ];
    return (
        <>
            <TopNavbar />
            <nav className="bg-white shadow-sm w-full z-50 sticky top-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">

                        {/*----------------Logo Section--------------------*/}
                        <div className="">
                            <Link to="/" >
                                <img className='w-[45px] m-auto' src="https://i.ibb.co.com/B5rFVKRT/Chat-GPT-Image-Jun-12-2026-05-56-25-PM-removebg-preview.png" alt="" />
                                <h2 className="text-[18px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00B3B0] via-[#004276] to-[#004276]">
                                    CommerceHub
                                </h2>
                            </Link>
                        </div>

                        {/*--------------Desktop Menu---------------*/}
                        <div className="hidden lg:flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `font-medium transition-colors ${isActive ? "text-[#00B3B0] border-b-2 text-[#00B3B0]" : "text-gray-700 hover:text-[#00B3B0]"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>


                        <div className='flex items-center justify-center gap-2 md:gap-5'>
                            {/*-----------NightMode-Darkmode and Search--------*/}
                            <div className='flex items-center justify-center gap-4'>
                                {/*-------------Search-----------*/}
                                <div className='hidden lg:flex'>
                                    <button className=" hover:text-[#00B3B0] cursor-pointer transition-all relative">
                                        <FaSearch size={20} />
                                    </button>

                                </div>
                                {/*--------------User----Icon------*/}
                                <div className='flex gap-4'>
                                    <span>
                                        <Link to="/login">
                                            <button className=" hover:text-[#00B3B0] cursor-pointer transition-all">
                                                <FaUser size={20} />
                                            </button>
                                        </Link>
                                    </span>
                                    <span className="">
                                        <button className=" hover:text-[#00B3B0] cursor-pointer transition-all relative">
                                            <TiShoppingCart size={20} /> <sup className='text-sm inline-block w-[20px] h-[20px]  text-white rounded-full bg-[var(--primary)] absolute -mt-1'>0</sup>
                                        </button>
                                    </span>
                                    <span className="">
                                        <button className=" hover:text-[#00B3B0] cursor-pointer transition-all relative">
                                            <FaRegHeart size={20} /><sup className='text-sm inline-block w-[20px] h-[20px]  text-white rounded-full bg-[var(--primary)] absolute -mt-1'>0</sup>
                                        </button>
                                    </span>

                                </div>
                                {/*------------NightMode-Darkmode-----------*/}
                                <div className="">
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 dark:text-white cursor-pointer"
                                    >
                                        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                                    </button>
                                </div>
                            </div>


                            {/*---------------Mobile Button Section-------------------*/}
                            <div className="lg:hidden flex items-center">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-700 hover:text-[#00B3B0] focus:outline-none cursor-pointer"
                                >
                                    {isOpen ? <LiaTimesSolid size={28} /> : <HiBars3 size={28} />}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/*--------------Mobile Menu (Dropdown)-----------------*/}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 lg:hidden z-50">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to} // <--- Eikhane-o 'to' hobe
                                    onClick={() => setIsOpen(false)} // Link click korle menu bondho hobe
                                    className={({ isActive }) =>
                                        `block px-3 py-3 text-base font-medium rounded-md ${isActive ? "bg-blue-50 text-[#00B3B0]" : "text-gray-700 hover:text-[#00B3B0] hover:bg-gray-50"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            {/*-------------Search-----------*/}
                            <div className=''>
                                <button className=" hover:text-[#00B3B0] cursor-pointer transition-all relative">
                                    <FaSearch size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
