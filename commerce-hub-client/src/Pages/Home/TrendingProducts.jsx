import { useState } from "react"
import products from "../../Data/products.json"

import ProductCards from "../Shop/ProductCards"


const TrendingProducts = () => {
    //----------8 ta product hold korea takbea-------
    const [visibleProducts, setVisibleProducts] = useState(8)
    //------loadMoreProducts button ea click korlea all time 2 ta korea product show korbea------
    const loadMoreProducts = () => {
        setVisibleProducts(preCount => preCount + 2)
    }
    return (
        <section className="container m-auto">
            <div className="">
                <ProductCards products={products.slice(0, visibleProducts)} />
                {/*----------Load More Product--------*/}
                <div className="text-center mb-6">
                    {
                        visibleProducts < products.length && <button onClick={loadMoreProducts} className="border rounded-full border-[#00B3B0] text-[#44606a] text-md font-semibold capitalize tracking-wider py-3.5 px-8 hover:bg-[#00B3B0] hover:text-white transition-colors duration-300 cursor-pointer">
                            Load More
                        </button>
                    }
                </div>
            </div>
        </section>
    )
}

export default TrendingProducts
