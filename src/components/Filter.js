const Filter = ({ lists, filterActive, filterAll, filterComplete }) => {
  return (
    <div className="filter">
      <button className="filter-list" onClick={() => filterAll(lists)}>
        All
      </button>
      <button className="filter-list" onClick={() => filterActive(lists)}>
        Active
      </button>
      <button className="filter-list" onClick={() => filterComplete(lists)}>
        Completed
      </button>
    </div>
  );
};

export default Filter;
