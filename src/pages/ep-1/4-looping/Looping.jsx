export default function Looping() {
    const fruits = ["apple","orange","kiwi","pineapple"];
    const vegetables = ["carrot","potato","onion","brinjal","beans"];

    return(
        <div>
            <div className="fruit-heading">
                <h1>Fruits List</h1>
                <div>
                    {fruits && fruits.length !=0 &&
                        fruits.map((value,index)=>{
                            return<p>{value}</p>
                        })
                    }
                </div>
            </div>
            <div>
                <h1>Vegetables List</h1>
                <div>
                    {vegetables && vegetables.length!=0 ? 
                        vegetables.map((value,index)=> {
                            return <p>{value}</p>
                        }) 
                        :
                        <p>No Vegetables available</p>
                    }
                </div>
            </div>
        </div>
    )
}