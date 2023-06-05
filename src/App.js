
import { useState, useEffect } from "react";
import Tours from "./Tours";


function App(){
    const [state,setState]=useState("");
    const url="https://course-api.com/react-tours-project";
   const reqFunc = async () => {
   const res = await fetch(url);
   const state = await res.json();
   setState(state);
  }
    useEffect(()=>{
        reqFunc();
    },[])

return(
    <main>
        <Tours state={state} />
    </main>
    
)
}
export default App;