import axios from "axios"
import { useState } from "react"

export default function ExampleAxiosPost(){

    const [postDataStatus,setPostDataStatus] = useState(null)

    const handlePostData = () => {

        let endopointURL = "https://fakestoreapi.com/products"

        let payload = {

            "id": 255,
            "title": "Saravanan-Casual-shirt",
            "price": 1500,
            "description": "This is a outfit-mens t-shirt like brand polo",
            "category": "Mens - cloth ",
            "image": "http://example.com"
            
        }

        axios.post(endopointURL,payload)
        .then( response => setPostDataStatus("Saravanan Product posted Success "))
        .catch( error => console.error(error))
        
       

    }

    const handlePostDatawithAsync = async () => {

        let endopointURL = "https://fakestoreapi.com/products"

        let payload = {

            "id": 300,
            "title": "Pavithra - pattiyala",
            "price": 5000,
            "description": "This is a outfit-girls  like brand chennai silks",
            "category": "Girls - cloth ",
            "image": "http://example.com"
            
        }

        let response = await axios.post(endopointURL,payload)

        if(response && response.data)
            setPostDataStatus("Pavithra Product posted success")
        
      
        
    }





    return(
        <div className="container">
            <div className="heading">
                <p className="h1 text-primary text-center">Axios Post Method</p>
            </div>
            <div className="post-action">
                <button onClick = {handlePostData}> Promise post Data </button>
                <button onClick = {handlePostDatawithAsync}> Aysnc post Data </button>
            </div>

            <div className="succes-msg">
                <p className="h3 text-success text-center"> {postDataStatus} </p>
            </div>
        </div>
    )
}