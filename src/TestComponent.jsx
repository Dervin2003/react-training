import { useState } from "react";
// function TestComponent(){
//     return(
//         <Alternate brand="Audi"/>
//     )
// }

// export default TestComponent;

// function Alternate(props){
//     return(
//         <p>The brand of car is {props.brand}</p>
//     )
// }

function TestComponent(){

    const[name,setName]=useState("Small")
    return(
        <>
            <h1>The city is {name}</h1>
            <button type="button" onClick={()=>setName("Big")}>Change</button>
        </>
    )
}

export default TestComponent;