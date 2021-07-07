import AllTodos from "./components/AllTodos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const lists = [
    {
      id: 1,
      task: "Complete online JavaScript course",
      active: false,
    },
    {
      id: 2,
      task: "Jog around the park 3x",
      active: true,
    },
    {
      id: 3,
      task: "10 minutes meditation",
      active: true,
    },
    {
      id: 4,
      task: "Read for 1 hour",
      active: true,
    },
    {
      id: 5,
      task: "Pick up groceries",
      active: true,
    },
    {
      id: 6,
      task: "Complete Todo App on Frontend Mentor",
      active: true,
    },
  ];

  const [todos, setTodos] = useState(lists);
  // const [active, setActive] = useState(null);

  // const statusChange = (id) => {
  //   todo.active = !todo.active;
  // };

  const filterAll = (todos) => {
    setTodos(todos);
  };

  const filterActive = (todos) => {
    const tasks = todos.filter((todo) => todo.active === true);
    setTodos(tasks);
  };

  const filterComplete = (todos) => {
    const tasks = todos.filter((todo) => todo.active === false);
    setTodos(tasks);
  };

  return (
    <div className="App">
      <Header />
      <AllTodos
        lists={lists}
        todos={todos}
        filterAll={filterAll}
        filterActive={filterActive}
        filterComplete={filterComplete}
      />
      <Footer />
    </div>
  );
}

export default App;
