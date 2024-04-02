import { Link } from "react-router-dom"
import { FaFacebook,FaTwitter ,FaInstagram } from "react-icons/fa";
import './stylesheets/footer.scss'

const Footer = () => {
  return (
    <div className="footer-bg-div">
        <h1>Food Web App</h1>

        <div className="footer-hyperlinks">
          <Link to={''}>About</Link>
          <Link to={''}>Contact</Link>
          <Link to={''}>Service</Link>
          <Link to={''}>Partners</Link>
        </div>

        <div className="footer-medialinks">
          <FaFacebook size={'1.5rem'}/>
          <FaTwitter size={'1.5rem'}/>
          <FaInstagram size={'1.5rem'}/>
        </div>

        <h3>Dig in before you starve, what looks yummy won't forever last...</h3>
    </div>
  )
}

export default Footer