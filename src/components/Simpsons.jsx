const Simpsons = ({ simpsons }) => {
  return simpsons.map((simpson) => {
    return (
      <div style={{ backgroundColor: "red", margin: "10px" }}>
        <p>{simpson.character}</p>
        <p>{simpson.quote}</p>
      </div>
    );
  });
};

export default Simpsons;
