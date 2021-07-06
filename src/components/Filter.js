const Filter = ({ todos, filterActive }) => {
  return (
    <div className="filter">
      <button className="filter-list">All</button>
      <button className="filter-list" onClick={() => filterActive(todos)}>
        Active
      </button>
      <button className="filter-list">Completed</button>
    </div>
  );
};

export default Filter;
