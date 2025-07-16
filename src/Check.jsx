import { useState } from "react";
import LogIn from './LogIn'
import LogOut from './LogOut'

function Check(){

    const[isLoggedIn,setIsLoggedIn]=useState(false)
    return(
        <div>
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Test</button>
            {isLoggedIn?<LogIn/>:<LogOut/> }
        </div>
  )
}

export default Check;