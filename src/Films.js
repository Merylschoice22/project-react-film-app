import React, { useEffect, useState } from "react";
import LoadMoreBtn from "./LoadMoreBtn";
const Films = () => {
  //add props
  const [films, setFilms] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);

  const getStart = () => {
    setStart((prevState) => prevState + 2);
    setEnd((prevState) => prevState + 2);
  };
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilms(data);
      });
  }, []);

  return (
    <div className=" list-card">
      {films.slice(start, end).map((f, index) => (
        <div className="item " key={index}>
          <h3 className="details">{f.title}</h3>
          <div className="details">
            <p>Director: {f.director}</p>
            <p>Producer: {f.producer}</p>
            <p>Release Date: {f.release_date}</p>
            <p>Rotten Tomato Score: {f.rt_score}</p>
          </div>
        </div>
      ))}
      <button onClick={getStart}>Load More</button>
    </div>
  );
};

export default Films;
