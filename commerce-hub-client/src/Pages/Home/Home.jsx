import Banner from "./Banner"
import Categories from "./Categories"
import InstagramFeed from "./InstagramFeed"
import PromoMarquee from "./PromoMarquee"
import SeasonCollection from "./SeasonCollection"

const Home = () => {
  return (
    <div>
      <Banner />
      <SeasonCollection />
      <Categories />
      <PromoMarquee />
      <InstagramFeed />
    </div>
  )
}

export default Home
