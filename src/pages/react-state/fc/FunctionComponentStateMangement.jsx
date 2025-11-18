import { useState } from "react";

export default function FunctionComponentStateManagement()
{
  const [movieName,setMovieName]=useState("Leo");
  const [releaseYear,setReleaseYear]=useState(2023);
  const [actors,setActors]=useState([
    "Vijay",
    "Trisha",
    "Gauthan Vasudev Menon",
    "Arjun"
  ])

  return(
    <div className="base-container">
      <div className="heading">
      <h1>Moview Details</h1>
      <h1>MovieName: {movieName}</h1>
      <h1>ReleaseYear: {releaseYear}</h1>
      </div>
      <div className="actors">
        <h1>ACtors:</h1>
        <ol>
          {
            actors && actors.length!==0 ?
            actors.map((value,index)=>
            {
              return <li key={index}>{value}</li>
            }):
            <li>No actors found</li>
          }
        </ol>
      </div>

    </div>
  )
}