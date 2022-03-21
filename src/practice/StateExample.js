import React, { useState } from "react";

function MinutesToHours() {
  const [number, setNumber] = useState('');
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => setNumber(event.target.value);
  const reset = () => setNumber('');
  const onInvert = () => {
    setInverted(current => !current);
    reset();
  };

  return (
    <div>
      <h4>Minutes to Hours</h4>
      <div>
        <label htmlFor="Minutes">Minutes </label>
        <input
          id="Minutes"
          placeholder="Minutes"
          type="number"
          value={inverted ? number * 60 : number}
          onChange={onChange}
          disabled={inverted === true}
        />
      </div>
      <div>
        <label htmlFor="Hours">Hours </label>
        <input
          id="Hours"
          placeholder="Hours"
          type="number"
          value={inverted ? number : Math.round(number / 60)}
          onChange={onChange}
          disabled={inverted === false}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? 'Turn back' : 'Inverted'}</button>
    </div>
  )
}

function KilometersToMiles() {
  const [number, setNumber] = useState('');
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => setNumber(event.target.value);
  const reset = () => setNumber('');
  const onInvert = () => {
    setInverted(prev => !prev);
    reset();
  }

  return (
    <div>
      <h4>Km to Miles</h4>
      <div>
        <label htmlFor="miles">Miles </label>
        <input
          id="miles"
          placeholder="Miles"
          type="number"
          value={inverted ? number * 0.621371.toFixed(3) : number}
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="kilometers">Kilometers </label>
        <input
          id="kilometers"
          placeholder="Kilometers"
          type="number"
          value={inverted ? number : number * 1.609.toFixed(3)}
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>Inverte</button>
    </div>
  );
}

function Converter() {
  const [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
  }

  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">---select Units---</option>
        <option value="1">
          Minutes & Hours
        </option>
        <option value="2">
          Kilometers & Miles
        </option>
      </select>
      {index === "0" ? <h4>Please Select your units</h4> : null}
      {index === "1" ? <MinutesToHours /> : null}
      {index === "2" ? <KilometersToMiles /> : null}
    </div>
  );
}

export default Converter;