const Filter = ({ allLists, filterActive, filterAll, filterComplete }) => {
  return (
    <div className="filter">
      <button className="filter-list" onClick={() => filterAll(allLists)}>
        All
      </button>
      <button className="filter-list" onClick={() => filterActive(allLists)}>
        Active
      </button>
      <button className="filter-list" onClick={() => filterComplete(allLists)}>
        Completed
      </button>
    </div>
  );
};

export default Filter;
