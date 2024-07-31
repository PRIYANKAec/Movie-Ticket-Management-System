import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Auth/login'

import { Booking } from './pages/booking'
import { EditProfile } from './pages/editProfile'
import { History } from './pages/history'
import Home from './pages/home'
import { Movies } from './pages/movies'
import { ShowTimings } from './pages/showTimings'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/history' element={<History />} />
          <Route path='/editProfile' element={<EditProfile/>}/>
          <Route path='/showTimings' element={<ShowTimings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App