import LandingPage from './components/landing/landing'
import Home from './components/home/home'
import { Link } from 'react-router-dom'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {

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
