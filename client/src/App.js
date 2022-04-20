import LandingPage from './components/landing/landing'
import Home from './components/home/home'
import { Link } from 'react-router-dom'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  getTemperaments, getDogs } from './redux/actions'
import Details from './components/details/details'
import CreateDog from './components/createDog/createDog'
function App() {
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(getTemperaments())
  dispatch(getDogs())
}, [])

  return (

    <BrowserRouter>
      <div >
      
        <Routes>
          <Route exact path = '/' element = {<LandingPage />} />
          <Route exact path = '/home' element = {<Home/>} />
          <Route path  ='details/:id' element = {<Details/>} />
          <Route path ='/home/create' element = {<CreateDog/>} />
        </Routes>






      </div>




    </BrowserRouter>
  );
}

export default App;
