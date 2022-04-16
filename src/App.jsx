import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState(``);
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodos, todoText];
    setincompleteTodos(newTodo);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setincompleteTodos(newTodo);
  };
  const onClickComplete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setincompleteTodos(newTodo);
    const newTodo2 = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newTodo2);
  };
  const onClickBack = (index) => {
    const newcompleteTodo = [...completeTodos];
    newcompleteTodo.splice(index, 1);
    setcompleteTodos(newcompleteTodo);
    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];
    setincompleteTodos(newIncompleteTodo);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOの入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
