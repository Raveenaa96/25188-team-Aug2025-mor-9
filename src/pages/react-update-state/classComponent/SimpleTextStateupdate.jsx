import { Component } from "react";

export default class SimpleTextStateupdate extends Component {
    constructor(){
        super()
        this.state = {
           
            simpleText: "Hello Saravanan"
        }
    }

    render(){
        return(
            <div className="base-container">
                


                <div className="simple-text">
                    <p> simple Text : {this.state.simpleText} </p>
                    <button onClick = {()=>this.setState( { simpleText: "Hello Sripal !!!" } )}>Change Text </button>
                </div>

               
            </div>
        )
    }
}