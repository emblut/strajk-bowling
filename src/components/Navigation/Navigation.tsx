import { Link } from 'react-router-dom';
import { type NavProps } from '../../interfaces';
import './Navigation.css';

function Navigation({ bgActive, toggle }: NavProps) {
  return (
    <>
      <nav className={`nav ${bgActive ? 'nav--open' : ''}`}>
        <ul className='nav__options'>
          <li onClick={toggle} className='nav__option'>
            <Link className='nav__option-link' to='/'>
              BOOKING
            </Link>
          </li>
          <li className='nav__option'>
            <Link
              onClick={toggle}
              className='nav__option-link'
              to='/confirmation'
            >
              CONFIRMATION
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
