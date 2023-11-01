
// import './App.css';

import './css/stylee.css';

// import loading from './images/loading.gif';
import logo from './images/logo.png';
import menubtn from './images/menu_btn.png';
import service1 from './images/service1.png';
import rightside from './images/right_side.png';

//<img src="images/loading.gif" alt="" />

function App() {
  return (
    <div className="App">
      <>
        {/* basic */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* mobile metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        {/* site metas */}
        <title>microo</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        {/* bootstrap css */}
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        {/* style css */}
        <link rel="stylesheet" href="css/style.css" />
        {/* responsive*/}
        <link rel="stylesheet" href="css/responsive.css" />
        {/* awesome fontfamily */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/*[if lt IE 9]>

<![endif]*/}
        {/* body */}
        {/* loader  */}
        {/* <div className="loader_bg">
           <div className="loader">
            
            <img src={loading} alt="loading" />
        </div>
      </div>  */}
        {/* end loader */}
        <div id="mySidepanel" className="sidepanel">
          <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
            ×
          </a>
          <a className="active" href="index.html">
            Home
          </a>
          <a href="about.html">About</a>
          <a href="searvices.html">Searvices</a>
          <a href="shop.html">Shop</a>
          <a href="contact.html">Contact</a>
        </div>
        {/* header */}
        <header>
          {/* header inner */}
          <div className="head-top">
            <div className="container-fluid">
              <div className="row d_flex">
                <div className="col-sm-3">
                  <div className="logo">
                    <a href="index.html">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-sm-9">
                  <ul className="email text_align_right">
                    <li className="d_none">
                      {" "}
                      <a href="javascript:void(0)">
                        <i className="fa fa-user" aria-hidden="true" />
                        Login
                      </a>
                    </li>
                    <li>
                      {" "}
                      <button className="openbtn" onclick="openNav()">
                        <img src={menubtn} />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end header */}
        {/* start slider section */}
        <div id="top_section" className=" banner_main">
          <div className="container">
            <div className="row d_flex">
              <div className="col-md-6">
                <div className="airmic">
                  <h1>The Air Mic </h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you
                  </p>
                  <a className="read_more" href="Javascript:void(0)">
                    Book Now{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mic_img">
                  <figure>
                    <img src={rightside} alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end slider section */}
        {/* services */}
        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage text_align_center">
                  <h2>Our Services</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="service_img text_align_center">
                  <i>
                    <img src={service1} alt="#" />
                  </i>
                </div>
                <div className="service_text text_align_center">
                  <h3>Mic line</h3>
                  <p>
                    There are many variations of passages mmajority have suffered
                    alteration in some form, by injected humour, or
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service_img text_align_center">
                  <i>
                    <img src="images/service2.png" alt="#" />
                  </i>
                </div>
                <div className="service_text text_align_center">
                  <h3>Mic Stand</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service_img text_align_center">
                  <i>
                    <img src="images/service3.png" alt="#" />
                  </i>
                </div>
                <div className="service_text text_align_center">
                  <h3>Head mic</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end services */}
        {/* about */}
        <div id="about" className="about">
          <div className="container-fluid">
            <div className="row d_flex">
              <div className="col-md-6">
                <div className="titlepage text_align_left">
                  <h2>About Us</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of
                    the more obscureContrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure
                  </p>
                  <a className="read_more" href="about.html">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about_img">
                  <figure>
                    <img
                      className="img_responsive"
                      src="images/about_img.jpg"
                      alt="#"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end about */}
        {/* our_mics */}
        <div className="our_mics">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="titlepage text_align_center">
                  <h2>Our Mics</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 margin_bottom40">
                <div id="ho_show" className="mics">
                  <figure>
                    <img
                      className="img_responsive"
                      src="images/mics_img1.jpg"
                      alt="#"
                    />
                  </figure>
                  <div className="mics_icon">
                    <a href="javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 margin_bottom40">
                <div id="ho_show" className="mics">
                  <figure>
                    <img
                      className="img_responsive"
                      src="images/mics_img2.jpg"
                      alt="#"
                    />
                  </figure>
                  <div className="mics_icon">
                    <a href="javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 margin_bottom40">
                <div id="ho_show" className="mics">
                  <figure>
                    <img
                      className="img_responsive"
                      src="images/mics_img3.jpg"
                      alt="#"
                    />
                  </figure>
                  <div className="mics_icon">
                    <a href="javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 margin_bottom40">
                <div id="ho_show" className="mics">
                  <figure>
                    <img
                      className="img_responsive"
                      src="images/mics_img4.jpg"
                      alt="#"
                    />
                  </figure>
                  <div className="mics_icon">
                    <a href="javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 margin_bottom40">
                <div id="ho_show" className="mics">
                  <figure>
                    <img
                      className="img_responsive"
                      src="images/mics_img5.jpg"
                      alt="#"
                    />
                  </figure>
                  <div className="mics_icon">
                    <a href="javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 margin_bottom40">
                <div id="ho_show" className="mics">
                  <figure>
                    <img
                      className="img_responsive"
                      src="images/mics_img6.jpg"
                      alt="#"
                    />
                  </figure>
                  <div className="mics_icon">
                    <a href="javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end our_mics */}
        {/* testimonial */}
        <div className="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="titlepage text_align_center">
                  <h2>Our Client Says</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row d_flex">
              <div className="col-md-10 offset-md-1">
                <div
                  id="testimo"
                  className="carousel slide our_testimonial"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li data-target="#testimo" data-slide-to={0} className="active" />
                    <li data-target="#testimo" data-slide-to={1} />
                    <li data-target="#testimo" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="carousel-caption posi_in">
                          <div className="testomoniam_text">
                            <i className="text_align_left d-block">
                              <img src="images/icon.png" alt="#" />
                            </i>
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece of classical Latin
                              literature from 45 BC, making it over 2000 years old.
                              Richard McClintock, a Latin professor at Hampden-Sydney
                              College in Virginia, looked up one of the more obscure
                            </p>
                            <i className="text_align_right d-block">
                              <img src="images/icon_right.png" alt="#" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption posi_in">
                          <div className="testomoniam_text">
                            <i className="text_align_left d-block">
                              <img src="images/icon.png" alt="#" />
                            </i>
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece of classical Latin
                              literature from 45 BC, making it over 2000 years old.
                              Richard McClintock, a Latin professor at Hampden-Sydney
                              College in Virginia, looked up one of the more obscure
                            </p>
                            <i className="text_align_right d-block">
                              <img src="images/icon_right.png" alt="#" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption posi_in">
                          <div className="testomoniam_text">
                            <i className="text_align_left d-block">
                              <img src="images/icon.png" alt="#" />
                            </i>
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece of classical Latin
                              literature from 45 BC, making it over 2000 years old.
                              Richard McClintock, a Latin professor at Hampden-Sydney
                              College in Virginia, looked up one of the more obscure
                            </p>
                            <i className="text_align_right d-block">
                              <img src="images/icon_right.png" alt="#" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#testimo"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#testimo"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end testimonial */}
        {/* contact section */}
        <div className="contact left_cross_right">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage text_align_left">
                  <h2>Request a call back.</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or raThere are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or raThere are many variations
                    of passages of Lorem{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <input
                        className="contactus"
                        placeholder="You Name"
                        type="type"
                        name="Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="contactus"
                        placeholder="Email"
                        type="type"
                        name="Email"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="contactus"
                        placeholder="Phone Number"
                        type="type"
                        name="Phone Number"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="textarea"
                        placeholder="Message"
                        type="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="send_btn">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end contact section */}
        {/* footer */}
        <footer>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <a className="logo_footer">
                    <img src="images/logo.png" alt="#" />
                  </a>
                </div>
                <div className="col-md-5">
                  <div className="Informa conta">
                    <h3>Adderess</h3>
                    <ul>
                      <li>
                        {" "}
                        Jobify Inc Canada. 545 Younge St, <br />
                        Suite 11 Toronto, Ontario M4K 6F4
                      </li>
                    </ul>
                  </div>
                  <div className="Informa helpful">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="Informa conta">
                    <h3>Contact Us</h3>
                    <ul>
                      <li>
                        {" "}
                        <a href="Javascript:void(0)"> (+71) 897648934</a>
                      </li>
                      <li>
                        {" "}
                        <a href="Javascript:void(0)"> demo123@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                  <ul className="social_icon text_align_center">
                    <li>
                      {" "}
                      <a href="Javascript:void(0)">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="Javascript:void(0)">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="Javascript:void(0)">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <div className="Informa">
                    <h3>Newsletter</h3>
                    <form className="newslatter_form">
                      <input
                        className="ente"
                        placeholder="Enter your email"
                        type="text"
                        name="Enter your email"
                      />
                      <button className="subs_btn">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright text_align_center">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <p>
                      © 2020 All Rights Reserved. Design by{" "}
                      <a href="https://html.design/"> Free Html Template</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}
        {/* Javascript files*/}
      </>

    </div >
  );
}

export default App;
