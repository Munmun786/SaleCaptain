import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer id="footer" className="footer wf-section mb-3" >
      <div className="container-11 w-container">
        <div className="row">
          <div className="col-md-3">
            <a href="/" className="footer-logo-link text-decoration-none">
              <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d85afd15788d0263af7b58_full_logo_white.webp" alt="" className="footer-image" style={{width:'60%',marginTop:'2px',marginBottom:'10px'}}/>
            </a>
            <h2 className="footer-heading mt-2 text" style={{marginLeft:'10px'}}>Products</h2>
            
              <a href="/" className="footer-link"style={{marginLeft:'10px'}}>Listings<br/></a>
              <a href="/" className="footer-link"style={{marginLeft:'10px'}}>Marketing<br/></a>
            
            <a href="/" className="footer-link"style={{marginLeft:'10px'}}>WebBoost<br/></a>
            <a href="/" className="footer-link"style={{marginLeft:'10px'}}>Referrals</a>
            <a href="/" className="footer-link"style={{marginLeft:'10px'}}>Payments<br/><br /><span className="text-span-4"></span></a>
          </div>
          <div className="col-md-3">
            <h2 className="footer-heading invisible text ">Products</h2>
            <a href="/" className="footer-link">WebChats<br></br></a>
            <a href="/" className="footer-link">Messaging<br/></a>
            <a href="/" className="footer-link">Captain AI<br/></a>
            <a href="/" className="footer-link">Feedback &amp; Survey<br /></a>
            <a href="/" className="footer-link">Competitions &amp;<br />Insights</a>
            <a href="/" className="footer-link">Customer Manager<br/></a>
          </div>
          <div className="col-md-3 mt-4">
            <h2 className="footer-heading text"><strong>Industry</strong></h2>
            
              <a href="/" className="footer-link">Healthcare<br/></a>
              <a href="/" className="footer-link">Dental<br/></a>
            
            <a href="/" className="footer-link p-1">Home Services<br/></a>
            <a href="/" className="footer-link">Retail<br/></a>
            <a href="/" className="footer-link">Hospitality <br /></a>
            <a href="/" className="footer-link">Automotive<br/></a>
            <a href="/" className="footer-link">Restaurants<br/></a>
            <a href="/" className="footer-link">Wellness<br/></a>
            <a href="/" className="footer-link">Professional<br />Services</a>
          </div>
          <div className="col-md-3 mt-4">
            <h2 className="footer-heading text">Partner</h2>
            
              <a href="mailto:partner@salescaptain.com" className="footer-link">Become a Partner</a>
            
            <h2 className="footer-heading mt-5 text"><strong>Company</strong></h2>
            
              <a href="mailto:support@salescaptain.com" className="footer-link">Contact</a>
            
            <a href="mailto:hr@salescaptain.com" className="footer-link">Careers<br/></a>
            <a href="mailto:pr@salescaptain.com" className="footer-link">Press<br/></a>
            <a href="mailto:partner@salescaptain.com" className="footer-link">Partners<br/></a>
            <a href="mailto:legal@salescaptain.com" className="footer-link">Legal<br/></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <h2 className="footer-heading text"><strong>US Headquarters</strong></h2>
            <ul  className="w-list-unstyled">
              <li><a href="/" className="footer-link">447 Broadway, <br />2nd Floor, <br />New York 10013</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="footer-heading text"><strong>India office</strong></h2>
            <a href="/" className="footer-link">1467 Janani HSR <br />Layout Bengaluru <br />Karnataka 560102</a>
          </div>
          <div className="col-md-3">
            <h2 className="footer-heading text"><strong>London office</strong></h2>
            <a href="/" className="footer-link">79 - 81 Borough Rd<br />London England <br />400706</a>
          </div>
          <div className="col-md-3 ">
            <div className="div-block-12 ">
              <a href="https://www.facebook.com/SalesCaptainHQ/"  className="w-inline-block " >
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585d1036bf0791c31e8b_Group%2017124.svg" loading="lazy" alt="" className="socialmedialinks img" />
              </a>
              <a href="https://twitter.com/SalesCaptainInc" className="link-block-4 w-inline-block">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585ec5d9c15c1e77be28_Group%2017127.svg" loading="lazy" alt="" className="socialmedialinks insta img" />
              </a>
              <a href="https://www.instagram.com/salescaptainhq/"  className="w-inline-block">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585d612c975d00d3f286_Group%2017130.svg" loading="lazy" alt="" className="socialmedialinks img" />
              </a>
              <a href="https://www.linkedin.com/company/salescaptainhq"  className="w-inline-block">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585e3249a91eabae0c8e_Group%2017132.svg" loading="lazy" alt="" className="socialmedialinks img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


