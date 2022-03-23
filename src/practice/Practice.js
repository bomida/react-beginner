import React from 'react';
import PlusMinus from './StateFnc';
import Converter from './StateExample';
import Buttons from './PropFnc';
import UseEffect from './UseEffect';



function Practice() {
  return (
    <div style={{
      padding: "40px 100px"
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "50px"
      }}>Practice</h1>
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