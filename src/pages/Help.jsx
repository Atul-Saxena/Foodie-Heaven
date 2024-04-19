import React, { useState } from 'react'
import {useFirebase} from '../context/Firebase'
import Navbar from '../components/Navbar'
import './stylesheets/help.scss'

const Help = () => {
    const [Help,setHelp] = useState("");
    const firebase = useFirebase()
    let userNo = 1;

    const send = ()=>{
        firebase.putData(Help,"user"+`/${userNo}`);
        userNo++;
        setHelp("");
        alert("Thank you for contacting us. We will resolve your problem shortly...")
    }

  return (
    <>
    <div className="home-background-image"></div>
    <Navbar/>
    <div className="help-bg-div">
        <h1>How can we help you?</h1>
        <textarea
            value={Help}
            onChange={(e)=>setHelp(e.target.value)}
          placeholder="Your Response..."
        />
        <button onClick={send}>Send</button>
    </div>
    </>
  )
}

export default Help