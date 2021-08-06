// Importing assets
import './App.scss';
import profile from './img/profile.jpg'
import one from "./img/1.jpg";
import two from "./img/2.jpg";
import three from "./img/3.jpg";
import four from "./img/4.jpg";
import five from "./img/5.jpg";
import six from "./img/6.jpg";
import eight from "./img/8.jpg";


function App() {
  return (
    <>
      <div class="responsive-header visible-xs visible-sm">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="top-section">
                <div class="profile-image">
                  <img src={profile} alt="Volton" />
                </div>
                <div class="profile-content">
                  <h3 class="profile-title">Volton</h3>
                  <p class="profile-description">Digital Photographer</p>
                </div>
              </div>
            </div>
          </div>
          <a href="#" class="toggle-menu">
            <i class="fa fa-bars"></i>
          </a>
          <div class="main-navigation responsive-menu">
            <ul class="navigation">
              <li>
                <a href="#top">
                  <i class="fa fa-home"></i>Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i class="fa fa-user"></i>About Me
                </a>
              </li>
              <li>
                <a href="#projects">
                  <i class="fa fa-newspaper-o"></i>My Gallery
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i class="fa fa-envelope"></i>Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- SIDEBAR --> */}
      <div class="sidebar-menu hidden-xs hidden-sm">
        <div class="top-section">
          <div class="profile-image">
            <img src={profile} alt="Volton" />
          </div>
          <h3 class="profile-title">Volton</h3>
          <p class="profile-description">Digital Photography</p>
        </div>
        {/* <!-- top-section --> */}
        <div class="main-navigation">
          <ul class="navigation">
            <li>
              <a href="#top">
                <i class="fa fa-globe"></i>Welcome
              </a>
            </li>
            <li>
              <a href="#about">
                <i class="fa fa-pencil"></i>About Me
              </a>
            </li>
            <li>
              <a href="#projects">
                <i class="fa fa-paperclip"></i>My Gallery
              </a>
            </li>
            <li>
              <a href="#contact">
                <i class="fa fa-link"></i>Contact Me
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- .main-navigation --> */}
        <div class="social-icons">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-rss"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- .social-icons --> */}
      </div>
      {/* <!-- .sidebar-menu --> */}

      <div class="banner-bg" id="top">
        <div class="banner-overlay"></div>
        <div class="welcome-text">
          <h2>Simple Design | Personal Portfolio</h2>
          <h5>
            This is a mobile friendly layout with Bootstrap v3.3.1 framework.
            Maecenas eu ante at nunc posuere fringilla sit amet non dolor. Proin
            condimentum fermentum nunc.
          </h5>
        </div>
      </div>

      {/* <!-- MAIN CONTENT --> */}
      <div class="main-content">
        <div class="fluid-container">
          <div class="content-wrapper">
            {/* <!-- ABOUT --> */}
            <div class="page-section" id="about">
              <div class="row">
                <div class="col-md-12">
                  <h4 class="widget-title">Learn About Me</h4>
                  <div class="about-image">
                    <img src={eight} alt="about me" />
                  </div>
                  <p>
                    Volton is free website design from{" "}
                    <span class="blue">template</span>
                    <span class="green">mo</span>. You can use this template for
                    any purpose. Please tell your friends about it. Thank you.
                    Credit goes to{" "}
                    <a
                      rel="nofollow"
                      href="http://unsplash.com"
                      target="_parent"
                    >
                      Unsplash
                    </a>{" "}
                    for images used in this design. You can{" "}
                    <strong>change menu icons</strong> by checking{" "}
                    <a
                      rel="nofollow"
                      href="http://fontawesome.info/font-awesome-icon-world-map/"
                      target="_parent"
                    >
                      Font Awesome
                    </a>{" "}
                    (version 4). Example:{" "}
                    <strong>
                      &lt;i class=&quot;fa fa-camera&quot;&gt;&lt;/i&gt;
                    </strong>
                  </p>
                  <hr></hr>
                </div>
              </div>
              {/* <!-- #about --> */}
            </div>

            {/* <!-- PROJECTS --> */}
            <div class="page-section" id="projects">
              <div class="row">
                <div class="col-md-12">
                  <h4 class="widget-title">PHOTOS OF WHAT I DO</h4>
                  <p>
                    Duis sed odio sit amet nibh vulputate cursus a sit amet
                    mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                    tincidunt auctor a ornare odio. Maecenas et lorem molestie,
                    maximus justo dignissim, cursus nisl. Nullam at ante quis ex
                    pharetra pulvinar quis id dolor. Integer lorem odio, euismod
                    ut sem sit amet, imperdiet condimentum diam.
                  </p>
                </div>
              </div>
              <div class="row projects-holder">
                <div class="col-md-4 col-sm-6">
                  <div class="project-item">
                    <img src={one} alt="" />
                    <div class="project-hover">
                      <div class="inside">
                        <h5>
                          <a href="#">Pellentesque porta ligula</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam cursus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="project-item">
                    <img src={two} alt="" />
                    <div class="project-hover">
                      <div class="inside">
                        <h5>
                          <a href="#">Pellentesque porta ligula</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam cursus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="project-item">
                    <img src={three} alt="" />
                    <div class="project-hover">
                      <div class="inside">
                        <h5>
                          <a href="#">Pellentesque porta ligula</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam cursus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="project-item">
                    <img src={four} alt="" />
                    <div class="project-hover">
                      <div class="inside">
                        <h5>
                          <a href="#">Pellentesque porta ligula</a>
                        </h5>
                        <p>
                          Quisque mattis sit amet dolor eu scelerisque. Vivamus
                          bibendum massa et nisl tempus commodo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="project-item">
                    <img src={five} alt="" />
                    <div class="project-hover">
                      <div class="inside">
                        <h5>
                          <a href="#">Pellentesque porta ligula</a>
                        </h5>
                        <p>
                          Quisque mattis sit amet dolor eu scelerisque. Vivamus
                          bibendum massa et nisl tempus commodo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="project-item">
                    <img src={six} alt="" />
                    <div class="project-hover">
                      <div class="inside">
                        <h5>
                          <a href="#">Pellentesque porta ligula</a>
                        </h5>
                        <p>
                          Quisque mattis sit amet dolor eu scelerisque. Vivamus
                          bibendum massa et nisl tempus commodo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .projects-holder --> */}
            </div>
            <hr></hr>

            {/* <!-- CONTACT --> */}
            <div class="page-section" id="contact">
              <div class="row">
                <div class="col-md-12">
                  <h4 class="widget-title">PLACE TO TALK WITH ME</h4>
                  <p>
                    Vestibulum ac iaculis erat, in semper dolor. Maecenas et
                    lorem molestie, maximus justo dignissim, cursus nisl. Nullam
                    at ante quis ex pharetra pulvinar quis id dolor. Integer
                    lorem odio, euismod ut sem sit amet, imperdiet condimentum
                    diam.
                  </p>
                </div>
              </div>
              <div class="row">
                <form action="#" method="post" class="contact-form">
                  <fieldset class="col-md-4 col-sm-6">
                    <input
                      type="text"
                      id="your-name"
                      placeholder="Your Name..."
                    />
                  </fieldset>
                  <fieldset class="col-md-4 col-sm-6">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email..."
                    />
                  </fieldset>
                  <fieldset class="col-md-4 col-sm-12">
                    <input
                      type="text"
                      id="your-subject"
                      placeholder="Subject..."
                    />
                  </fieldset>
                  <fieldset class="col-md-12 col-sm-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="6"
                      placeholder="Leave your message..."
                    ></textarea>
                  </fieldset>
                  <fieldset class="col-md-12 col-sm-12">
                    <input
                      type="submit"
                      class="button big default"
                      value="Send Message"
                    />
                  </fieldset>
                </form>
              </div>
              {/* <!-- .contact-form --> */}
            </div>
            <hr></hr>

            <div class="row" id="footer">
              <div class="col-md-12 text-center">
                <p class="copyright-text">Copyright &copy; 2015 Company Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
