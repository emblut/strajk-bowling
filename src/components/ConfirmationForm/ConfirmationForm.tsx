import { useNavigate, type NavigateFunction } from 'react-router-dom';
import { type ConfirmationFormProps } from '../../interfaces/index.ts';
import { convertDateToDisplay } from '../../utils/dateUtils.ts';
import SubHeading from '../SubHeading/SubHeading';
import Button from '../Button/Button';
import './ConfirmationForm.css';

function ConfirmationForm({ bookingRes }: ConfirmationFormProps) {
  const navigate: NavigateFunction = useNavigate();
  const { active, when, people, lanes, bookingId, price } = bookingRes;

  if (!active) {
    return (
      <div className='confirmation-empty'>
        <p className='confirmation-empty__text'>No booking to show</p>
      </div>
    );
  }

  const dateTime: string[] = when.split('T');
  const displayDate = convertDateToDisplay(dateTime[0]);
  const time = dateTime[1];

  return (
    <form
      className='confirmation-form'
      onSubmit={(): void => {
        navigate('/');
      }}
    >
      <SubHeading heading={'BOOKING DETAILS'} />
      <div className='form-field'>
        <span className='form-field__label'>WHEN</span>
        <span className='form-field__input'>{`${displayDate}, ${time}`}</span>
      </div>
      <div className='form-field'>
        <span className='form-field__label'>WHO</span>
        <span className='form-field__input'>{people} pers</span>
      </div>
      <div className='form-field'>
        <span className='form-field__label'>LANES</span>
        <span className='form-field__input'>{lanes} lanes</span>
      </div>
      <div className='form-field'>
        <span className='form-field__label'>BOOKING NUMBER</span>
        <span className='form-field__input'>{bookingId}</span>
      </div>
      <div className='confirmation-form__bottom-container'>
        <div className='form-field form-field--red confirmation-form__total'>
          <span className='form-field__input form-field__input--red confirmation-total-label'>
            total
          </span>
          <span className='form-field__input form-field__input--red confirmation-total'>
            {price} sek
          </span>
        </div>
        <Button text={'SWEET, LETS GO!'} />
      </div>
    </form>
  );
}

export default ConfirmationForm;
