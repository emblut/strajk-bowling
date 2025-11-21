import { type SubHeadingProps } from '../../interfaces';
import './SubHeading.css';

function SubHeading({ heading }: SubHeadingProps) {
  return (
    <div className='sub-heading'>
      <div className='sub-heading__line'></div>
      <h2 className='sub-heading__text'>{heading}</h2>
      <div className='sub-heading__line'></div>
    </div>
  );
}

export default SubHeading;
