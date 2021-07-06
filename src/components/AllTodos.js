import Navbar from "./Navbar";

const AllTodos = (props) => {
  // const todos = props.map((todo) => <li id={props.id}>{props.task}</li>);
  // console.log(todos);
  return (
    <main>
      <div className="lists">
        <ul className="todo-lists"></ul>
        <div className="list-status">
          <p className="list-count">5 items left</p>
          <button className="clear">Clear Completed</button>
        </div>
      </div>
      <Navbar />
    </main>
  );
};

export default AllTodos;
