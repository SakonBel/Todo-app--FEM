import AllTodos from "./components/AllTodos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);

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

  const filterAll = (todos) => {
    setTodos(todos);
  };

  const filterActive = (todos) => {
    const tasks = todos.filter((todo) => todo.active === true);
    setTodos(tasks);
    console.log(tasks);
  };

  return (
    <div className="App">
      <Header />
      <AllTodos
        todos={lists}
        filterAll={filterAll}
        filterActive={filterActive}
      />
      <Footer />
    </div>
  );
}

export default App;
