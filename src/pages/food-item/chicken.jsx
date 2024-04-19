import Navbar from '../../components/Navbar'
import Chicken from '../../data/fried-chicken.json'
import Showdata from './showdata';

const chicken = () => {
  return (
    <div className='food-base'>
      <Navbar/>
        <h1>Chicken</h1>
        <div className="food-material">
          {Chicken.map(data =>{
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

export default chicken