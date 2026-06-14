
// Swiper React components এবং modules ইম্পোর্ট করা হচ্ছে
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper এর প্রয়োজনীয় CSS ইম্পোর্ট করা হচ্ছে
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from '../../Components/Heading';


const CustomersReviews = () => {
    const reviews = [
        {
            id: 1,
            rating: 5,
            title: 'Nice!!',
            comment: '"I finally found a fashion website with stylish and flattering clothing options. The quality is impressive, and every purchase has exceeded."',
            productImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop',
            userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
            name: 'James',
            location: 'Customer from USA',
        },
        {
            id: 2,
            rating: 5,
            title: 'Amazing Service!!',
            comment: '"The ordering process was simple and smooth. My package arrived quickly, and the product looked exactly like the photos."',
            productImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=300&auto=format&fit=crop',
            userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
            name: 'John D.',
            location: 'Customer from USA',
        },
        {
            id: 3,
            rating: 5,
            title: 'Awesome!!',
            comment: '"I was surprised by the excellent craftsmanship and comfort. The design feels modern, fashionable, and suitable for many occasions."',
            productImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=300&auto=format&fit=crop',
            userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
            name: 'William',
            location: 'Customer from USA',
        },
        {
            id: 4,
            rating: 5,
            title: 'Love it!!',
            comment: '"The material is amazing and the fitting is absolutely perfect. Highly recommended for anyone looking for quality fashion products."',
            productImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=300&auto=format&fit=crop',
            userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
            name: 'Sophia',
            location: 'Customer from Canada',
        },
        {
            id: 5,
            rating: 5,
            title: 'Perfect Fit!!',
            comment: '"The quality exceeded my expectations, and the fit feels incredibly comfortable. I received many compliments and will definitely order again soon."',
            productImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop',
            userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
            name: 'Emma',
            location: 'Customer from UK',
        },
        {
            id: 6,
            rating: 5,
            title: 'Excellent Quality!!',
            comment: '"The fabric feels premium, and every detail looks carefully crafted. Shipping was fast, and the overall experience was absolutely wonderful."',
            productImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop',
            userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
            name: 'Olivia',
            location: 'Customer from Australia',
        },
        {
            id: 7,
            rating: 5,
            title: 'Highly Recommended!!',
            comment: '"Everything from the design to the comfort was outstanding. The product arrived exactly as described, making me very satisfied."',
            productImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=300&auto=format&fit=crop',
            userImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
            name: 'Michael',
            location: 'Customer from Germany',
        },
    ];
    return (
        <section className="bg-[#f7f7f7] py-20 px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
            <div className="container mx-auto">
                <Heading
                    subtitle="Customers Reviews"
                    title="Happy Customers" />

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}

                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id} className="h-auto mt-14">
                            <div className="bg-white p-6 md:p-8 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex justify-between items-start gap-4 mb-6">
                                    <div className="flex-1">
                                        <div className="flex gap-0.5 mb-3 text-[#233238] text-sm">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i} className='text-xl text-amber-500'>★</span>
                                            ))}
                                        </div>
                                        <h3 className="font-bold text-[#233238] mb-2 font-medium text-base md:text-lg">
                                            {review.title}
                                        </h3>
                                        <p className="text-[#44606a] text-sm leading-relaxed font-light">
                                            {review.comment}
                                        </p>
                                    </div>

                                    <div className="w-24 h-32 md:w-28 md:h-36 flex-shrink-0">
                                        <img
                                            src={review.productImage}
                                            alt="Product"
                                            className="w-full h-full object-cover rounded-none"
                                        />
                                    </div>
                                </div>

                                <hr className="border-gray-100 my-4" />

                                <div className="flex items-center gap-3">
                                    <img
                                        src={review.userImage}
                                        alt={review.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">
                                            {review.name}
                                        </h4>
                                        <p className="text-gray-400 text-xs">
                                            {review.location}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default CustomersReviews
