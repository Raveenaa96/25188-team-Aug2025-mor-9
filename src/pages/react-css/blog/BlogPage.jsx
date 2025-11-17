export default function BlogPage(){
    /* Internal - css */

    const headingStyle =  {
                        color:"white",
                        backgroundColor:"green",
                        textAlign:"center"
                    }
    
    const bodyContentStyle = {backgroundColor:"pink",padding:"10px",color:"white" }
    
    return(
        <div className="base-container">
            <div className="about-heading">
                <h1 style = {headingStyle}> Blog Page </h1>
            </div>
            <div className="body" >
                <p style={bodyContentStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sit nulla accusamus culpa, ad ea sequi modi voluptates porro quis accusantium at deserunt molestiae, asperiores ducimus quibusdam! Aperiam, magnam nihil.</p>
            </div>
        </div>
    )
}