import AllTodos from "./components/AllTodos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  let lists = [
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

  const [allLists, setAllLists] = useState(lists);
  const [todos, setTodos] = useState(allLists);

  const toggleActive = (id) => {
    const newLists = allLists.map((list) => {
      if (list.id === id) {
        list.active = !list.active;
      }
      return list;
    });
    setTodos(newLists);
    setAllLists(newLists);
  };

  const addTodo = (text) => {
    const newList = {
      id: Math.floor(Math.random() * 10000000),
      task: text,
      active: true,
    };

    allLists.push(newList);
    setTodos(allLists);
    setAllLists(allLists);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setAllLists(newTodos);
  };

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
      <Header addTodo={addTodo} />
      <AllTodos
        allLists={allLists}
        todos={todos}
        toggleActive={toggleActive}
        deleteTodo={deleteTodo}
        filterAll={filterAll}
        filterActive={filterActive}
        filterComplete={filterComplete}
      />
      <Footer />
    </div>
  );
}

export default App;
