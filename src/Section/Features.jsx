import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Features = () => {
  return (
    <div id="features" className="section">
      <div className="container mobile d-flex flex-column align-items-center pt-5 mb-5">
        <h1 className="heading-22 py-4 text-center display-4" style={{ fontSize: '5.8rem', color: 'black',  }}>
         <strong> Best way to grow your local business</strong> 
        </h1>
        <div className="text-block-23 py-2 text-center fs-3">
          Artificial Intelligence powered easy-to-use tools to get more customers &amp; give them a better experience
        </div>
        <div className="form-block py-4">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            redirect="https://salescaptain.com/booking"
            data-redirect="https://salescaptain.com/booking"
            method="get"
            className="form hero"
            aria-label="Email Form"
            data-hs-cf-bound="true"
            
          >
            <div className="input-group w-200">
              <input
                type="email"
                className="text-field form-control"
                style={{ width: '500%', paddingTop:'0.75rem' }}
                maxLength="256"
                name="Email-4"
                data-name="Email 4"
                placeholder="ENTER YOUR EMAIL"
                id="Email-4"
                required=""
              />
              <div className="input-group-append"  >
                <input
                  type="submit"
                  value="GET DEMO"
                  data-wait=""
                  className="submit saas btn btn-primary"
                style={{marginLeft:'200px',marginTop:'10px'}}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <img
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e797d67fcfafb89723e3_home-hero-agnostic-l-2x%20(1).webp"
        loading="lazy"
        sizes="100vw 500vh"
        srcSet="
          https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e797d67fcfafb89723e3_home-hero-agnostic-l-2x%20(1)-p-500.webp 500w,
          https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e797d67fcfafb89723e3_home-hero-agnostic-l-2x%20(1)-p-800.webp 800w,
          https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e797d67fcfafb89723e3_home-hero-agnostic-l-2x%20(1)-p-1080.webp 1080w,
          https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e797d67fcfafb89723e3_home-hero-agnostic-l-2x%20(1)-p-1600.webp 1600w,
          https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e797d67fcfafb89723e3_home-hero-agnostic-l-2x%20(1).webp 1632w"
        alt=""
        className="image-57 responsive-mob-image h-100 img-fluid py-10"
        
      />

      <div className="container-7 ">
        <h2 className="heading text-center mt-5" style={{fontSize:'3.2rem'}} >Trusted by 100,000+ local businesses globally</h2>
        <div className="row justify-content-center mt-5 mb-5 " >
          <div className="col-2 ">
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp"
              loading="lazy"
              alt=""
              className="image-37"
            />
          </div>
          <div className="col-2">
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp"
              loading="lazy"
              alt=""
              className="image-38"
            />
          </div>
          <div className="col-2">
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="col-2">
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="col-2">
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp"
              loading="lazy"
              alt=""
              className="image-92"
            />
          </div>
          <div className="col-2">
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp"
              loading="lazy"
              alt=""
              className="image-91"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
