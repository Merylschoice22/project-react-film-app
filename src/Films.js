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
    <div>
      <h2>Films</h2>
      <p>Here are films</p>
      <div>
        {films.map((f, index) => (
          <p key={index}>{f.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Films;
