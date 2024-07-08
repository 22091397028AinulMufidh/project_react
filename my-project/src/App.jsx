import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import './App.css'
import Home from './Pages/Home.jsx'
import Header from './Components/Header.jsx'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
