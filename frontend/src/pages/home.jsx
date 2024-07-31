import React from 'react'
import Login from '@/Auth/login'
import { Navbar } from './navbar'

const Home = () => {
  return ( 

     <div>
      <div className='float-right justify-end p-3'>
        <Login />
      </div>
      <div className='float-left justify '>
        <Navbar />
      </div>
     </div>

  )
}

export default Home 