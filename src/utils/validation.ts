import { OPENING_HOUR, CLOSING_HOUR } from './constants.ts';
import { type BookingInput } from '../interfaces/index.ts';

export function validateDateTime(date: string, time: string): string | null {
  if (!date || !time) return 'Please choose both date and time';

  const now: Date = new Date();
  const bookingDateTime: Date = new Date(`${date}T${time}`);

  if (bookingDateTime < now) {
    return 'You cannot book a time in the past';
  }

  const hour: number = bookingDateTime.getHours();

  if (hour < OPENING_HOUR || hour > CLOSING_HOUR - 1) {
    return `You can only book between ${OPENING_HOUR}:00 and ${
      CLOSING_HOUR - 1
    }:00`;
  }

  return null;
}

export function validateShoes(people: number, shoes: number[]): string | null {
  if (shoes.length > people)
    return 'Number of shoes cannot exceed number of players';
  return null;
}

export function validateLaneCapacity(
  people: number,
  lanes: number
): string | null {
  if (people > lanes * 4) return 'Maximum 4 players per lane';
  return null;
}

export function validateBooking(booking: BookingInput): string | null {
  return (
    validateDateTime(booking.date, booking.time) ||
    validateShoes(booking.people, booking.shoes) ||
    validateLaneCapacity(booking.people, booking.lanes) ||
    null
  );
}
