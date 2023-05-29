import Tour from "./Tour";
function Tours({state}){
    return(
        <>
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
            {state.map((element)=>{
                return(
                    <Tour key={element.id} element={element}/>
                )
            })}
            </div>
           
        </section>
        </>
    )
}
export default Tours;