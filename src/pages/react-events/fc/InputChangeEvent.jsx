export default function InputChangeEvent()
{
    const agechange=(event)=>
    {
        console.log("Age entered: ",event.target.value);
    }

    const chooseHobby=(event)=>
    {
        alert("Your selected hobby: "+event.target.value);
    }
    return(
        <div className="base-container">
            <div className="heading">
                <h1>Age & Hobby Select Event</h1>
            </div>
            <div className="change-input">
                <input type="number" placeholder="Enter your age" onChange={agechange}/>
            </div>
            <div className="select-box">
                <p>Select your Hobby</p>
                <select onChange={chooseHobby}>
                    <option value="Reading">Reading</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Traveling">Traveling</option>
                </select>
            </div>
        </div>
    )
}