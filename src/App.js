
import { useState, useEffect } from "react";
import Tours from "./Tours";


function App(){
    const [state,setState]=useState("");
    
   const reqFunc = () => {
    return fetch("https://course-api.com/react-tours-project").then(
        (res) => res.json()).then(
            (d) => setState(d))
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