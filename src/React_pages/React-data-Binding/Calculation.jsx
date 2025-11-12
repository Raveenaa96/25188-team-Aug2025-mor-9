export default function Calculation(){

    const heading = "Calculator"
    const createdBy = "Jesintha"

    const firstValue = 500
    const secondValue = 300

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