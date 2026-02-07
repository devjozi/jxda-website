/**
 * Homepage Component
 * 
 * Converted from Logicraft template index.html
 * Sections included:
 * - Hero carousel (3 slides)
 * - Features light section (3 service boxes)
 */

import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Carousel Section */}
      <div className="carousel slide" id="main-slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators visible-lg visible-md">
          <li className="active" data-target="#main-slide" data-slide-to="0"></li>
          <li data-target="#main-slide" data-slide-to="1"></li>
          <li data-target="#main-slide" data-slide-to="2"></li>
        </ol>
        {/* Indicators end */}
        
        {/* Carousel inner */}
        <div className="carousel-inner">
          {/* Carousel item 1 */}
          <div className="carousel-item active" style={{backgroundImage: 'url(images/slider/bg1.jpg)'}}>
            <div className="container">
              <div className="slider-content text-left">
                <div className="col-md-12">
                  <h2 className="slide-title title-light">You have needs</h2>
                  <h3 className="slide-sub-title">We Have the Solutions</h3>
                  <p className="slider-description lead">
                    We will deal with your failure that determines <br /> how you achieve success.
                  </p>
                  <p>
                    <a className="slider btn btn-primary" href="#">Know More</a>
                    <a className="slider btn btn-border" href="#">View Services</a>
                  </p>
                </div>
                {/* Col end */}
              </div>
              {/* Slider content end */}
            </div>
            {/* Container end */}
          </div>
          {/* Carousel item 1 end */}
          
          {/* Carousel item 2 */}
          <div className="carousel-item" style={{backgroundImage: 'url(images/slider/bg2.jpg)'}}>
            <div className="container">
              <div className="slider-content text-center">
                <div className="col-md-12">
                  <h2 className="slide-title title-light">We deal with logistics</h2>
                  <h3 className="slide-sub-title">You focus on your Business</h3>
                  <p className="slider-description lead">We will deal with your failure that determines</p>
                  <p>
                    <a className="slider btn btn-primary" href="#">Our Services</a>
                  </p>
                </div>
                {/* Col end */}
              </div>
              {/* Slider content end */}
            </div>
            {/* Container end */}
          </div>
          {/* Carousel item 2 end */}
          
          {/* Carousel item 3 */}
          <div className="carousel-item" style={{backgroundImage: 'url(images/slider/bg3.jpg)'}}>
            <div className="container">
              <div className="slider-content text-right">
                <div className="col-md-12">
                  <h2 className="slide-title title-light">17 years of experience</h2>
                  <h3 className="slide-sub-title">Strong Distribution Network</h3>
                  <p>
                    <a className="slider btn btn-primary" href="#">View Services</a>
                  </p>
                </div>
                {/* Col end */}
              </div>
              {/* Slider content end */}
            </div>
            {/* Container end */}
          </div>
          {/* Carousel item 3 end */}
        </div>
        {/* Carousel inner end */}
        
        {/* Controllers */}
        <a className="left carousel-control carousel-control-prev" href="#main-slide" data-slide="prev">
          <span><i className="fa fa-angle-left"></i></span>
        </a>
        <a className="right carousel-control carousel-control-next" href="#main-slide" data-slide="next">
          <span><i className="fa fa-angle-right"></i></span>
        </a>
      </div>
      {/* Carousel end */}

      {/* Features Light Section */}
      <section id="ts-features-light" className="ts-features-light">
        <div className="container">
          <div className="row feature-light-row">
            <div className="col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <div className="feature-img">
                    <img src="images/icon/service-1.png" alt="" />
                  </div>
                  <h3 className="ts-feature-title">Reliable Services</h3>
                  <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                  <a className="slider btn btn-primary" href="#">Read More</a>
                </div>
              </div>
              {/* feature box-1 end */}
            </div>
            {/* col-1 end */}
            
            <div className="col-md-4 text-center border-left">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <div className="feature-img">
                    <img src="images/icon/service-2.png" alt="" />
                  </div>
                  <h3 className="ts-feature-title">Global Coverage</h3>
                  <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                  <a className="slider btn btn-primary" href="#">Read More</a>
                </div>
              </div>
              {/* feature box-2 end */}
            </div>
            {/* col-2 end */}
            
            <div className="col-md-4 text-center border-left">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <div className="feature-img">
                    <img src="images/icon/service-3.png" alt="" />
                  </div>
                  <h3 className="ts-feature-title">Cost Savings</h3>
                  <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                  <a className="slider btn btn-primary" href="#">Read More</a>
                </div>
              </div>
              {/* feature box-3 end */}
            </div>
            {/* col-3 end */}
          </div>
        </div>
      </section>
      {/* ts-feature light end */}

      <Footer />
    </>
  );
}
