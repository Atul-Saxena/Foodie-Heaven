import BBQ from '../../data/bbqs.json'
import Navbar from '../../components/Navbar'
import Showdata from './showdata';
import './data-page.scss'

const Bbq = () => { 
  return (
    <div className='food-base'>
        <Navbar/>
        <h1>Barbeques</h1>
        <div className="food-material">
          {BBQ.map(data =>{
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

export default Bbq