import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navRefLinks = useRef();

  const showNavBar = () => {
    navRefLinks.current.classList.toggle("active");
  };

  const noShowNavBar = () => {
    navRefLinks.current.classList.toggle("active");
  };
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <a href='/' className='nav__logo'>
          Coin Finale
        </a>
        <ul className='nav__links' ref={navRefLinks}>
          <li className='nav__link'>
            <a href='/'>Home</a>
          </li>
          <li className='nav__link' onClick={noShowNavBar}>
            <a href='#market'>Market</a>
          </li>
          <li className='nav__link' onClick={noShowNavBar}>
            <a href='#info'>Information</a>
          </li>
          <li className='nav__link' onClick={noShowNavBar}>
            <a href='#join'>Join</a>
          </li>
        </ul>
        <div className='nav__toggle'>
          <FontAwesomeIcon icon={faBars} id='nav-icon' onClick={showNavBar} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
