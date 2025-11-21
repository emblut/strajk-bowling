import { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import BookingForm from '../../components/BookingForm/BookingForm';
import Loader from '../../components/Loader/Loader';
import './BookingPage.css';

function BookingPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='page'>
          <PageHeader heading='BOOKING' />
          <BookingForm setIsLoading={setIsLoading} />
        </div>
      )}
    </>
  );
}

export default BookingPage;
