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
    <button style={{ fontSize: "20px" }} onClick={onClick}>Click 😎</button>
    <h3>Search Practice</h3>
    <input
      type="text"
      placeholder="Search here..."
      value={keyword}
      onChange={onChange}
    />
  </div>
}

// 📘 NOTE
// - 두 개의 argument를 가지는 함수
// - 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드를 넣는다.
// - 두 번째는 [] -> 배열을 넣어준다.
// - useEffect가 componenet의 첫 번째 렌더 시점에 iRunOnlyOnce함수를 호출하고
// - 상태를 변화시키면 더이상 iRunOnlyOnce는 호출되지 않는다.
// - 비어있는 배열을 사용하는 것은 한 번만 호출하고 싶을 때 사용한다. 
//   배열이 비어 있어 react가 지켜볼게 없기 때문에 한 번만 실행 시키는 것
// - 언제 코드를 실행할 지 선택권을 가질 수 있고, 배열에 넣은 요소에 변화가 있을 때만 해당 코드를 실행시킬 수 있는 방법이다.


export default UseEffect;