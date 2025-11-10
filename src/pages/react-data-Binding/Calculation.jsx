export default function Calculation(){

    const heading = "Calculator"
    const createdBy = "Pavithra"

    const firstValue = 100
    const secondValue = 200

    return <div>
         <div className="heading">
             <h1>{ heading }</h1>
         </div>

         <div>
             <p> Created By : {createdBy} </p>
         </div>
        <p> Additon : { firstValue + secondValue } </p>
    
    </div>
}