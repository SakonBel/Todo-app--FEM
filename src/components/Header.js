import { useState } from "react";

const Header = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <header>
      <div className="container">
        <h1 className="title">todo</h1>
        <button className="change-theme">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
            />
          </svg>
        </button>
      </div>
      <div className="create-task">
        <form
          onSubmit={(e) => {
            if (text !== "") {
              e.preventDefault();
              addTodo(text);
              setText("");
            } else {
              e.preventDefault();
            }
          }}
        >
          <div
            className="circle"
            onClick={(e) => {
              if (text !== "") {
                e.preventDefault();
                addTodo(text);
                setText("");
              } else {
                e.preventDefault();
              }
            }}
          ></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
