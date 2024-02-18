import Navbar from '../../components/Navbar'
import IceCream from '../../data/ice-cream.json'
import Showdata from './showdata';

const Icecream = () => {
  return (
    <div className='food-base'>
      <Navbar/>
        <h1>Ice Cream</h1>
        <div className="food-material">
          {IceCream.map(data =>{
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

export default Icecream