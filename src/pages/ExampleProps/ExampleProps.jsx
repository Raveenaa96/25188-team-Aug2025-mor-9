import {useState} from "react"
import ListingElement from "./components/ListingElement";

export default function ExampleProps(){
    const [heading,setHeading] = useState("Fruits Store")
    const [fruits,setFruits] = useState(
        [
            "Apple",
            "Orange",
            "Grapes",
            "pineapple",
            "gova",
            "jack fruit"
        ]
    )

    return(
        <div className="base-container">
            <div className="heading">
                <p className="h3 text-center">Props Example</p>
            </div>
            <ul>
               <ListingElement 
                  fruits = {fruits}
               />
            </ul>
        </div>
    )
}