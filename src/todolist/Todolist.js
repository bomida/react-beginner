import React, { useState } from 'react';

function ToDoList() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArr => [...currentArr, toDo]);
    setToDo("");
  };
  const onRemove = (event) => {
    const li = event.target.parentElement;
    console.log(li)
    li.remove();
  };

  return (
    <div>
      <h1>Your To Do List ({toDos.length})</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do..."
          value={toDo}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            <button onClick={onRemove}>❌</button>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;