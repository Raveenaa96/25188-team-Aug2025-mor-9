export default function Looping() {
  const fruits = ["apple", "orange", "grapes", "pineapple"];

  const vegetable = ["onion","Potatoo","bringal"]

  return (
    <div>


      <div className="fruit-heading">
        <h1> Fruit List </h1>
        <div className="fruits">
          { fruits && fruits.length != 0 &&
            fruits.map((value, index) => {
              return <p>{value} </p>;
            })}
        </div>
      </div>
      

      <div className="vegetable-heading">
        <h1>Vegatable List</h1>
        {
            vegetable && vegetable.length != 0 ?
                vegetable.map((value,index)=>{
                    return <p>{value}</p>
                })
            :
             <p> Currently No vegetable in store</p>
        }
      </div>





    </div>
  );
}
