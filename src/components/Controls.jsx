const Controls = ({ onInput }) => {
  return (
    <>
      <label for="search">Search</label>
      <input onInput={onInput} type="text" id="search" name="search" />
    </>
  );
};

export default Controls;
