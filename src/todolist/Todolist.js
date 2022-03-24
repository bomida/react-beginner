import React, { useState } from 'react';
import './Todolist.css';

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
    <div className='todo-container'>
      <h1>Your To Do List ({toDos.length})</h1>

      <form onSubmit={onSubmit}>
        <input
          className='input-text'
          type="text"
          placeholder="Write your to do..."
          value={toDo}
          onChange={onChange}
        />
        <input
          className='input-button'
          type="submit"
          value="Submit"
        />
      </form>
      <hr />
      <ul className='todolist'>
        {toDos.map((item, index) => (
          <li className='todolist__item' key={index}>
            <span>{item}</span>
            <button onClick={onRemove}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;