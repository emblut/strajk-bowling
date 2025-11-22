import { type BookingReq, type FirstBookingRes } from '../interfaces/index.ts';

export const createBooking = async (bookingReq: BookingReq) => {
  const response = await fetch(
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

  const data = await response.json();

  if (!response.ok) {
    const message =
      data.message ||
      'Something went wrong while making your booking, please try again';
    throw new Error(message);
  }

  return data as FirstBookingRes;
};
