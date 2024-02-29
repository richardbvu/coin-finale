import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faFileShield,
  faRectangleList,
  faSuitcase,
  faCheckToSlot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Information = () => {
  return (
    <div className='info' id='info'>
      <div className='info__container'>
        <h1 className='info__title'>
          What we <span>offer</span>
        </h1>
        <div className='info__grid'>
          <div className='info__item'>
            <FontAwesomeIcon icon={faWallet} className='info__item-icon' />
            <div className='info__item-text'>
              <h3>Connect your wallet</h3>
              <p>Safely connect to the cryptocurrency market</p>
            </div>
          </div>
          <div className='info__item'>
            <FontAwesomeIcon icon={faSuitcase} className='info__item-icon' />
            <div className='info__item-text'>
              <h3>Trade your crypto</h3>
              <p>Safely buy and sell cryptocurrency </p>
            </div>
          </div>
          <div className='info__item'>
            <FontAwesomeIcon icon={faFileShield} className='info__item-icon' />
            <div className='info__item-text'>
              <h3>Secure connection</h3>
              <p>Protect your investments and trade now</p>
            </div>
          </div>
          <div className='info__item'>
            <FontAwesomeIcon icon={faCheckToSlot} className='info__item-icon' />
            <div className='info__item-text'>
              <h3>On demand and quick</h3>
              <p>Immediately complete transactions with no delays</p>
            </div>
          </div>
          <div className='info__item'>
            <FontAwesomeIcon
              icon={faRectangleList}
              className='info__item-icon'
            />
            <div className='info__item-text'>
              <h3>Discover and invest</h3>
              <p>Simple and straight forward trading </p>
            </div>
          </div>
          <div className='info__item'>
            <FontAwesomeIcon icon={faClock} className='info__item-icon' />
            <div className='info__item-text'>
              <h3>Real time updates</h3>
              <p>Always stay up-to-date with the current market prices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Information;
