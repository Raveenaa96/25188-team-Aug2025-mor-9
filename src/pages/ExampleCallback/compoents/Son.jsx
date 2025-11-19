import { useState } from "react"

export default function Son(
    {
        getSonComponentData
    }
){
    const [buildAlterate,setBuildingAlter] = useState("swimming pool")

    getSonComponentData(buildAlterate)

    return (
        <div className="base-container">
            <div className="body-content">
                <p className="h3  text-secondary"> Son Componet </p>
                <p>Modified House curretly - {buildAlterate}</p>
            </div>
        </div>
    )
    
}