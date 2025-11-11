export default function ProfileCard(){
    const name="Laxmi Roshini"
    const age=21
    const role="Aspiring Full Stack Developer"
    const institute="Credo Systemz"
    return(
        <div className="base-container">
            <div className="heading">
                <h1>Profile Information</h1>
            </div>
            <div className="details">
                <p>Name : {name}</p>
                <p>Age  : {age}</p>
                <p>Role : {role}</p>
            </div>
            <div className="summary">
                <h3>Summary</h3>
                <h5>Greetings I am {name} and my age is {age} and I am an {role} and I am currently pursuing my JAVA Full Stack course at {institute}</h5>
            </div>
        </div>
    )
}