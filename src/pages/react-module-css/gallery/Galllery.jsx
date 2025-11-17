import galleryStyle from './gallery.module.css'

export default function Gallery(){
   

    
    return(
        <div className="base-container">
            <div className= {galleryStyle.galleryHeading}>
                <h1> Contact Page </h1>
            </div>
            <div className="body" >
                <p className={galleryStyle.bodyContent}>Photos will come feature </p>
            </div>
        </div>   

    )
}