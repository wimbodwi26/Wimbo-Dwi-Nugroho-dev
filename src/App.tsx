import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NavBar from './components/navbar'
import HomePage from './components/homePage'
import AboutDetail from './components/About/about-detail/aboutDetail';

function App() {

  return (
    <Router>
        <div>
          <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/detail' element={<AboutDetail />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
