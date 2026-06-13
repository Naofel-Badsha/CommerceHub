import Banner from "./Banner"
import Categories from "./Categories"
import PromoMarquee from "./PromoMarquee"
import SeasonCollection from "./SeasonCollection"

const Home = () => {
  return (
    <div>
      <Banner />
      <SeasonCollection />
      <Categories />
      <PromoMarquee />
    </div>
  )
}

export default Home
