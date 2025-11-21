import { type LogoProps } from '../../interfaces';
import logoImg from '../../assets/logo.png';
import './Logo.css';

function Logo({ classModifier = '' }: LogoProps) {
  return (
    <div className={`logo${classModifier ? ` logo--${classModifier}` : ''}`}>
      <img className='logo__img' src={logoImg} alt='Company logo' />
    </div>
  );
}

export default Logo;
