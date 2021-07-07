import Filter from "./Filter";

const AllTodos = ({
  lists,
  todos,
  filterActive,
  filterAll,
  filterComplete,
}) => {
  return (
    <main>
      <div className="lists">
        <ul className="todo-lists">
          {todos.map((todo) => {
            if (todo.active) {
              return (
                <li className="todo-item" key={todo.id}>
                  <div className="item">
                    <div className="circle"></div>
                    {todo.task}
                  </div>
                  <div className="cross">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                      />
                    </svg>
                  </div>
                </li>
              );
            } else {
              return (
                <li className="todo-item complete" key={todo.id}>
                  <div className="item">
                    <div className="circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                      >
                        <path
                          fill="none"
                          stroke="#FFF"
                          stroke-width="2"
                          d="M1 4.304L3.696 7l6-6"
                        />
                      </svg>
                    </div>
                    {todo.task}
                  </div>
                  <div className="cross">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                      />
                    </svg>
                  </div>
                </li>
              );
            }
          })}
        </ul>
        <div className="list-status">
          <p className="list-count">5 items left</p>
          <button className="clear">Clear Completed</button>
        </div>
      </div>
      <Filter
        lists={lists}
        filterActive={filterActive}
        filterAll={filterAll}
        filterComplete={filterComplete}
      />
    </main>
  );
};

export default AllTodos;
