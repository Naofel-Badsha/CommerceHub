import { useParams } from "react-router-dom"
import ProductCards from "../Shop/ProductCards"
import { useEffect, useState } from "react"
import products from "../../Data/products.json"


const CategoryPage = () => {
    //-----------Ay Category Name ta ascea Route take useParams er maddomea-------
    const { categoryName } = useParams()
    //----------filteredProducts ay ta j category te user click korbea shodu mattro sey category er product golu show korbea.----------
    const [filteredProducts, setFilteredProducts] = useState()

    useEffect(() => {
      const filtered = products.filter((product) => product.category === categoryName.toLowerCase())
      setFilteredProducts(filtered)
    }, [])
    console.log(filteredProducts)
    return (
        <>
            <section className="bg-[#f4f4f4] py-20 px-10">
                <div className="flex items-center justify-center">
                    <div className="">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#233238] capitalize font-medium text-center">{categoryName}</h1>
                        <p className="text-[#44606a] text-center mt-3">Shop through our latest selection of Fashion</p>
                    </div>
                </div>
            </section>

            {/*---------Product--------card---------*/}
            <section className="container">
                <ProductCards products={ } />
            </section>
        </>
    )
}

export default CategoryPage
