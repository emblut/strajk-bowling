import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { createBooking } from '../../api/bookingApi.ts';
import {
  type FirstBookingRes,
  type BookingFormProps,
} from '../../interfaces/index.ts';

import {
  shoeSizes,
  OPENING_HOUR,
  CLOSING_HOUR,
  INTERVAL_MINUTES,
} from '../../utils/constants.ts';
import { validateBooking } from '../../utils/validation.ts';
import { generateTwoMonthsDates } from '../../utils/dateUtils.ts';
import { generateTimes } from '../../utils/timeUtils.ts';

import SubHeading from '../SubHeading/SubHeading';
import RoundButton from '../RoundButton/RoundButton';
import Button from '../Button/Button';

import addIcon from '../../assets/add.png';
import removeIcon from '../../assets/remove.png';

import './BookingForm.css';

function BookingForm({ setIsLoading }: BookingFormProps) {
  const [date, setDate] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<boolean>(false);

  const [time, setTime] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<boolean>(false);

  const [people, setPeople] = useState<number>(1);
  const [selectedPeople, setSelectedPeople] = useState<boolean>(false);

  const [lanes, setLanes] = useState<number>(1);
  const [selectedLanes, setSelectedLanes] = useState<boolean>(false);

  const [shoes, setShoes] = useState<number[]>([]);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [dates, setDates] = useState<{ full: string; display: string }[]>([]);
  const [times, setTimes] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect((): void => {
    setDates(generateTwoMonthsDates());
    setTimes(generateTimes(OPENING_HOUR, CLOSING_HOUR, INTERVAL_MINUTES));
  }, []);

  const handleRemoveShoe = (index: number): void => {
    setShoes(shoes.filter((_, i) => i !== index));
  };

  const handleChangeShoe = (index: number, value: number): void => {
    const updated: number[] = [...shoes];
    updated[index] = value;
    setShoes(updated);
  };

  const handleAddShoe = (): void => {
    if (shoes.length < people) {
      setShoes([...shoes, shoeSizes[0]]);
    }
  };

  useEffect((): void => {
    if (people > shoes.length) {
      setShoes([...shoes, ...Array(people - shoes.length).fill(shoeSizes[0])]);
    }
    if (people < shoes.length) {
      setShoes(shoes.slice(0, people));
    }
  }, [people]);

  useEffect((): void => {
    const maxPeople: number = lanes * 4;
    if (people > maxPeople) {
      setPeople(maxPeople);
    }
  }, [lanes]);

  useEffect((): void => {
    if (errorMessage) {
      setErrorMessage('');
    }
  }, [people, lanes, shoes, date, time]);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setErrorMessage('');
    const error: string | null = validateBooking({
      date,
      time,
      people,
      lanes,
      shoes,
    });
    if (error) {
      setErrorMessage(error);
      return;
    }

    const bookingReq = {
      when: `${date}T${time}`,
      lanes,
      people,
      shoes,
    };
    try {
      setIsLoading(true);
      const response: FirstBookingRes = await createBooking(bookingReq);
      const bookingRes = response.bookingDetails;

      navigate('/confirmation', {
        state: { bookingRes, displayTime: date },
      });
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Booking failed. Please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {errorMessage && <p className='booking-form__error'>{errorMessage}</p>}
      <form className='booking-form' onSubmit={handleSubmit}>
        <SubHeading heading={'WHEN, WHAT & WHO'} />
        <div className='booking-form__top-container'>
          <div className='form-field'>
            <label className='form-field__label' htmlFor='date'>
              DATE
            </label>
            <select
              className='form-field__input'
              id='date'
              value={!selectedDate ? '' : date}
              onChange={(event) => {
                setSelectedDate(true);
                setDate(event.target.value);
              }}
              required
            >
              <option disabled hidden value=''>
                Choose a date
              </option>
              {dates?.map((d) => (
                <option key={d.full} value={d.full}>
                  {d.display}
                </option>
              ))}
            </select>
          </div>

          <div className='form-field form-field--red'>
            <label
              className='form-field__label form-field__label--red'
              htmlFor='time'
            >
              TIME
            </label>
            <select
              className='form-field__input form-field__input--red'
              id='time'
              value={!selectedTime ? '' : time}
              onChange={(event) => {
                setSelectedTime(true);
                setTime(event.target.value);
              }}
              required
            >
              <option value='' disabled hidden>
                Choose a time
              </option>

              {times?.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='form-field'>
          <label className='form-field__label' htmlFor='pers'>
            NUMBER OF AWESOME BOWLERS
          </label>
          <select
            className='form-field__input'
            id='pers'
            value={!selectedPeople ? '' : people}
            onChange={(event) => {
              setSelectedPeople(true);
              setPeople(parseInt(event.target.value));
            }}
            required
          >
            <option value='' disabled hidden>
              How many guests?
            </option>
            {Array.from({ length: lanes * 4 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} pers
              </option>
            ))}
          </select>
        </div>
        <div className='form-field'>
          <label className='form-field__label' htmlFor='lanes'>
            NUMBER OF LANES
          </label>
          <select
            className='form-field__input'
            name='lanes'
            id='lanes'
            value={!selectedLanes ? '' : lanes}
            onChange={(event) => {
              setSelectedLanes(true);
              setLanes(parseInt(event.target.value));
            }}
            required
          >
            <option value='' disabled hidden>
              How many lanes?
            </option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? 'lane' : 'lanes'}
              </option>
            ))}
          </select>
        </div>
        {selectedPeople && (
          <>
            <SubHeading heading={'SHOES'} />
            {shoes.map((size, index) => (
              <div className='booking-form__shoe-container' key={index}>
                <div className='form-field'>
                  <select
                    className='form-field__input'
                    value={size}
                    onChange={(event) =>
                      handleChangeShoe(index, Number(event.target.value))
                    }
                  >
                    {shoeSizes.map((size) => (
                      <option key={size} value={size}>
                        Euro {size}
                      </option>
                    ))}
                  </select>
                </div>
                <RoundButton
                  onClick={() => handleRemoveShoe(index)}
                  symbol={removeIcon}
                  symbolName={'remove'}
                />
              </div>
            ))}
            {shoes.length < people && (
              <RoundButton
                className={'booking-form__add-btn'}
                onClick={handleAddShoe}
                symbol={addIcon}
                symbolName={'add'}
                modifier={'bigger'}
              />
            )}
          </>
        )}
        <Button text={'STRIIIIIIKE!'} />
      </form>
    </>
  );
}

export default BookingForm;
