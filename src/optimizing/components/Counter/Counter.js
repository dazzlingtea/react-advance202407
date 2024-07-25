import React, { useState, memo } from 'react';

import IconButton from '../UI/IconButton';
import MinusIcon from '../UI/Icons/MinusIcon';
import PlusIcon from '../UI/Icons/PlusIcon';
import CounterOutput from './CounterOutput';
import { log } from '../../log';

const isPrime = number => {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const Counter = ({ initialCount }) => {
  log('<Counter /> rendered', 1);
  const initialCountIsPrime = isPrime(initialCount);

  const [counter, setCounter] = useState(initialCount);

  const decrementHandler = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const incrementHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={decrementHandler}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={incrementHandler}>
          Increment
        </IconButton>
      </p>
    </section>
  );
};
export default memo(Counter);