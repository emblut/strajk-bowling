import { type MenuButtonProps } from '../../interfaces/index.ts';
import menuImg from '../../assets/menu.png';
import './MenuButton.css';

function MenuButton({ bgActive, toggle }: MenuButtonProps) {
  return (
    <button
      className={`menu-btn ${bgActive ? 'menu-btn--black-bg' : ''}`}
      onClick={toggle}
    >
      <div className='menu-btn__container'>
        <div className='menu-btn__img-wrapper'>
          <img className='menu-btn__img' src={menuImg} alt='Menu button' />
        </div>
      </div>
    </button>
  );
}

export default MenuButton;
