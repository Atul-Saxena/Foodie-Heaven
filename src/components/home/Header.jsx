import './stylesheets/header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header-bg-div">
        <div className="header-content">
          <h1>Food: the language everyone understands...</h1>
          <Link to={''}>
            <button id='header-content-explore-button'>Explore more...</button>
          </Link>
        </div>
        <img src="/pictures/header-plate2.png" alt="" />
    </header>
  )
}

export default Header