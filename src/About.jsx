import {useRef} from 'react'

function About() {
    const firstRef=useRef(null)
    const lastRef=useRef(null)

    function formSubmit(e){
        e.preventDefault()
        alert("Form Submitted")

        const fname=firstRef.current.value;
        const lname=lastRef.current.value;

        console.log(fname,lname)
    }
  return (
    <form onSubmit={formSubmit}>
        <div>
            <label>First Name : </label>
            <input type="text" ref={firstRef}/>
        </div>
         <div>
            <label>Last Name : </label>
            <input type="text" ref={lastRef}/>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default About;