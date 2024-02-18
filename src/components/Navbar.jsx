import { TbMenuDeep } from "react-icons/tb";
import { Link } from 'react-router-dom'
import './stylesheets/navbar.scss'

const Navbar = () => {
  return (
    <div className="nav-background-div">
      <div className="nav-logo">
        <div className="nav-logo-inner-components">
          <img src="/pictures/icon23.png" alt="Logo" />
          <h2>Food Web<br/>App...</h2>
        </div>
      </div>
      <div className="nav-hyperlinnks">
        <Link to={'/home'}>Home</Link>
        <Link to={'/category'}>Categories</Link>
        <Link to={'/cart'}>Cart</Link>
        <Link to={'/home'}>My Orders</Link>
        <Link to={'/home'}>Help</Link>
      </div>
      <div className="drop-down-menue">
      <TbMenuDeep size="1.5rem"/>
      </div>
    </div>
  )
}

export default Navbar