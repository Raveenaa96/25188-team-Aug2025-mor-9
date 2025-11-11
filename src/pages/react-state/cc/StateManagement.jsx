import { Component } from "react";


export default class StateManagment extends Component{


    constructor(){
        super()
        this.state = {
            heading : "Simple state Mangement",
            author : "Saravanan Durai",
            novels : [
                "Ponniyen selvan",
                "panjali sabatham",
                "Silapathigaram",
                "Sivagasinthamani"
            ]
        }
    }

    render(){
        
        return (
            <div className="base-container">
                <div className="heading">
                    <h1> { this?.state?.heading } </h1>
                </div>

                <div className="author-name">
                    <p>Page created By : {this?.state?.author} </p>
                </div>

                <div className="author-books">
                     <h4>Author Books </h4>
                     <ol type = "1">
                        {
                            this?.state?.novels && this?.state?.novels?.length != 0 ?
                              this?.state?.novels?.map((value,index)=>{
                                 return <li key={index}> {value} </li>
                              })
                            :
                            <li> No Books Found</li>
                        }

                     </ol>
                </div>
            </div>
        )
    }








}