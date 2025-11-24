import { Fragment, useEffect, useState } from "react"


export default function ExampleFetchgetMethod(){

    const [records,setRecords] = useState(null)

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async () => {

        let endPointURL = "https://fakestoreapi.com/products"
        let option = {

            method:"GET",
            headers:{
                accept:"application/json",
                contentType:"application/json"
            }
        }
        let response =  await fetch(endPointURL,option)
        let responeData = await response.json()
        
        if(response && responeData ){
            setRecords(responeData)
        }
        
        
    }


    return(
        <div className="base-container">
            <div className="heading text-center text-primary">
                <p className="h1">React Fetch GET API</p>
            </div>
            <div className="products-information d-flex flex-row flex-wrap gap-5 m-5">
                {records && records.length != 0 &&
                    records.map((value,index) =>{
                        const {category,description,image,price,title,rating} = value
                        return <Fragment>
                            <div className="card"  style= {{width: "18rem"}}>
                                <div className="card-img">
                                    <img src={image} className="img-fluid rounded"/>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        {title}
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </Fragment>
                    })
                }
                
            </div>
        </div>
    )
}