const Simpsons = ({ simpsons }) => {
  return simpsons.map((simpson) => {
    return <p>{simpson.quote}</p>;
  });
};

export default Simpsons;
