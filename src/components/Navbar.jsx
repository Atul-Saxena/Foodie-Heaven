import { TbMenuDeep } from "react-icons/tb";
import { signOut,getAuth } from 'firebase/auth'
import { FirebaseApp } from "../context/Firebase"; 
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './stylesheets/navbar.scss'

const Navbarcomponent = () => {
  const app = getAuth(FirebaseApp)
  const [isOpen, setIsOpen] = useState(false);

  const signout = ()=>{
    signOut(app);
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="nav-background-div">
      <div className="nav-logo">
        <div className="nav-logo-inner-components">
          <img src="/pictures/icon23.png" alt="Logo" />
          <h2>Food Web<br/>App...</h2>
        </div>
      </div>
      <div className="nav-hyperlinnks">
        <Link to={'/'}>Home</Link>
        <Link to={'/category'}>Categories</Link>
        <Link to={'/cart'}>Cart</Link>
        <Link to={'/myorders'}>My Orders</Link>
        <Link to={'/help'}>Help</Link>
      </div>
      <div className="drop-down-menue">
      
      <div className={isOpen?"dropdown-menu-items-open":"dropdown-menu-items-close"}>
        <Link to={''}>About</Link>
        <Link to={''}>Notification</Link>
        <Link to={''}>History</Link>
        <button onClick={signout}> <Link to={'/'}>Log out</Link> </button>
      </div>
      <button id="drop-menue-button" onClick={handleToggle}><TbMenuDeep size="1.5rem"/></button>
      
      </div>
    </div>
    </>

    
  )
}

export default Navbarcomponent