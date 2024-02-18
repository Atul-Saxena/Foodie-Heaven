import Desert from '../../data/desserts.json'
import Navbar from '../../components/Navbar'
import Showdata from './showdata';

const Deserts = () => {
  return (
    <div className='food-base'>
      <Navbar/>
        <h1>Deserts</h1>
        <div className="food-material">
          {Desert.map(data =>{
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

export default Deserts