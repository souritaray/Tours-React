import Tour from "./Tour";
function Tours({state, deleteFunc}){
    
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
                    <Tour key={element.id} element={element} deleteFunc={deleteFunc}/>
                )
            })}
            </div>
           
        </section>
        </>
    )
}
export default Tours;