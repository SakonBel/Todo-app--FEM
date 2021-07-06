import { useState } from "react";
import Filter from "./Filter";

const AllTodos = ({ todos, filterActive }) => {
  return (
    <main>
      <div className="lists">
        <ul className="todo-lists">
          {todos.map((todo) => (
            <li className="todo-item" key={todo.id}>
              <div className="item">
                <div className="circle"></div>
                {todo.task}
              </div>
              <div className="cross">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path
                    fill="#494C6B"
                    fill-rule="evenodd"
                    d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
        <div className="list-status">
          <p className="list-count">5 items left</p>
          <button className="clear">Clear Completed</button>
        </div>
      </div>
      <Filter todos={todos} filterActive={filterActive} />
    </main>
  );
};

export default AllTodos;
