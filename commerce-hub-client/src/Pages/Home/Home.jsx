import Banner from "./Banner"
import Categories from "./Categories"
import InstagramFeed from "./InstagramFeed"
import PromoMarquee from "./PromoMarquee"
import SeasonCollection from "./SeasonCollection"
import ServicesFeature from "./ServicesFeature"

const Home = () => {
  return (
    <div>
      <Banner />
      <SeasonCollection />
      <Categories />
      <PromoMarquee />
      <ServicesFeature />
      <InstagramFeed />
    </div>
  )
}

export default Home
