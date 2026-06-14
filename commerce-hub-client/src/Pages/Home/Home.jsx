
import Banner from "./Banner"
import Categories from "./Categories"
import CustomersReviews from "./CustomersReviews"
import InstagramFeed from "./InstagramFeed"
import OurBlog from "./OurBlog"
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
      <CustomersReviews />
      <OurBlog />
      <ServicesFeature />
      <InstagramFeed />
    </div>
  )
}

export default Home
