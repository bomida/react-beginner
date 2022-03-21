import React, { useState } from "react";
import PropTypes from 'prop-types'


function Btn({ text, onClick, fontSize }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "tomato",
        color: "white",
        border: "none",
        padding: "10px 25px",
        borderRadius: "10px",
        marginRight: "10px",
        fontSize,
      }}>{text}</button>
  )
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  onClick: PropTypes.func,
}

function Buttons() {
  const [value, setValue] = useState("Save");
  const changeValue = () => setValue('Changed Save Btn');

  return (
    <div>
      <h1>Buttons</h1>
      <Btn text="Confirm" fontSize={20} />
      <Btn text={value} onClick={changeValue} />
    </div>
  );
}

// NOTE!

// Props
// - props는 부모 컴포넌트로 부터 자식 컴포넌트에게 데이터를 전송하는 방식이다.
// - 부모에 props를 사용하면 자식 컴포넌트(함수)의 인자로 object가 들어가게 된다.
// - 예전에는 function Btn(props) { {props.text} } -> 이런식으로 썼지만
//   현재는 function Btn({text}) { {text} } -> 이렇게 바로 중괄호를 열어 property를 받아온다.
// - props에는 sting, number, boolean 또는 함수를 넣을 수도 있다.
// - <Btn onClick={changeValue} /> 이것은 이벤트 리스너가 아닌,
//   컴포넌트에 onClick이라는 props를 전달한 것이다. 여기서 onClick은 단순히 props의 이름이다. 

// React.memo
// - React.memo는 component가 동일한 props로 동일한 결과를 렌더린해낸다면,
//   React.memo를 호출하고 결과를 메모이지(memoizing)하도록 래핑하여 경우에 따라
//   성능 향상을 누릴 수 있다. 그리고 React.memo는 props 변화에만 영향을 준다.
// - React.memo 메서드는 오직 성능 최적화를 위하여 사용됩니다.

// Prop Types
// - 터미널에 prop-types라이브러리를 설치한다. `npm install prop-types`
// - 필수로 모든 component에 값을 확인하려면 .isRequired를 사용,
//   선택 사항이라면 .isRequired를 사용하지 말자.
// - 더 많은 사용법은 여기를 참고 https://www.npmjs.com/package/prop-types

export default Buttons;