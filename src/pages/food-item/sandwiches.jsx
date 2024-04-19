import Navbar from '../../components/Navbar'
import Sandwich from '../../data/sandwiches.json'
import Showdata from './showdata';

const Sandwiches = () => { 
  return (
    <div className='food-base'>
      <Navbar/>
        <h1>Sandwiches</h1>
        <div className="food-material">
          {Sandwich.map(data =>{
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

export default Sandwiches