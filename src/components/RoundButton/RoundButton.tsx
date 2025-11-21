import { type RoundButtonProps } from '../../interfaces/index.ts';

import './RoundButton.css';
function RoundButton({
  onClick,
  symbol,
  className = '',
  symbolName,
  modifier = '',
}: RoundButtonProps) {
  return (
    <button
      type='button'
      className={`round-btn ${
        modifier ? `round-btn--${modifier}` : ''
      } ${className}`}
      onClick={onClick}
    >
      <div
        className={`round-btn__img-wrapper ${
          modifier ? `round-btn__img-wrapper--${modifier}` : ''
        }`}
      >
        <img className='round-btn__img' src={symbol} alt={`${symbolName}`} />
      </div>
    </button>
  );
}

export default RoundButton;
