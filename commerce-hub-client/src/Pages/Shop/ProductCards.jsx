import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag, FiEye } from 'react-icons/fi';
import { TfiExchangeVertical } from 'react-icons/tfi';
import RatingStars from '../../Components/RatingStars';

const ProductCards = ({ products }) => {
    console.log(products)
    return (
        <div className="px-4 py-20">
            <div className="">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#233238] capitalize font-medium text-center">Trending Products</h1>
                <p className="text-[#44606a] text-center mt-3">Discover the hottest picks: elevate your style with our curated <br /> collection of trending women's fashion products.</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-8 mt-10">
                {products.map((product, index) => (
                    <div key={index} className="group flex flex-col">

                        {/*---------Images----------*/}
                        <div className="relative bg-[#F3F3F3] overflow-hidden md:aspect-[3/4] lg:aspect-[3/4] xl:aspect-[3/4] 2xl:aspect-[3/4] flex items-center justify-center">
                            <img
                                src={product?.image}
                                alt={product.title}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />

                            {/*---------Product------Badge---------*/}
                            {/* {product.badge && (
                                <span className={`absolute top-4 left-4 ${product.badgeBg} text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}>
                                    {product.badge}
                                </span>
                            )} */}
                            {/*---------hover to action button--------*/}
                            <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10">

                                {/*----------Add to Cart-----------*/}
                                <div className="relative flex items-center group/tooltip">
                                    <button className="w-9 h-9 bg-[#00B3B0] text-white rounded-full flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors cursor-pointer">
                                        <FiShoppingBag size={18} />
                                    </button>
                                    <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-[11px] font-medium px-2.5 py-1.5 rounded pointer-events-none scale-75 opacity-0 origin-right group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100 transition-all duration-200 shadow-lg">
                                        Add to Cart
                                        <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-l-black border-r-transparent border-t-transparent border-b-transparent"></span>
                                    </span>
                                </div>

                                {/*--------View Details-----------*/}
                                <div className="relative flex items-center group/tooltip">
                                    <button className="w-9 h-9 bg-[#00B3B0] text-white rounded-full flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors cursor-pointer">
                                        <FiEye size={18} />
                                    </button>
                                    <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-[11px] font-medium px-2.5 py-1.5 rounded pointer-events-none scale-75 opacity-0 origin-right group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100 transition-all duration-200 shadow-lg">
                                        View Details
                                        <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-l-black border-r-transparent border-t-transparent border-b-transparent"></span>
                                    </span>
                                </div>

                                {/*---------Favorite----------*/}
                                <div className="relative flex items-center group/tooltip">
                                    <button className="w-9 h-9 bg-[#00B3B0] text-white rounded-full flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors cursor-pointer">
                                        <FaRegHeart size={18} />
                                    </button>
                                    <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-[11px] font-medium px-2.5 py-1.5 rounded pointer-events-none scale-75 opacity-0 origin-right group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100 transition-all duration-200 shadow-lg">
                                        Favorite
                                        <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-l-black border-r-transparent border-t-transparent border-b-transparent"></span>
                                    </span>
                                </div>

                                {/*------------Compare-------------*/}
                                <div className="relative flex items-center group/tooltip">
                                    <button className="w-9 h-9 bg-[#00B3B0] text-white rounded-full flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors cursor-pointer">
                                        <TfiExchangeVertical size={18} />
                                    </button>
                                    <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-[11px] font-medium px-2.5 py-1.5 rounded pointer-events-none scale-75 opacity-0 origin-right group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100 transition-all duration-200 shadow-lg">
                                        Compare
                                        <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-l-black border-r-transparent border-t-transparent border-b-transparent"></span>
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/*-----------Product Information Part-------------*/}
                        <div className="flex items-center flex-col bg-[#F4F4F4] py-5 px-5 gap-1.5 space-y-1">
                            {/*---------Reatting-------*/}
                            <div className="flex items-center gap-0.5 text-amber-500">
                                <RatingStars rating={product?.rating} />
                            </div>

                            {/*---------Title---------*/}
                            <h3 className="text-[#233238] font-medium text-[18px] ] hover:underline cursor-pointer tracking-tight">
                                {product?.name}
                            </h3>

                            {/*-----------Prices------Part------*/}
                            <div className="flex items-center gap-2 text-[14px] font-bold text-black">
                                <span>${product?.price.toFixed(2)}</span>
                                {product?.oldPrice && (
                                    <span className="text-gray-400 font-normal line-through text-[13px]">
                                        ${product?.oldPrice.toFixed(2)}
                                    </span>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default ProductCards
