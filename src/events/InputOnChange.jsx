export default function InputOnChange() {
    const nameChange = (event) => {
        console.log("Student Name Entered: ", event.target.value);
    };
    const departmentSelect = (event) => {
        alert("Selected Department: " + event.target.value);
    };
    return (
        <div className="base-container">
            <div className="heading">
                <h1> Student Input & Select Event </h1>
            </div>

            <div className="input-section">
                <label>Enter Student Name: </label>
                <input
                    type="text"
                    placeholder="Type your name..."
                    onChange={nameChange}
                />
            </div>

            <div className="select-section">
                <p>Select Your Department:</p>
                <select onChange={departmentSelect}>
                    <option>Choose Department</option>
                    <option value="CSE">Computer Science (CSE)</option>
                    <option value="ECE">Electronics (ECE)</option>
                    <option value="EEE">Electrical (EEE)</option>
                    <option value="MECH">Mechanical (MECH)</option>
                </select>
            </div>
        </div>
    );
}
