const Filter = ({
  all,
  active,
  complete,
  count,
  theme,
  allLists,
  filterActive,
  filterAll,
  filterComplete,
}) => {
  return (
    <div className={`filter ${theme} ${count ? "" : "zero"}`}>
      <button
        className={`filter-list ${all}`}
        onClick={() => filterAll(allLists)}
      >
        All
      </button>
      <button
        className={`filter-list ${active}`}
        onClick={() => filterActive(allLists)}
      >
        Active
      </button>
      <button
        className={`filter-list ${complete}`}
        onClick={() => filterComplete(allLists)}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
