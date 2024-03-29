import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faDiscord,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__icons'>
          <a href='#navbar'>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href='#navbar'>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href='#navbar'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href='#navbar'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className='footer__links'>
          <p>Terms of Use</p>
          <p>Privacy</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
