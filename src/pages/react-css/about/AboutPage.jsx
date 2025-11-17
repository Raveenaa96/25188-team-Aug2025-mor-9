export default function AboutPage(){
    /* Inline - css */

    
    return(
        <div className="base-container">
            <div className="about-heading">
                <h1 style = {
                    {
                        color:"white",
                        backgroundColor:"brown",
                        textAlign:"center"
                    }
                }> About Page </h1>
            </div>
            <div className="body" style={{backgroundColor:"orange",padding:"10px",color:"white" }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sit nulla accusamus culpa, ad ea sequi modi voluptates porro quis accusantium at deserunt molestiae, asperiores ducimus quibusdam! Aperiam, magnam nihil.</p>
            </div>
        </div>
    )
}