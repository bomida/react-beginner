import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Practice from './practice/Practice';
import ToDoList from './todolist/Todolist';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Practice /> */}
    <ToDoList />
  </React.StrictMode>,
  document.getElementById('root')
);