import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter(prev => prev + 1);
  const iRunOnlyOnce = () => console.log('I run Only Once');
  const onChange = (event) => setKeyword(event.target.value);

  console.log('I run all the time');
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log('I run ONLY ONCE');
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  // console.log('Search for ', keyword)

  return <div>
    <h1>Use useEffect</h1>
    <h3>{counter}</h3>
    <button style={{ fontSize: "20px" }} onClick={onClick}>Click ๐</button>
    <h3>Search Practice</h3>
    <input
      type="text"
      placeholder="Search here..."
      value={keyword}
      onChange={onChange}
    />
  </div>
}

// ๐ NOTE
// - ๋ ๊ฐ์ argument๋ฅผ ๊ฐ์ง๋ ํจ์
// - ์ฒซ ๋ฒ์งธ argument๋ ์ฐ๋ฆฌ๊ฐ ๋ฑ ํ๋ฒ๋ง ์คํํ๊ณ  ์ถ์ ์ฝ๋๋ฅผ ๋ฃ๋๋ค.
// - ๋ ๋ฒ์งธ๋ [] -> ๋ฐฐ์ด์ ๋ฃ์ด์ค๋ค.
// - useEffect๊ฐ componenet์ ์ฒซ ๋ฒ์งธ ๋ ๋ ์์ ์ iRunOnlyOnceํจ์๋ฅผ ํธ์ถํ๊ณ 
// - ์ํ๋ฅผ ๋ณํ์ํค๋ฉด ๋์ด์ iRunOnlyOnce๋ ํธ์ถ๋์ง ์๋๋ค.
// - ๋น์ด์๋ ๋ฐฐ์ด์ ์ฌ์ฉํ๋ ๊ฒ์ ํ ๋ฒ๋ง ํธ์ถํ๊ณ  ์ถ์ ๋ ์ฌ์ฉํ๋ค. 
//   ๋ฐฐ์ด์ด ๋น์ด ์์ด react๊ฐ ์ง์ผ๋ณผ๊ฒ ์๊ธฐ ๋๋ฌธ์ ํ ๋ฒ๋ง ์คํ ์ํค๋ ๊ฒ
// - ์ธ์  ์ฝ๋๋ฅผ ์คํํ  ์ง ์ ํ๊ถ์ ๊ฐ์ง ์ ์๊ณ , ๋ฐฐ์ด์ ๋ฃ์ ์์์ ๋ณํ๊ฐ ์์ ๋๋ง ํด๋น ์ฝ๋๋ฅผ ์คํ์ํฌ ์ ์๋ ๋ฐฉ๋ฒ์ด๋ค.


export default UseEffect;