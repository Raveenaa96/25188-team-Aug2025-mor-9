import { Component } from "react";

export default class Countercc extends Component {
    constructor(){
        super()
        this.state = {
          
            count : 0,
           
        }
    }

    render(){
        return(
            <div className="base-container">
                <div className="heading">
                    <h1> Simple Counter Program Class Component </h1>
                </div>
                <div className="show-count">
                    <h3> Count : <span> {this.state.count} </span> </h3>
                </div>
                <div className="buttons">

                    <button onClick = {()=>this.setState( { count: this.state.count + 1  } )} >ADD</button>
                    <button 
                        onClick = {()=> this.setState( {count : this.state.count - 1 } )} 
                        disabled = { this.state.count == 0 }
                    >SUB</button>

                </div>


                
            </div>
        )
    }
}