import { useState,useEffect } from "react"

function EffectHook() {
    const [isTrue,setIsTrue]=useState(false);
 

    useEffect(() => { 
        console.log("component rendered"); 
    } ,[isTrue]);
    return (
        <div> 
            <button onClick={()=>setIsTrue(!isTrue)}>Render</button>
        </div>
    );
}

export default EffectHook;