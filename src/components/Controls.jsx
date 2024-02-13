const Controls = ({ onSearchInput, onNewInput, onNewBtn }) => {
  return (
    <>
      <label for="search">Search</label>
      <input onInput={onSearchInput} type="text" id="search" name="search" />
      <label for="new">New todo</label>
      <input onInput={onNewInput} type="text" id="new" name="new" />
      <button onClick={onNewBtn}>Add</button>
    </>
  );
};

export default Controls;
