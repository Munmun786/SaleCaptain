import React from 'react';

const SignIn = () => {
  return (
    <div className="container" style={{ marginTop: '13%', marginBottom: '8%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
    <a href="/" className="footer-logo-link text-decoration-none">
    <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo-p-1080.png" alt="" className="footer-image" style={{width:'200px',marginTop:'10px',marginBottom:'10px',height:'30px',marginLeft:'41%'}}/>
              <img src="" alt="" className="footer-image" style={{width:'60%',marginTop:'2px',marginBottom:'10px'}}/>
            </a>
      <h1 className="sign" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>Sign In Page</h1>
      <form style={{ width: '50%', marginLeft: "25%" }}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder='ENTER YOUR EMAIL' />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder='ENTER YOUR PASSWORD' />
        </div>
        <button type="submit" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '45%', marginTop: '10px',marginBottom:'10px' }}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
