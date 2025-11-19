import Daughter from "./compoents/Daughter";
import Son from "./compoents/Son";
import { useState } from "react";

export default function ParentMainPage(){

    const [sonImplementedLogic,setsonImplementedLogic] = useState(null)

    const getSonComponentData = (data) => {

        setsonImplementedLogic(data)

        console.log("sonImplementedLogic====>",sonImplementedLogic)
        
    }

    const getDaughterComponentData = (data) => {
        console.log("Daugther replied ==> ",data)
    }


    return (
        <div className="base-container">
            <div className="heading">
                <p className="h1 text-center text-primary"> Parent Componet </p>
            </div>
            <div className="body-content">

                <div className="Son-compoennt p-5">
                    <Son 
                        getSonComponentData = { getSonComponentData }
                    />
                </div>



                <div className="daughter-compoennt p-5">
                    <Daughter 
                        sonImplementedLogic = {sonImplementedLogic}
                        getDaughterComponentData = {getDaughterComponentData}
                    />
                </div>
            </div>
        </div>
    )
    
}