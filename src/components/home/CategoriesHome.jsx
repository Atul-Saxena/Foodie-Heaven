import { Link } from "react-router-dom"
import './stylesheets/categories.scss'

const Categories = () => {
  return (
    <div className="categories-bg-div" id="categories">
        <Link to={'/bbqs'}><div className="category-food" id="bbq">
          <div className="filter2">
                <h3>BBQs</h3>
          </div>
        </div></Link>

        <Link to={'/bread'}><div className="category-food" id="Breads">
          <div className="filter2">
                <h3>Breads</h3>
          </div>
        </div></Link>

        <Link to={'/burgers'}><div className="category-food" id="Burgers">
          <div className="filter2">
                <h3>Burgers</h3>
          </div>
        </div></Link>

        <Link to={'/deserts'}><div className="category-food" id="Desserts">
          <div className="filter2">
                <h3>Desserts</h3>
          </div>
        </div></Link>

        <Link to={'/chicken'}><div className="category-food" id="Chicken">
          <div className="filter2">
                <h3>Chicken</h3>
          </div>
        </div></Link>

        <Link to={'/pizzas'}><div className="category-food" id="Pizzas">
          <div className="filter2">
                <h3>Pizzas</h3>
          </div>
        </div></Link>

        <Link to={'/sandwiches'}><div className="category-food" id="Sandwitches">
          <div className="filter2">
                <h3>Sandwitches</h3>
          </div>
        </div></Link>

        <Link to={'/sausages'}><div className="category-food" id="Sausages">
          <div className="filter2">
                <h3>Sausages</h3>
          </div>
        </div></Link>

        <Link to={'/drinks'}><div className="category-food" id="Drinks">
          <div className="filter2">
                <h3>Drinks</h3>
          </div>
        </div></Link>

        <Link to={'/ice-cream'}><div className="category-food" id="Ice-creams">
          <div className="filter2">
                <h3>Ice Creams</h3>
          </div>
        </div></Link>

    </div>
  )
}

export default Categories