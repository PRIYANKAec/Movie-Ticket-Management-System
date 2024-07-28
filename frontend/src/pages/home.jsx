import React from 'react'
import Login from '@/Auth/login'

const Home = () => {
  return (
    <div>
    <header>
        <div style={{ float: 'right' }}>
          {/* <UserButton /> */}
          <Login />
        </div>
    </header>
   <div>
   </div>
    </div>
  )
}

export default Home