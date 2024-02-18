import './stylesheets/features.scss'

const Features = () => {
  return (
    <div className="features-bg-div">
        <div className="feature1">
            <img src="/features/feature1.png" alt="" />
            <h1>Pick up your Nutritious Meals<br/> with variety of protein<br/> stacked dishes...<br/> <p>Get a balaced meal suggestions from professional dieticians <br/>and have a good and healthy life...</p> </h1>
        </div>
        <div className="feature1">
            <h1>Pick up your Healthiest Meal<br/>with variety of salads...<br/><p>Achieve your ideol shape by having decent variety of salads <br/>and have a good and healthy life...</p></h1>
            <img src="/features/feature2.png" alt="" />
        </div>
        <div className="feature1">
            <img src="/features/feature3.png" alt="" />
            <h1>Pick up your Royal Meal<br/>with variety of Creamy<br/> gravy and cuisines...<br/><p>Not everythings about health and body, sometimes <br/>its about taste and mood...</p></h1>
        </div>
    </div>
  )
}

export default Features