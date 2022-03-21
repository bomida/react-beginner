import React from 'react';
import PlusMinus from './StateFnc';
import Converter from './StateExample';
import Buttons from './PropFnc';
import UseEffect from './UseEffect';

function Practice() {
  return (
    <div>
      <PlusMinus />
      <hr />
      <Converter />
      <hr />
      <Buttons />
      <hr />
      <UseEffect />
    </div>
  );
}

export default Practice;