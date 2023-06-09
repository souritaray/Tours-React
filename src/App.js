import Loading from "./Loading.js";
import { useState, useEffect } from "react";
import Tours from "./Tours";


function App(){
    const [state,setState]=useState([]);
    const [loading,setLoading]=useState(true);
    const url="https://course-api.com/react-tours-project";

   const reqFunc = async () => {
    setLoading(true)
    try {
        const res = await fetch(url);
        const state = await res.json();
        setLoading(false);
        setState(state);
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
   
  }

  const deleteFunc=(id)=>{
    let new_state=state.filter((p)=>
    p.id !== id);
    setState(new_state);   
}
    useEffect(()=>{
        reqFunc();
    },[])

    if(loading){
        return (
            <main>
                <Loading />
            </main>
        )
    }
return(
    <main>
        <Tours state={state} deleteFunc={deleteFunc} />
    </main>
    
)
}
export default App;