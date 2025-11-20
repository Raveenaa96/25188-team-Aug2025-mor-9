import { Component } from "react";


export default class LifeCycleLearning extends Component {
    //Inital Phase
    constructor(props){
        super(props)
        this.state = {
            price : 0,
            tax : 500,
          
        }

        console.log("1. I am constructor ")

       
    }

    //Updating Phase
    componentDidUpdate(prevProps, prevState){
        console.log("4. I am Component Did update")
        console.log("prevState =====>",prevState.count)
         console.log("state===>",this.state.count)

        

       
        if (prevState.price !== this.state.price && this.state.price === 2) {
           this.setState({ tax: 1000 });
        }
    }
    componentDidCatch(error, info) {
        console.log("I am component Didn catch")
        console.log("Error caught by ErrorBoundary:", error);
        console.log("Component stack:", info.componentStack);

       
    }



    

    //unMounting Phase






    //Mounting Phase
    componentDidMount(){
        console.log("3. I am Component Did mount")
    }


    

    render(){

        console.log("2 I am render method..")

        return(
            <div className="fulid-container">
                <div className="heading">
                    <p className="h2 text-primary text-center">React Life Cycle</p>
                </div>


                <div className="show-price">
                    <p className="h4">Price : <span className="text-secondary">{this.state.price}</span></p>
                    <button onClick = {()=> this.setState({price: this.state.price + 1 })}> Add </button>
                  
                </div>

                <div className="show-tax">
                    <p className="h2">tax: {this.state.tax}</p>
                </div>

               
                
            </div>
        )
    }
}