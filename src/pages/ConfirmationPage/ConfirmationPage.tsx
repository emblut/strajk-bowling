import { useLocation, type Location } from 'react-router-dom';
import { type BookingRes, type LocationState } from '../../interfaces';
import PageHeader from '../../components/PageHeader/PageHeader';
import ConfirmationForm from '../../components/ConfirmationForm/ConfirmationForm';
import './ConfirmationPage.css';

function ConfirmationPage() {
  let bookingRes: BookingRes;

  try {
    const location = useLocation() as Location & { state: LocationState };
    bookingRes = location.state.bookingRes;
  } catch {
    bookingRes = {
      active: false,
      bookingId: '',
      lanes: 0,
      people: 0,
      price: 0,
      shoes: [],
      when: '',
    };
  }
  let headingText = '';
  if (bookingRes.active) {
    headingText = 'SEE YOU SOON';
  } else {
    headingText = 'CONFIRMATION';
  }

  return (
    <div className='page'>
      <PageHeader heading={headingText} />
      <ConfirmationForm bookingRes={bookingRes} />
    </div>
  );
}

export default ConfirmationPage;
