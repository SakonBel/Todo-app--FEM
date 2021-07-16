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
  const [position, setPosition] = useState(null);
  const [tempActiveTodos, setTempActiveTodos] = useState(null);
  const [tempCompletedTodos, setTempCompletedTodos] = useState(null);
  const [tempAllTodos, setTempAllTodos] = useState(null);
  const [check, setCheck] = useState(true);
  const [count, setCount] = useState(() => {
    const tempLists = lists.filter((list) => list.active === true);
    return tempLists.length;
  });

  body.className = theme;

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const toggleActive = (id) => {
    const newLists = allLists.map((list) => {
      if (list.id === id) {
        list.active = !list.active;
      }
      return list;
    });

    const newTodos = todos.map((todo) => todo);

    setTodos(newTodos);
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

  const activeCheck = () => {
    const result = allLists.some((list) => list.active === false);
    setCheck(result);
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
    storeTempTodos(newLists);
  };

  const deleteCompleted = () => {
    const newList = allLists.filter((list) => list.active !== false);
    const newTodos = todos.filter((todo) => todo.active !== false);
    setAllLists(newList);
    setTodos(newTodos);
    storeTempTodos(newList);
  };

  const filterAll = (memo) => {
    if (tempAllTodos) {
      setTodos(tempAllTodos);
      setAllLists(tempAllTodos);
    } else {
      setTodos(memo);
    }

    setAll("all");
    setActive("");
    setComplete("");
  };

  const filterActive = (memo) => {
    if (tempActiveTodos) {
      setTodos(tempActiveTodos);
    } else {
      const tasks = memo.filter((todo) => todo.active === true);
      setTodos(tasks);
    }

    setActive("active");
    setAll("");
    setComplete("");
  };

  const filterComplete = (memo) => {
    if (tempCompletedTodos) {
      setTodos(tempCompletedTodos);
    } else {
      const tasks = memo.filter((todo) => todo.active === false);
      setTodos(tasks);
    }
    setComplete("complete");
    setActive("");
    setAll("");
  };

  const storeTempTodos = (todos) => {
    const allList = document.querySelectorAll("li");

    const newLists = [];
    allList.forEach((list) => {
      newLists.push(...todos.filter((todo) => todo.id === Number(list.id)));
    });

    if (active) {
      setTempActiveTodos(newLists);
    } else if (complete) {
      setTempCompletedTodos(newLists);
    } else {
      setTempAllTodos(newLists);
    }
  };

  const dragStart = (e) => {
    setTimeout(() => {
      e.target.classList.add("dragged");
    }, 0);

    setPosition(e.target.offsetTop);
  };

  const dragEnd = (e) => {
    setTimeout(() => {
      e.target.classList.remove("dragged");
      storeTempTodos(todos);
    }, 0);
  };

  const dragOver = (e) => {
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
        activeCheck={activeCheck}
        toggleActive={toggleActive}
        toggleModal={toggleModal}
        deleteTodo={deleteTodo}
        filterAll={filterAll}
        filterActive={filterActive}
        filterComplete={filterComplete}
        dragStart={dragStart}
        dragEnd={dragEnd}
        dragOver={dragOver}
      />
      <Modal
        check={check}
        theme={theme}
        visible={visible}
        toggleModal={toggleModal}
        deleteCompleted={deleteCompleted}
      />
      <Footer />
    </div>
  );
}

export default App;
