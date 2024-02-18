import Navbar from '../../components/Navbar'
import Pizza from '../../data/pizzas.json'
import Showdata from './showdata';

const pizza = () => {
  return (
    <div className='food-base'>
      <Navbar/>
        <h1>Pizzas</h1>
        <div className="food-material">
          {Pizza.map(data =>{
              return(
                  <div className="data">
                    <div className="data-bg-image"></div>
                      <Showdata img={data.img} price={data.price} dsc={data.dsc} name={data.name} country={data.country} rate={data.rate}/>
                  </div>
              )
          })}
        </div>
    </div>
  )
}

export default pizza