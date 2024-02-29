import Hero from "../components/Hero";
import Information from "../components/Information";
import Join from "../components/Join";
import Market from "../components/Market";

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <Hero />
        <Market />
        <Information />
        <Join />
      </div>
    </div>
  );
};
export default Home;
