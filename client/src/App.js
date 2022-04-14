import LandingPage from './components/landing/landing'
import Home from './components/home/home'
import { Link } from 'react-router-dom'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  getTemperaments } from './redux/actions'

function App() {
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(getTemperaments())
}, [])

  return (

    <BrowserRouter>
      <div >
      
        <Routes>
          <Route exact path = '/' element = {<LandingPage />} />
          <Route exact path = '/home' element = {<Home/>} />

        </Routes>






      </div>




    </BrowserRouter>
  );
}

export default App;
