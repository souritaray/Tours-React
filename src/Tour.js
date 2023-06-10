import { useState } from "react";

function Tour({element, deleteFunc}){
    const [readMore, setReadMore]=useState(false);
    const {image, price, info, name, id}=element;
return(
    <>
    <div key={id} className="single-tour">
        <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price} </h4>
                </div>
                <p>{readMore ? info : `${info.substring(0, 200)}` }
                    <button onClick={()=> setReadMore(!readMore) }>
                        { readMore ? "Show Less" : "Show More" }  
                    </button></p>
                <button className="delete-btn" onClick={()=>{deleteFunc(id)}}>Not Interested</button>
            </footer>
    </div>
    </>
)
}
export default Tour;