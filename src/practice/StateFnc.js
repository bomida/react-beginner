import React, { useState } from "react";

function PlusMinus() {
  const [number, setNumber] = useState(0);
  const PlusNumer = () => setNumber(current => current + 1);
  const MinusNumber = () => setNumber(current => current - 1);

  return (
    <div>
      <h1>Counter</h1>
      <h3>The number is : {number}</h3>
      <button onClick={PlusNumer}>Plus</button>
      <button onClick={MinusNumber}>Minus</button>
    </div>
  );
}

// NOTE!
// - usetate를 이용해 버튼을 클릭 시 +1 또는 -1을 하는 카운터를 만들었다.
// - const [상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기 값);
// - 위와 같이 useState를 사용하고, 배열의 첫 번째 값은 초기값을 두번 째 값은 초기값을 변경하는 함수이다.
// - 함수에 값을 넣어주면 데이터 값이 업데이트 되고 업데이트 된 부분만 리렌더링한다.
// - useState는 함수형에서 사용하고, Class를 사용할 시에는 setState를 사용한다.
// - state를 세팅하는 데는 2가지 방법이 있다.
//   1) 직접 할당 : setNumber( number + 1)
//      -> 현재 state랑 관련이 없는 값을 새로운 state로 하고싶을 때
//   2) 함수를 할당 : setNumber(current => current + 1)
//      -> 현재 state에 조금의 변화를 주어서 새로운 state를 주고 싶을 때
// - setNumber(current => current++)를 하면 오류가 나는 이유!
//   찾아본 바로는 current + 1은 current의 값이 그대로인 상태에서 1을 더하고 다시 변수를 만들지만?
//   current++는 변수 값 자체를 '바꾸기' 때문이다.

export default PlusMinus;