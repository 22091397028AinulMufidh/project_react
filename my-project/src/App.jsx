import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import './App.css'
import Home from './Pages/Home.jsx'
import Course from './Pages/Course.jsx'
import Content from './Pages/Content.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/content' element={<Content/>} />
      </Routes>
    </Router>
  )
}

export default App
