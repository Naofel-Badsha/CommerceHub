import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Swiper CSS Styles
import 'swiper/css';
import 'swiper/css/navigation';


const Categories = () => {
    // ক্যাটাগরি ডাটা অ্যারে
    const categoriesData = [
        { id: 1, name: "Bags", items: "06", img: "https://i.ibb.co.com/cX62nyGR/imageye-imgi-83-thumb-sm-1.webp" },
        { id: 2, name: "Cap", items: "08", img: "https://i.ibb.co.com/k2WWTL6M/imageye-imgi-84-thumb-sm-2.webp" },
        { id: 3, name: "Glasses", items: "12", img: "https://i.ibb.co.com/23xtPYqN/imageye-imgi-85-thumb-sm-3.webp" },
        { id: 4, name: "Watch", items: "16", img: "https://i.ibb.co.com/bk267nt/imageye-imgi-57-cat-1.webp" },
        { id: 5, name: "Clothing", items: "20", img: "https://i.ibb.co.com/rGb4y5FC/imageye-imgi-58-cat-2.webp" },
        { id: 6, name: "Shoes", items: "12", img: "https://i.ibb.co.com/840kkYmx/imageye-imgi-59-cat-3.webp" },
        { id: 7, name: "Bags", items: "06", img: "https://i.ibb.co.com/mFr38gN0/imageye-imgi-60-cat-4.webp" },
        { id: 8, name: "Watch", items: "16", img: "https://i.ibb.co.com/8DkqytjT/imageye-imgi-61-cat-5.webp" },
        { id: 9, name: "Clothing", items: "20", img: "https://i.ibb.co.com/5WWC2vpK/imageye-imgi-62-cat-6.webp" },
        { id: 10, name: "Shoes", items: "12", img: "https://i.ibb.co.com/fW08LDR/imageye-imgi-73-product-3.webp" },
    ];
    return (
        <section className="container mx-auto px-4 py-12 relative group">

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
                }}
                className="mySwiper"
            >
                {categoriesData.map((category) => (
                    <SwiperSlide key={category.id}>
                        <div className="flex flex-col items-center justify-center text-center cursor-pointer">
                            {/* গোলাকার ইমেজ কন্টেইনার */}
                            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#F5F5F5] flex items-center justify-center overflow-hidden mb-4  transition-transform duration-300 hover:shadow-sm">
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className="w-full h-full object-contain mix-blend-multiply rounded-full"
                                />
                            </div>
                            {/* টেক্সট কন্টেন্ট */}
                            <h4 className="text-[#233238] font-medium text-sm sm:text-base">
                                {category.name}
                            </h4>
                            <p className="text-gray-400 text-xs mt-1">
                                Items ({category.items})
                            </p>
                        </div>
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
