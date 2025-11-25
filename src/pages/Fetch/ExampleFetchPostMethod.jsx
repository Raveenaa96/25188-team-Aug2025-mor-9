import { useState } from "react"

export default function ExampleFetchPostMethod(){

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
        
        let option = getOption(payload)

        fetch(endopointURL,option)
        .then( response => response.json())
        .then( responseData => setPostDataStatus("Saravanan Data Posted Success")  )
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
        
        let option = getOption(payload)

        let response = await fetch(endopointURL,option)
        let responseData = await response.json()
        if(response && responseData){
            setPostDataStatus("Pavithra Data posted success")
        }
        
    }


    const getOption = (payload) => {

         let option = {

            method : "POST",
            headers : {
                "accept" : "application/json",
                "content-type":"application/json"
            },
            body : JSON.stringify(payload)
        }

        return option
    }




    return(
        <div className="container">
            <div className="heading">
                <p className="h1 text-primary text-center">Fetch Post Method</p>
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