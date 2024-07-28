import './App.css'
import Login from './Auth/login'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App