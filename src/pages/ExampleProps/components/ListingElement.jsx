import {useState} from 'react'
export default function ListingElement( 
    {
        fruits
    }
){

   

    return(
        <div className="base-container">
           {fruits && fruits.length !=0 &&  fruits.map((value) => <li> {value.toUpperCase()} </li>) }
        </div>
    )
}