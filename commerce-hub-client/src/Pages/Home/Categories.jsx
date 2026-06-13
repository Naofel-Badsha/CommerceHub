
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Swiper CSS Styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';


const Categories = () => {
    // ক্যাটাগরি ডাটা অ্যারে
    const categoriesData = [
        {
            id: 1,
            name: "Bags",
            items: "06",
            path: "bags",
            img: "https://i.ibb.co.com/cX62nyGR/imageye-imgi-83-thumb-sm-1.webp"
        },
        {
            id: 2,
            name: "Caps",
            items: "08",
            path: "caps",
            img: "https://i.ibb.co.com/k2WWTL6M/imageye-imgi-84-thumb-sm-2.webp"
        },
        {
            id: 3,
            name: "Glasses",
            items: "12",
            path: "glasses",
            img: "https://i.ibb.co.com/23xtPYqN/imageye-imgi-85-thumb-sm-3.webp"
        },
        {
            id: 4,
            name: "Watches",
            items: "16",
            path: "watches",
            img: "https://i.ibb.co.com/bk267nt/imageye-imgi-57-cat-1.webp"
        },
        {
            id: 5,
            name: "Clothing",
            items: "20",
            path: "clothing",
            img: "https://i.ibb.co.com/rGb4y5FC/imageye-imgi-58-cat-2.webp"
        },
        {
            id: 6,
            name: "Shoes",
            items: "12",
            path: "shoes",
            img: "https://i.ibb.co.com/840kkYmx/imageye-imgi-59-cat-3.webp"
        },
        {
            id: 7,
            name: "Jeans",
            items: "06",
            path: "jeans",
            img: "https://i.ibb.co.com/mFr38gN0/imageye-imgi-60-cat-4.webp"
        },
        {
            id: 8,
            name: "Accessories",
            items: "16",
            path: "accessories",
            img: "https://i.ibb.co.com/8DkqytjT/imageye-imgi-61-cat-5.webp"
        },
        {
            id: 9,
            name: "Jackets",
            items: "20",
            path: "jackets",
            img: "https://i.ibb.co.com/5WWC2vpK/imageye-imgi-62-cat-6.webp"
        },
        {
            id: 10,
            name: "Sneakers",
            items: "12",
            path: "sneakers",
            img: "https://i.ibb.co.com/fW08LDR/imageye-imgi-73-product-3.webp"
        },
    ];
    return (
        <section className="container mx-auto px-4 md:px-0 py-12 relative group">

            {/* প্রধান Swiper কন্টেইনার */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                    1280: { slidesPerView: 7 },
                }}
                className="mySwiper"
            >
                {categoriesData.map((category) => (
                    <SwiperSlide key={category.id}>
                        <Link to={`/categories/${category.path}`}>
                            <div className="flex flex-col items-center justify-center text-center cursor-pointer">
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#F5F5F5] flex items-center justify-center overflow-hidden mb-4">
                                    <img
                                        src={category.img}
                                        alt={category.name}
                                        className="w-full h-full object-contain rounded-full transform transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <h4 className="text-[#233238] font-medium text-sm sm:text-base">
                                    {category.name}
                                </h4>
                                <p className="text-gray-400 text-xs mt-1">
                                    Items ({category.items})
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/*-----------Left---------Button----------*/}
            <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border bg-white text-[#111111] shadow-sm flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors cursor-pointer">
                <IoIosArrowBack size={18} />
            </button>

            {/*-----------Right---------Button----------*/}
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border flex items-center justify-center bg-white text-[#111111] hover:bg-[#111111] hover:text-white transition-colors shadow-md cursor-pointer">
                <IoIosArrowForward size={18} />
            </button>

        </section>
    )
}

export default Categories
