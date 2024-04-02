import Breads from '../../data/breads.json'
import Navbar from '../../components/Navbar'
import Showdata from './showdata';

const Bread = () => {
  return (
    <div className='food-base'>
      <Navbar/>
        <h1>Breads</h1>
        <div className="food-material">
          {Breads.map(data =>{
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

export default Bread