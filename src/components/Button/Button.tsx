import { type ButtonProps } from '../../interfaces';
import './Button.css';
function Button({ text, IsLoading }: ButtonProps) {
  return (
    <button type='submit' className='button' disabled={IsLoading}>
      {text}
    </button>
  );
}

export default Button;
