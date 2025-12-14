export default function DataBinding() {
    const heading = "Data Binding"
    const num1 = 200
    const num2 = 100

    return(
        <div>
            <div>
                <h1>{heading}</h1>
            </div>
            <div>
                Total : {num1 + num2}
            </div>
        </div> 

    )
}