import { Link } from "react-router-dom";

const SeasonCollection = () => {
    const promoData = [
        {
            id: 1,
            discount: "25% OFF",
            title: "Coats & Jackets",
            subtitle: "Best jacket in year",
            img: "https://i.ibb.co.com/rRxqrxNV/imageye-imgi-54-banner-4-1.webp",
            link: "#"
        },
        {
            id: 2,
            discount: "10% OFF",
            title: "Leather & Suede",
            subtitle: "Best jacket in year",
            img: "https://i.ibb.co.com/357GbkR3/imageye-imgi-55-banner-4-2.webp",
            link: "#"
        },
        {
            id: 3,
            discount: "50% OFF",
            title: "Summer 2025",
            subtitle: "Best jacket in year",
            img: "https://i.ibb.co.com/1SPnzYc/imageye-imgi-56-banner-4-3.webp",
            link: "#"
        }
    ];
    return (
        <section className="py-8 px-5">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                {promoData.map((item) => (
                    <div key={item.id} className="relative overflow-hidden flex items-center justify-start group">
                        <div className="absolute z-10">
                            <div className="py-10 px-10">
                                <span className="text-xs font-semibold text-gray-500 tracking-wider">
                                    {item.discount}
                                </span>
                                <h3 className="text-2xl lg:text-2xl xl:text-4xl font-medium text-[#233238] mt-2 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-6 italic">
                                    {item.subtitle}
                                </p>
                                <Link
                                    to={"/"}
                                    className="inline-flex items-center gap-2  border border-[#00B3B0] hover:bg-[#00B3B0] hover:text-white text-[#233238] px-6 py-3 rounded-full font-medium transition capitalize"
                                >
                                    Shop Now
                                    <span>↗</span>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full overflow-hidden">
                            <img
                                src={item.img}
                                alt="Summer Collection"
                                className="w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                ))}




            </div>
        </section>
    )
}

export default SeasonCollection
