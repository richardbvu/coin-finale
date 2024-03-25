import eth from "../images/ethereum.png";

const Join = () => {
  return (
    <div className='join' id='join'>
      <div className='join__container'>
        <img
          src={require("../images/bitcoin.png")}
          alt='floating bitcoin'
          className='hero__icon'
        />
        <div className='join__text'>
          <h1 className='join__title'>
            Join our <span>Discord</span>
          </h1>
          <p>This is your crypto destination. Coin Finale.</p>
          <a href='#navbar' className='join__button'>
            Join Discord
          </a>
        </div>
        <img src={eth} alt='floating bitcoin' className='hero__icon' />
      </div>
    </div>
  );
};
export default Join;
