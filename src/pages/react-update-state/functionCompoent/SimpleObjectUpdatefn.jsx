import { useState } from "react";

export default function SimpleObjectUpdatefn() {

  const [authordetails, setAuthordetails] = useState(
       {
          authorName : "Saravanan Durai",
          dateofBirth:"04-09-1992",
          birthPlace : "Chennai Roayapet",
          qualifaction: "Masters in novel",
          liveStatus : "live"
       }
  );

  return (
    <div className="base-container">
        <div className="heading">
             <h1> {authordetails.authorName}  </h1>
        </div>
        <div className="author-details">
            <p>Date of Birth : {authordetails.dateofBirth} </p> 
            <button onClick={ () => setAuthordetails({...authordetails,dateofBirth: "05-05-2025"}) }> change dob </button>
        </div>
        <div className="author-details">
            <p>Birth Place : {authordetails.birthPlace} </p> 
            <button onClick={ () => setAuthordetails({...authordetails,birthPlace: "Madurai CMC"}) }> change birth place </button>
        </div>
        <div className="author-details">
            <p>Qualification : {authordetails.qualifaction} </p> 
            <button onClick={ () => setAuthordetails({...authordetails,qualifaction: "becholor in  Novel"}) }> change qualification </button>
        </div>
            <div className="author-details">
            <p>Live Status : {authordetails.liveStatus} </p> 
            <button onClick={ () => setAuthordetails({...authordetails,liveStatus: "Alive"}) }> change live status </button>
        </div>
        
    </div>
  );
}
