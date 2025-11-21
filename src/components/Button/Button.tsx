import { type ButtonProps } from '../../interfaces';
import './Button.css';
function Button({ text }: ButtonProps) {
  return (
    <button type='submit' className='button'>
      {text}
    </button>
  );
}

export default Button;
