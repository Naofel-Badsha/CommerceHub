
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
                delay: 2500,
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
                <section className="px-6.5 py-6">
                    < div className="relative w-full rounded-2xl overflow-hidden px-6 py-5 lg:px-8">
                        {/*-----------Background Image------------*/}
                        <div className="absolute inset-0">
                            <img src="" alt="" />
                            {/*-----------Green Gradient Overlay----------*/}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#033b1c]/95 via-[#046b34]/85 to-transparent"></div>
                        </div>

                        {/*----------Content-----------*/}
                        <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 lg:grid-cols-2 items-end">
                            {/*-----------Left Content----------*/}
                            <div>
                                <p className="flex items-center gap-2 text-white text-[19px] font-semibold mb-4">
                                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                                    WELCOME ZANCE AGENCY
                                </p>

                                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                                    Protect What Matters <br />
                                    Most With Insurance<br />
                                    That Cares.<br />

                                </h1>

                                <p className="mt-6 max-w-xl text-white/80">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>

                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 mt-8 bg-[#00a651] hover:bg-[#008f45] text-white px-6 py-3 rounded-full font-semibold transition"
                                >
                                    DISCOVER MORE
                                    <span>↗</span>
                                </Link>
                            </div>

                            {/*-----------Right Content----------*/}
                            <div className="hidden lg:flex justify-end items-center gap-8">
                                {/*---------Customers-----------*/}
                                <div className="text-white text-center m-0">
                                    <h2 className="text-6xl font-bold">12.5K</h2>
                                    <hr className="mt-4 mb-4" />
                                    <p className="text-white/80 mt-1 text-[19px] font-bold">Active Customer</p>
                                </div>

                                {/*-----------Badge-------------*/}
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                                    <Image
                                        src="/assets/batch.png"
                                        alt="Top Insurance Agency"
                                        width={180}
                                        height={180}
                                        className=" mx-auto"
                                    />
                                    <p className="mt-4 text-white text-[19px] font-semibold">
                                        Top Insurance Agency
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </SwiperSlide>

            {/*-----------Slider-------2--------*/}
            <SwiperSlide>
                <section className="px-6.5 py-6">
                    < div className="relative w-full rounded-2xl overflow-hidden px-6 py-5 lg:px-8">
                        {/*-----------Background Image------------*/}
                        <div className="absolute inset-0">
                            <img src="" alt="" />
                            {/*-----------Green Gradient Overlay----------*/}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#033b1c]/95 via-[#046b34]/85 to-transparent"></div>
                        </div>

                        {/*----------Content-----------*/}
                        <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 lg:grid-cols-2 items-end">
                            {/*-----------Left Content----------*/}
                            <div>
                                <p className="flex items-center gap-2 text-white text-[19px] font-semibold mb-4">
                                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                                    WELCOME ZANCE AGENCY
                                </p>

                                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                                    Protect What Matters <br />
                                    Most With Insurance<br />
                                    That Cares.<br />

                                </h1>

                                <p className="mt-6 max-w-xl text-white/80">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>

                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 mt-8 bg-[#00a651] hover:bg-[#008f45] text-white px-6 py-3 rounded-full font-semibold transition"
                                >
                                    DISCOVER MORE
                                    <span>↗</span>
                                </Link>
                            </div>

                            {/*-----------Right Content----------*/}
                            <div className="hidden lg:flex justify-end items-center gap-8">
                                {/*---------Customers-----------*/}
                                <div className="text-white text-center m-0">
                                    <h2 className="text-6xl font-bold">12.5K</h2>
                                    <hr className="mt-4 mb-4" />
                                    <p className="text-white/80 mt-1 text-[19px] font-bold">Active Customer</p>
                                </div>

                                {/*-----------Badge-------------*/}
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                                    <Image
                                        src="/assets/batch.png"
                                        alt="Top Insurance Agency"
                                        width={180}
                                        height={180}
                                        className=" mx-auto"
                                    />
                                    <p className="mt-4 text-white text-[19px] font-semibold">
                                        Top Insurance Agency
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </SwiperSlide>

            {/*-----------Slider-------3--------*/}
            <SwiperSlide>
                <section className="px-6.5 py-6">
                    < div className="relative w-full rounded-2xl overflow-hidden px-6 py-5 lg:px-8">
                        {/*-----------Background Image------------*/}
                        <div className="absolute inset-0">
                            <img src="" alt="" />
                            {/*-----------Green Gradient Overlay----------*/}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#033b1c]/95 via-[#046b34]/85 to-transparent"></div>
                        </div>

                        {/*----------Content-----------*/}
                        <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 lg:grid-cols-2 items-end">
                            {/*-----------Left Content----------*/}
                            <div>
                                <p className="flex items-center gap-2 text-white text-[19px] font-semibold mb-4">
                                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                                    WELCOME ZANCE AGENCY
                                </p>

                                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                                    Protect What Matters <br />
                                    Most With Insurance<br />
                                    That Cares.<br />

                                </h1>

                                <p className="mt-6 max-w-xl text-white/80">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>

                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 mt-8 bg-[#00a651] hover:bg-[#008f45] text-white px-6 py-3 rounded-full font-semibold transition"
                                >
                                    DISCOVER MORE
                                    <span>↗</span>
                                </Link>
                            </div>

                            {/*-----------Right Content----------*/}
                            <div className="hidden lg:flex justify-end items-center gap-8">
                                {/*---------Customers-----------*/}
                                <div className="text-white text-center m-0">
                                    <h2 className="text-6xl font-bold">12.5K</h2>
                                    <hr className="mt-4 mb-4" />
                                    <p className="text-white/80 mt-1 text-[19px] font-bold">Active Customer</p>
                                </div>

                                {/*-----------Badge-------------*/}
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                                    <Image
                                        src="/assets/batch.png"
                                        alt="Top Insurance Agency"
                                        width={180}
                                        height={180}
                                        className=" mx-auto"
                                    />
                                    <p className="mt-4 text-white text-[19px] font-semibold">
                                        Top Insurance Agency
                                    </p>
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
