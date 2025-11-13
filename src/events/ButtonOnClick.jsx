export default function ButtonOnClick() {

    const greetStudent = (studentName) => {
        alert("Hello " + studentName + "! Welcome to the College Portal 🎓");
    };

    const showInfo = () => {
        alert("This portal helps students check their marks and attendance.");
    };

    return (
        <div className="base-container">
            <div className="heading">
                <h1> Student Greeting Event </h1>
            </div>

            <div className="button">
                <button onClick={showInfo}> About Portal </button>
                <button onClick={() => greetStudent("Roshini")}> Greet Student </button>
            </div>
        </div>
    );
}
