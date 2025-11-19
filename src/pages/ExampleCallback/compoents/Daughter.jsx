export default function Daughter(
    {
        sonImplementedLogic,
        getDaughterComponentData
    }
){

    getDaughterComponentData("My husband is going office")

    return (
        <div className="base-container">
            <div className="body-content">
                <p className="h3  text-success"> Daughter Componet </p>
            </div>
            <div className="body-content">
                 <p className="h3">
                     She is pushed husband - {sonImplementedLogic}
                 </p>
            </div>
        </div>
    )
    
}