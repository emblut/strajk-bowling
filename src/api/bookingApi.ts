import { type BookingReq, type FirstBookingRes } from '../interfaces/index.ts';

export const createBooking = async (
  bookingReq: BookingReq
): Promise<FirstBookingRes> => {
  try {
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

    if (!response.ok) {
      console.log(
        'Server response not ok:',
        response.status,
        response.statusText
      );
      throw new Error(
        `Server error: ${response.status} ${response.statusText}`
      );
    }

    const result: FirstBookingRes = await response.json();
    return result;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Booking failed: ${err.message}`);
    }
    throw new Error('Booking failed due to unknown error');
  }
};
