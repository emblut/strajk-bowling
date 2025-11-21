import { type BookingReq, type FirstBookingRes } from '../interfaces/index.ts';

export const createBooking = async (bookingReq: BookingReq) => {
  const response: Response = await fetch(
    'https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'strajk-4wOFSa0vV0WtlFYK',
      },
      body: JSON.stringify(bookingReq),
    }
  );
  if (!response.ok) {
    throw new Error(
      'Something went wrong while making your booking, please try again'
    );
  }
  const result: FirstBookingRes = await response.json();
  return result;
};
