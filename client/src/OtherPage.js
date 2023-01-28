import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      multi-fib
      <br />
      Mateusz Markowski
      <br />
      I2S 2.3
      <Link to="/">Go back home</Link>
    </div>
  );
};
