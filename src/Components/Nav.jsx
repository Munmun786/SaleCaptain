import React from 'react'
import Product from './Product'
import Pricing from './Pricing'
import Solution from './Solution'
import Resources from './Resources'
import Support from './Support'
import Home from './Home'
import SignIn from './SignIn'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'


const Nav = () => {
  return (
    <>
<Navbar />

<Routes>
<Route path='/' element={<Home/>} />
<Route path='/product' element={<Product/>} />
<Route path='/solution' element={<Solution/>} />
<Route path='/pricing' element={<Pricing/>} />
<Route path='/resources' element={<Resources/>} />
<Route path='/support' element={<Support/>} />
<Route path='/sign-in' element={<SignIn/>} />

    
</Routes>

    </>
  )
}

export default Nav
