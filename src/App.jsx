import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Help from './pages/Help';
import Myorders from './pages/Myorders';
import Sandwitch from './pages/food-item/sandwiches'
import BBQ from './pages/food-item/bbq'
import Chicken from './pages/food-item/chicken'
import Sausages from './pages/food-item/sausages'
import Pizzas from './pages/food-item/pizza'
import Burger from './pages/food-item/burger'
import IceCream from './pages/food-item/icecream'
import Bread from './pages/food-item/Bread'
import Desert from './pages/food-item/Deserts'
import Drinks from './pages/food-item/Drinks'
import ScrollToTop from './components/ScrollToTop';
import { FirebaseApp } from './context/Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import './App.css'

function App() {
  const FirebaseAuth = getAuth(FirebaseApp);
  const [userinfo,setuser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(FirebaseAuth, (user)=>{
      if (user) {
        console.log("signed in");
        setuser(user);
      } else {
        setuser(null);
        console.log("not signed");
      }
    })

  },[]);

  if(userinfo === null){
    return(
      <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signin' element={<SignUp/>}/>
        </Routes>
      </Router>
      </>
    )
  }
  else{
    return(
      <>
      <Router>
      <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/myorders' element={<Myorders/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/sandwiches' element={<Sandwitch/>}/> 
            <Route path='/bbqs' element={<BBQ/>}/>
            <Route path='/bread' element={<Bread/>}/>
            <Route path='/drinks' element={<Drinks/>}/>
            <Route path='/deserts' element={<Desert/>}/>
            <Route path='/chicken' element={<Chicken/>}/>
            <Route path='/sausages' element={<Sausages/>}/>
            <Route path='/pizzas' element={<Pizzas/>}/>
            <Route path='/burgers' element={<Burger/>}/>
            <Route path='/ice-cream' element={<IceCream/>}/>
          </Routes>
    </Router>
      </>
    )
  }
}

export default App
