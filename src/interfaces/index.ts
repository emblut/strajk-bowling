import { type Dispatch, type SetStateAction } from 'react';

export interface PageHeaderProps {
  classModifier?: string;
  heading: string;
}

export interface LogoProps {
  classModifier?: string;
}

export interface SubHeadingProps {
  heading: string;
}

export interface ButtonProps {
  text: string;
  IsLoading: boolean;
}

export interface MenuButtonProps {
  bgActive: boolean;
  toggle: () => void;
}

export interface RoundButtonProps {
  className?: string;
  onClick: () => void;
  symbol: string;
  symbolName: string;
  modifier?: string;
}

export interface BookingReq {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
}

export interface BookingRes extends BookingReq {
  price: number;
  bookingId: string;
  active: boolean;
}

export interface BookingInput {
  date: string;
  time: string;
  people: number;
  lanes: number;
  shoes: number[];
}

export interface BookingFormProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  IsLoading: boolean;
}

export interface ConfirmationFormProps {
  bookingRes: BookingRes;
}

export interface NavProps {
  bgActive: boolean;
  toggle: () => void;
}

export interface LocationState {
  bookingRes: BookingRes;
}

export interface FirstBookingRes {
  bookingDetails: BookingRes;
  success: boolean;
}
