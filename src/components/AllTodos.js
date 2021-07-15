import Filter from "./Filter";

const AllTodos = ({
  allLists,
  todos,
  count,
  all,
  active,
  complete,
  theme,
  toggleActive,
  toggleModal,
  deleteTodo,
  filterActive,
  filterAll,
  filterComplete,
  dragStart,
  dragEnd,
  position,
  setPosition,
}) => {
  return (
    <main>
      <div className={`lists ${theme}`}>
        <ul
          className="todo-lists"
          onDragOverCapture={(e) => {
            e.preventDefault();
            e.stopPropagation();

            const ul = document.querySelector("ul");
            const dragged = document.querySelector(".dragged");

            if (e.target.offsetTop <= 0 && position > 0) {
              ul.prepend(dragged);
              setPosition(0);
            } else if (e.target.offsetTop > 0 && e.target.tagName === "LI") {
              if (position > e.target.offsetTop) {
                e.target.after(dragged);
                setPosition(e.target.offsetTop - e.target.offsetHeight / 2);
              } else if (position < e.target.offsetTop) {
                e.target.before(dragged);
                setPosition(e.target.offsetTop + e.target.offsetHeight / 2);
              }
            }
          }}
          // onClick={() => {
          //   const allList = document.querySelectorAll("li");

          //   const newLists = [];
          //   allList.forEach((list) => {
          //     newLists.push(
          //       ...todos.filter((todo) => todo.id === Number(list.id))
          //     );
          //   });

          //   console.log(newLists);
          // }}
        >
          {todos.map((todo) => {
            if (todo.active) {
              return (
                <li
                  id={todo.id}
                  className="todo-item"
                  key={todo.id}
                  draggable="true"
                  onDragStart={dragStart}
                  onDragEnd={dragEnd}
                >
                  <div className="item">
                    <div
                      className="circle"
                      onClick={() => toggleActive(todo.id)}
                    ></div>
                    {todo.task}
                  </div>
                  <div className="cross" onClick={() => deleteTodo(todo.id)}>
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
                <li
                  id={todo.id}
                  className="todo-item complete"
                  key={todo.id}
                  draggable="true"
                  onDragStart={dragStart}
                  onDragEnd={dragEnd}
                >
                  <div className="item">
                    <div
                      className="circle"
                      onClick={() => toggleActive(todo.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                      >
                        <path
                          fill="none"
                          stroke="#FFF"
                          strokeWidth="2"
                          d="M1 4.304L3.696 7l6-6"
                        />
                      </svg>
                    </div>
                    {todo.task}
                  </div>
                  <div className="cross" onClick={() => deleteTodo(todo.id)}>
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
          <p className="list-count">{count} items left</p>
          <button className="clear" onClick={toggleModal}>
            Clear Completed
          </button>
        </div>
      </div>
      <Filter
        all={all}
        active={active}
        complete={complete}
        theme={theme}
        allLists={allLists}
        filterActive={filterActive}
        filterAll={filterAll}
        filterComplete={filterComplete}
      />
    </main>
  );
};

export default AllTodos;
