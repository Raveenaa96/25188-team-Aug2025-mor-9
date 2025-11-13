import { useState } from "react";

export default function MovieDetails() {
  const [movieName, setMovieName] = useState("Leo");
  const [releaseYear, setReleaseYear] = useState(2023);
  const [actors, setActors] = useState([
    "Vijay",
    "Trisha",
    "Arjun",
    "Sanjay Dutt",
  ]);

  return (
    <div className="base-container">
      <div className="heading">
        <h1> Function Component State Management </h1>
      </div>

      <div className="movie-details">
        <p> Movie Name : {movieName} </p>
        <p> Release Year : {releaseYear} </p>
      </div>

      <div className="actors">
        <h5> Main Cast </h5>

        <ol type="1">
          {actors && actors.length !== 0 ?
          (
            actors.map((value, index) => {
              return <li key={index}>{value}</li>;
            })
          ) : (<li> No actors found </li>)}
        </ol>
      </div>
    </div>
  );
}
