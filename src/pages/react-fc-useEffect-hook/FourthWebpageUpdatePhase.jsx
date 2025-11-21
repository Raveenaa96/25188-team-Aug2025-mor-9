import { useState,useEffect, useLayoutEffect } from "react"


export default function FourthWebpageUpdatePhase(){

    const [price,setPrice] = useState(0)
    const [tax,setTax] = useState(0)

    useEffect(()=>{
        //Intial - Phase
        console.log("Inital Phase is calling....")
        
        let updateTax = price * 2 / 100;
        setTax(updateTax)
       
        

    },[price,tax])

    useEffect(()=>{
        console.log("Api calling....")
    },[])

    useLayoutEffect(()=>{
        console.log("I am a use Layout Effect")
    },[])


    return(
        <div className="base-container">
            <div className="heading">
                <p className="h1 text-center text-primary"> React Use Effect Hook </p>
            </div>
            <div className="body-content">
                <div className="content">
                    <div className="h5">
                        <p className = "ps-5">use Effect Initial Phase</p>
                         <p> Price : {price} - <span className="text-primary"> Tax : {tax}</span></p>
                         <button onClick = {()=> setPrice( price + 1 )}> update Price </button>
                    </div>
                </div>
            </div>
        </div>
    )
}