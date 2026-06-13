

const PromoMarquee = () => {
    // আপনার দেওয়া ডাটা সেট
    const marqueeItems = [
        { id: 1, text: "Purposefully Designed", img: "https://i.ibb.co.com/VYYhjFrd/imageye-imgi-81-text-slide-img-3-removebg-preview.png" },
        { id: 2, text: "New Season Essentials", img: "https://i.ibb.co.com/TBy29f3K/imageye-imgi-79-text-slide-img-removebg-preview.png" },
        { id: 3, text: "Timeless Fashion", img: "https://i.ibb.co.com/fVb32T5K/imageye-imgi-22-bag-3-removebg-preview.png" },
        { id: 4, text: "Modern Streetwear", img: "https://i.ibb.co.com/7NNHfpmY/imageye-imgi-74-product-1-removebg-preview.png" },
        { id: 5, text: "Premium Collection", img: "https://i.ibb.co.com/KxYd5F0m/imageye-imgi-12-product-1-removebg-preview.png" },
        { id: 6, text: "Everyday Comfort", img: "https://i.ibb.co.com/1cQBXWc/imageye-imgi-8-product-2-1-removebg-preview.png" },
    ];


    // ইনফিনিটি ইফেক্ট নিরবচ্ছিন্ন রাখার জন্য ডাবল করা হয়েছে
    const doubleItems = [...marqueeItems, ...marqueeItems];

    return (
        <section className="w-full bg-white py-6 border-y border-gray-100 overflow-hidden relative">
        <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .custom-marquee-active {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>

            {/* স্ক্রোলিং কন্টেইনার (এখানে কাস্টম ক্লাসটি দেওয়া হয়েছে) */}
            <div className="custom-marquee-active items-center whitespace-nowrap gap-16 md:gap-24">
                {doubleItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 md:gap-6">
                        <div className="w-30 h-30 overflow-hidden flex items-center justify-center">
                            <img
                                src={item.img}
                                alt="Promo Icon"
                                className="max-w-full max-h-full object-contain mix-blend-multiply"
                            />
                        </div>
                        {/* স্ক্রিনশটের মতো বোল্ড এবং ক্লিন টেক্সট */}
                        <span className="text-[#233238] text-xl md:text-4xl lg:text-5xl font-medium tracking-tight">
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromoMarquee;