
import { FaInstagram } from 'react-icons/fa';

const InstagramFeed = () => {
    // প্রতিটি ইমেজের জন্য ডাইনামিক ইনস্টাগ্রাম পোস্ট লিংক এবং ইমেজ সোর্স
    const instagramPosts = [
        {
            id: 1,
            img: "https://i.ibb.co.com/BHbGRkJX/imageye-imgi-100-shop-1.webp",
            link: "https://instagram.com/p/post_link_1"
        },
        {
            id: 2,
            img: "https://i.ibb.co.com/8D96W92K/imageye-imgi-101-shop-2.webp",
            link: "https://instagram.com/p/post_link_2"
        },
        {
            id: 3,
            img: "https://i.ibb.co.com/BVjXDdS9/imageye-imgi-95-shop-3.webp",
            link: "https://instagram.com/p/post_link_3"
        },
        {
            id: 4,
            img: "https://i.ibb.co.com/9mDLkcPc/imageye-imgi-96-shop-4.webp",
            link: "https://instagram.com/p/post_link_4"
        },
        {
            id: 5,
            img: "https://i.ibb.co.com/bk267nt/imageye-imgi-57-cat-1.webp",
            link: "https://instagram.com/p/post_link_8"
        },
        {
            id: 6,
            img: "https://i.ibb.co.com/YFQkVHpv/imageye-imgi-98-shop-6.webp",
            link: "https://instagram.com/p/post_link_6"
        },
        {
            id: 7,
            img: "https://i.ibb.co.com/hRK7Ddm3/imageye-imgi-99-shop-7.webp",
            link: "https://instagram.com/p/post_link_7"
        },
        {
            id: 8,
            img: "https://i.ibb.co.com/1G0dwsMj/imageye-imgi-97-shop-5.webp",
            link: "https://instagram.com/p/post_link_5"
        }
    ];

    // ইনফিনিটি লুপে যেন কোনো গ্যাপ না পড়ে সেজন্য ডাটা ডাবল করা হয়েছে
    const doublePosts = [...instagramPosts, ...instagramPosts];

    return (
        <section className="w-full bg-white py-10 overflow-hidden relative">

            {/* ইনলাইন সিএসএস যা স্লাইডারটিকে অনবরত ডান থেকে বামে স্ক্রোল করাবে */}
            <style>{`
        @keyframes instaMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-insta-slider {
          display: flex;
          width: max-content;
          animation: instaMarquee 30s linear infinite;
        }
        /* মাউস হোভার করলে স্লাইডার পজ বা থেমে যাওয়ার জন্য */
        .animate-insta-slider:hover {
          animation-play-state: paused;
        }
      `}</style>

            {/* স্লাইডার মূল কন্টেইনার */}
            <div className="animate-insta-slider gap-3 px-1.5">
                {doublePosts.map((post, index) => (
                    <a
                        key={`${post.id}-${index}`}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block w-[180px] sm:w-[220px] md:w-[260px] aspect-square bg-[#F5F5F5] overflow-hidden shrink-0"
                    >
                        {/* ইনস্টাগ্রাম ফিড ইমেজ */}
                        <img
                            src={post.img}
                            alt={`Instagram post ${post.id}`}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* হোভার ওভারলে ইফেক্ট এবং ইনস্টাগ্রাম আইকন */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                <FaInstagram size={20} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default InstagramFeed;
