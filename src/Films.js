import React, { useEffect, useState } from "react";

const Films = () => {
  const [films, setFilms] = useState([]);

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
      {films.map((f, index) => (
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
    </div>
  );
};

export default Films;
