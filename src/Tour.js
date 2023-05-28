function Tour({element}){
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
                <p>{info}<button>Read More</button></p>
                <button className="delete-btn">Not Interested</button>
            </footer>
    </div>
    </>
)
}
export default Tour;