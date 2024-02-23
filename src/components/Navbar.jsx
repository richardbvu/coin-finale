const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <a href='/' className='nav__logo'>
          Coin Finale
        </a>
        <ul className='nav__links'>
          <li className='nav__link'>
            <a href='/'>Home</a>
          </li>
          <li className='nav__link'>
            <a href='#market'>Market</a>
          </li>
          <li className='nav__link'>
            <a href='#info'>Information</a>
          </li>
          <li className='nav__link'>
            <a href='#join'>Join</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
