
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, } from 'swiper/modules';
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <Swiper
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            {/*-----------Slider-------1--------*/}
            <SwiperSlide>
                <section className="">
                    <div className="relative w-full overflow-hidden rounded-2xl py-16">

                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="https://i.ibb.co.com/4wDcZqPh/imageye-imgi-1-fashion-slideshow-03.webp"
                                alt="Fashion Collection"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            {/* <div className="absolute inset-0 bg-black/30"></div> */}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 lg:py-40">
                            <div className="">
                                {/* Left Content */}
                                <div>
                                    <p className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00B3B0] via-[#004276] to-[#004276] text-[18px] font-medium mb-4">
                                        <span className="inline-block w-2 h-2 bg-[#00B3B0] rounded-full"></span>
                                        Exclusive 2025 Edit
                                    </p>

                                    <h1 className="text-[#233238] text-3xl md:text-5xl xl:text-8xl font-medium leading-tight ">
                                        The Clothing <br className=''/> Collection
                                    </h1>

                                    <p className="mt-6 max-w-xl text-[#233238]">
                                        From casual to formal, we've got you covered
                                    </p>

                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 mt-8 bg-[#00B3B0] hover:bg-[#008f45] text-white px-6 py-3 rounded-full font-medium transition capitalize"
                                    >
                                        Shop Collection
                                        <span>↗</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </SwiperSlide>

            {/*-----------Slider-------2--------*/}
            <SwiperSlide>
                <section className="">
                    <div className="relative w-full overflow-hidden rounded-2xl py-16">

                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="https://i.ibb.co.com/8L85hDTw/imageye-imgi-1-fashion-slideshow-02.webp"
                                alt="Fashion Collection"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            {/* <div className="absolute inset-0 bg-black/30"></div> */}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 lg:py-40">
                            <div className="">
                                {/* Left Content */}
                                <div>
                                    <p className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00B3B0] via-[#004276] to-[#004276 text-[18px] font-medium mb-4">
                                        <span className="inline-block w-2 h-2 bg-[#00B3B0] rounded-full"></span>
                                        New Arrivals 2025
                                    </p>

                                    <h1 className="text-[#233238] text-3xl md:text-5xl xl:text-8xl font-medium leading-tight ">
                                        Modern Wear <br className=''/> Collection
                                    </h1>

                                    <p className="mt-6 max-w-xl text-[#233238]">
                                        From casual to formal, we've got you covered
                                    </p>

                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 mt-8 bg-[#00B3B0] hover:bg-[#008f45] text-white px-6 py-3 rounded-full font-medium transition capitalize"
                                    >
                                        Shop Collection
                                        <span>↗</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </SwiperSlide>

            {/*-----------Slider-------3--------*/}
            <SwiperSlide>
                <section className="">
                    <div className="relative w-full overflow-hidden rounded-2xl py-16">

                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="https://i.ibb.co.com/Zz3rRrbR/imageye-imgi-1-fashion-slideshow-01.webp"
                                alt="Fashion Collection"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            {/* <div className="absolute inset-0 bg-black/30"></div> */}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 lg:py-40">
                            <div className="">
                                {/* Left Content */}
                                <div>
                                    <p className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00B3B0] via-[#004276] to-[#004276 text-[18px] font-medium mb-4">
                                        <span className="inline-block w-2 h-2 bg-[#00B3B0] rounded-full"></span>
                                       Trending Now 2025
                                    </p>

                                    <h1 className="text-[#233238] text-3xl md:text-5xl xl:text-8xl font-medium leading-tight ">
                                        Fresh Fashion <br className=''/> Arrivals
                                    </h1>

                                    <p className="mt-6 max-w-xl text-[#233238]">
                                        From casual to formal, we've got you covered
                                    </p>

                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 mt-8 bg-[#00B3B0] hover:bg-[#008f45] text-white px-6 py-3 rounded-full font-medium transition capitalize"
                                    >
                                        Shop Collection
                                        <span>↗</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </SwiperSlide>



        </Swiper>

    )
}

export default Banner
