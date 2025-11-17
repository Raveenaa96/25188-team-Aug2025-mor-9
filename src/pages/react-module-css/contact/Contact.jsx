import contactStyle from './contact.module.css'

export default function Contact(){
    /* Inline - css */

    
    return(
        <div className="base-container">
            <div className= {contactStyle.contactHeading}>
                <h1> Contact Page </h1>
            </div>
            <div className="body" >
                <p className={contactStyle.bodyContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sit nulla accusamus culpa, ad ea sequi modi voluptates porro quis accusantium at deserunt molestiae, asperiores ducimus quibusdam! Aperiam, magnam nihil.</p>
            </div>
        </div>
    )
}