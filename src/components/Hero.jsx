import eth from "../images/ethereum.png";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <img
          src={require("../images/bitcoin.png")}
          alt='floating bitcoin'
          className='hero__icon'
        />
        <div className='hero__titles'>
          <h1 className='hero__title-1'>Crypto Currencies</h1>
          <h1 className='hero__title-2'>Stay up-to-date</h1>
        </div>
        <img src={eth} alt='floating bitcoin' className='hero__icon' />
      </div>
    </div>
  );
};
export default Hero;
