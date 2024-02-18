import Sausages from '../../data/sausages.json';
import Navbar from '../../components/Navbar'
import Showdata from './showdata';

const sausages = () => {
  return (
    <div className='food-base'>
      <Navbar/>
        <h1>Sausages</h1>
        <div className="food-material">
          {Sausages.map(data =>{
              return(
                  <div className="data">
                    <div className="data-bg-image"></div>
                    <div className="data-bg-image"></div>
                      <Showdata img={data.img} price={data.price} dsc={data.dsc} name={data.name} country={data.country} rate={data.rate}/>
                  </div>
              )
          })}
        </div>
    </div>
  )
}

export default sausages