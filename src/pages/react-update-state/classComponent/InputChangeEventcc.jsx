import { Component } from "react";

export default class InputChangeEventcc extends Component {
    constructor(){
        super()
        
        this.state = {
            simpleText: "Hello Saravanan"
        }
    }

    render(){
        return(
            <div className="base-container">
                
                <div className="user-input">
                    <input type="text" onChange = {(event)=>this.setState({simpleText : event.target.value})} />
                </div>

                <div className="simple-text">
                    <p> simple Text : {this.state.simpleText} </p>
                   
                </div>

               
            </div>
        )
    }
}