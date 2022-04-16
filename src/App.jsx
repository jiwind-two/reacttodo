import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState(``);
  const [incompleteTodos, setincompleteTodos] = useState([
    `ああああ`,
    `いいいい`
  ]);
  const [completeTodos, setcompleteTodos] = useState([`うううううう`]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodos, todoText];
    setincompleteTodos(newTodo);
    setTodoText("");
  };
  const onClickDelete = () => {
    alert("削除");
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
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={onClickDelete}>削除</button>
              </div>
            );
          })}
          ;
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
          ;
        </ul>
      </div>
    </>
  );
};
