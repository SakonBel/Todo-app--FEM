import AllTodos from "./components/AllTodos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
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

  const body = document.querySelector("body");

  const [allLists, setAllLists] = useState(lists);
  const [todos, setTodos] = useState(allLists);
  const [all, setAll] = useState("all");
  const [active, setActive] = useState("");
  const [complete, setComplete] = useState("");
  const [theme, setTheme] = useState("dark");
  const [visible, setVisible] = useState("hidden");

  body.className = theme;

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const [count, setCount] = useState(() => {
    const tempLists = lists.filter((list) => list.active === true);
    return tempLists.length;
  });

  const toggleActive = (id) => {
    const newLists = allLists.map((list) => {
      if (list.id === id) {
        list.active = !list.active;
      }
      return list;
    });
    setTodos(newLists);
    setAllLists(newLists);
    countTodo(newLists);
  };

  const toggleModal = () => {
    if (visible === "hidden") {
      setVisible("visible");
    } else {
      setVisible("hidden");
    }
  };

  const countTodo = (lists) => {
    const newCount = lists.filter((list) => list.active === true);
    setCount(newCount.length);
  };

  const addTodo = (text) => {
    const newList = {
      id: Math.floor(Math.random() * 10000000),
      task: text,
      active: true,
    };

    const newAll = allLists.map((list) => list);
    newAll.push(newList);

    setTodos(newAll);
    setAllLists(newAll);
    countTodo(newAll);
  };

  const deleteTodo = (id) => {
    const newLists = allLists.filter((list) => list.id !== id);
    const newTodos = todos.filter((list) => list.id !== id);
    setTodos(newTodos);
    setAllLists(newLists);
    countTodo(newLists);
  };

  const deleteCompleted = () => {
    const newList = allLists.filter((list) => list.active !== false);
    const newTodos = todos.filter((todo) => todo.active !== false);
    setAllLists(newList);
    setTodos(newTodos);
  };

  const filterAll = (memo) => {
    setTodos(memo);
    setAll("all");
    setActive("");
    setComplete("");
  };

  const filterActive = (memo) => {
    const tasks = memo.filter((todo) => todo.active === true);
    setTodos(tasks);
    setActive("active");
    setAll("");
    setComplete("");
  };

  const filterComplete = (memo) => {
    const tasks = memo.filter((todo) => todo.active === false);
    setTodos(tasks);
    setComplete("complete");
    setActive("");
    setAll("");
  };

  return (
    <div className="App">
      <Header addTodo={addTodo} theme={theme} changeTheme={changeTheme} />
      <AllTodos
        allLists={allLists}
        todos={todos}
        count={count}
        all={all}
        active={active}
        complete={complete}
        theme={theme}
        toggleActive={toggleActive}
        toggleModal={toggleModal}
        deleteTodo={deleteTodo}
        filterAll={filterAll}
        filterActive={filterActive}
        filterComplete={filterComplete}
      />
      <Modal
        visible={visible}
        toggleModal={toggleModal}
        deleteCompleted={deleteCompleted}
      />
      <Footer />
    </div>
  );
}

export default App;
