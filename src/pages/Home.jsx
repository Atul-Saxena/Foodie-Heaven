import Navbar from '../components/Navbar'
import Header from '../components/home/Header'
import Categories from '../components/home/CategoriesHome'
import Features from '../components/home/Features'
import Footer from '../components/Footer'
import './stylesheets/home.scss'

const Home = () => {
  return (
    <>
    <div className="home-background-image"></div>
    <div className="home_background">
      <Navbar/>
      <Header/>
      <Categories/>
      <Features/>
      <Footer/>
    </div>
    </>
  )
}

export default Home