import AllTodos from "./components/AllTodos";
import Header from "./components/Header";

function App() {
  const lists = [
    {
      id: 1,
      task: "Complete online JavaScript course",
    },
    {
      id: 2,
      task: "Jog around the park 3x",
    },
    {
      id: 3,
      task: "10 minutes meditation",
    },
    {
      id: 4,
      task: "Read for 1 hour",
    },
    {
      id: 5,
      task: "Pick up groceries",
    },
    {
      id: 6,
      task: "Complete Todo App on Frontend Mentor",
    },
  ];

  return (
    <div className="App">
      <Header />
      <AllTodos todos={lists} />
    </div>
  );
}

export default App;
