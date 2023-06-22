import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{height:'100%'}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
    <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo-p-1080.png" alt="" className="footer-image" style={{width:'200px',marginTop:'2px',marginBottom:'10px',height:'30px',marginLeft:'100px'}}/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav  ml-auto" style={{marginLeft:'40%'}}>
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" style={{fontSize:"20px"}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/product" style={{fontSize:"20px"}}>Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/solution" style={{fontSize:"20px"}}>Solution</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/pricing" style={{fontSize:"20px"}}>Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/resources" style={{fontSize:"20px"}}>Resources</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/support" style={{fontSize:"20px"}}>Support</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sign-in"><strong style={{border:'black', marginLeft:'30px', fontSize:'20px'}}>Sign-In</strong></NavLink>
        </li>
        
        
       
       
      </ul>
      
    </div>
  </div>
</nav> 
    </>
  )
}

export default Navbar
