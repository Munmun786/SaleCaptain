import React from 'react'; 
import './hed.css';

const ExpertInsights = () => {
  return (
    <div className="section-11 wf-section mb-5 mt-5">
      <div className="container-24 w-container">
        <h2 className="heading-17 text-center">Expert Insights and Resources</h2>
        <p className="paragraph-17 text-center">
          Get the latest business intelligence relevant to your industry, designed to help you grow.
        </p>
        <div className="row">
        <div className="col-md-4">
    <a href="/blog-post-1" className="link-block-3 resources text-decoration-none">
      <img
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp"
        loading="lazy"
        alt=""
        className="image-30"
        style={{ width: '100%',borderRadius:'16px' }}
      />
      <div className="text-block-7 mt-3 mb-1" style={{color:'black', fontSize:'1.2rem' }}><strong>Google My Business Basics: How <br/> to get more customers from GMB.</strong></div>
      <p className="paragraph-18" style={{color:'black', }}>
        Customers want to find local proprietors on search engines and nearly 90 percent of that traffic goes to Google.
      </p>
    </a>
  </div>
          <div className="col-md-4">
            <a href="/blog-post-5-copy" className="link-block-3 resources text-decoration-none">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp"
                loading="lazy"
                alt=""
                className="image-30"
                style={{ width: '100%',borderRadius:'16px' }}
              />
              <div className="text-block-7 mt-3 mb-1 " style={{color:'black', fontSize:'1.2rem' }}><strong style={{textDecorationLine:'none'}}>How to use Google's Business <br></br> Messaging tool to get new customers</strong></div>
              <p className="paragraph-18" style={{color:'black', }}>
                Today’s leading businesses aren’t just being found - they’re engaging the moment they’re discovered.
              </p>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/blog-post-5-copy-5" className="link-block-3 resources text-decoration-none">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp"
                loading="lazy"
                
                alt=""
                className="image-30 slot3"
                style={{ width: '100%',borderRadius:'16px' }}
              />
              <div className="text-block-7 mt-3 mb-1 under-line " style={{color:'black', fontSize:'1.2rem' , }}><strong  style={{textDecorationLine:'none'}}>6 Ways to Increase Your Website , <br/> Traffic and Leads </strong></div>
            <p className="paragraph-18" style={{color:'black', }}>
                More than 61% of marketers have reported that attracting traffic to their website is their biggest challenge.
              </p>
            </a>
          </div>
        </div>
        <a href="/resources" className="link-9" style={{display:"flex", textAlign:'center', justifyContent:'center', textDecorationLine:'none'}}>View All Resources</a>
      </div>
    </div>
  );
};

export default ExpertInsights;
