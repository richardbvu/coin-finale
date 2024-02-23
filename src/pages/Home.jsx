import Hero from "../components/Hero";
import Information from "../components/Information";
import Market from "../components/Market";

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <Hero />
        <Market />
        <Information />
      </div>
    </div>
  );
};
export default Home;
