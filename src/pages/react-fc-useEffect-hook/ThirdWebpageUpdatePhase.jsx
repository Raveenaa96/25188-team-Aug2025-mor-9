import { useState,useEffect } from "react"


export default function ThirdWebpageUpdatePhase(){

    const [count,setCount] = useState(0)

    useEffect(()=>{
        //Intial - Phase
        console.log("Inital Phase is calling....")
        
        setTimeout(()=>{
            setCount(count + 1)
        },2000)
        

    },[count])


    return(
        <div className="base-container">
            <div className="heading">
                <p className="h1 text-center text-primary"> React Use Effect Hook </p>
            </div>
            <div className="body-content">
                <div className="content">
                    <div className="h5">
                        <p className = "ps-5">use Effect Initial Phase</p>
                         <p> Count : {count} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}