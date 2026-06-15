
import Blogs from "../Blog/Blogs"
import Banner from "./Banner"
import Categories from "./Categories"
import CustomersReviews from "./CustomersReviews"
import DealsSection from "./DealsSection"
import InstagramFeed from "./InstagramFeed"
import PromoMarquee from "./PromoMarquee"
import SeasonCollection from "./SeasonCollection"
import ServicesFeature from "./ServicesFeature"
import TrendingProducts from "./TrendingProducts"

const Home = () => {
  return (
    <div>
      <Banner />
      <SeasonCollection />
      <Categories />
      <TrendingProducts />
      <PromoMarquee />
      <DealsSection />
      <CustomersReviews />
      <Blogs />

      <ServicesFeature />
      <InstagramFeed />
    </div>
  )
}

export default Home
