import { useState } from "react";
// import React from "react";

function Events(){
    return(
        <div>
        <button onClick={()=>alert("Button clicked")}>Click</button>
        <TestEvent/>
        <FormEvent/>
        </div>
    )
}



function TestEvent() {

    const [text,setText]=useState("")

    return (
        <div>
            <input type="text" placeholder="Type Something" onChange={(e)=>setText(e.target.value)} />
            <h1>{text}</h1>
        </div>
    )
}


function FormEvent(){
    function submitForm(e){
        e.preventDefault();
        alert("Form Subitted");
    }

    const enter=()=>{
        alert("mouse entered")
    }

    const leave=()=>{
        alert("mouse left")
    }

    const myStyle={
        display:"inline",
        backgroundColor:"black",
        color:"white"
    }

    return(
        <form onSubmit={submitForm}>
            <input type="text"/>
            <button type="submit">Submit</button><br/>

            <div onMouseEnter={enter} onMouseLeave={leave} style={myStyle}>Place Mouse Over Me</div>
        </form>
    )
}

export default Events;


