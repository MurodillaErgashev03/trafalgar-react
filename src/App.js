import logo from './logojon.svg';
import img1 from './img-1.png';
import lupa from './lupa.svg';
import img2 from './img-2.svg';
import img3 from './frame-3.svg';
import img4 from './img-4.svg';
import img5 from './img-5.svg';
import img6 from './img-6.svg';
import leo from './img-leo.png';
import app from './app-illustration.png';
import mask from './mask.svg';
import arrow from './arrow.svg';
import check1 from './check1.png';
import check2 from './check2.png';
import check3 from './check3.png';
import next from './next.svg';
import footlogo from './foot-logo.svg';

import './App.css';

function App() {
  return (
    <div className="">

      <header class="site-header">
        <div class="container">
          <div class="site-header-blok">
            <a href="#">
              <img src={logo} />
            </a>
            <ul class="site-header-list">
              <li class="site-header-item">
                <a class="site-header-link" href="#">Home</a>
              </li>
              <li class="site-header-item">
                <a class="site-header-link" href="#">Find a doctor</a>
              </li>
              <li class="site-header-item">
                <a class="site-header-link" href="#">Apps</a>
              </li>
              <li class="site-header-item">
                <a class="site-header-link" href="#">Testimonials</a>
              </li>
              <li class="site-header-item">
                <a class="site-header-link" href="#">About us</a>
              </li>
            </ul>
          </div>

        </div>

      </header>
      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-block">

              <div class="hero-content">
                <h1 class="hero-title">
                  Virtual healthcare
                  for you
                </h1>
                <p class="hero-text">
                  Trafalgar provides progressive, and affordable
                  healthcare, accessible on mobile and online
                  for everyone
                </p>
                <a class="hero-link" href="#">Consult today</a>
              </div>
              <div class="hero-img">
                <img src={img1} className='hero-img-item' />
              </div>

            </div>



          </div>
        </section>
        <section class="service">
          <div class="container">
            <h2 class="service-title">Our service</h2>
            <span class="service-line"></span>
            <p class="service-text"> We provide to you the best choiches for you. Adjust it to your health needs and
              make sure your undergo treatment with our highly qualified doctors you can consult with us which
              type of service is suitable for your health</p>
            <ul class="service-list">
              <li class="service-item">
                <div class="service-img">
                  <img src={lupa} />
                </div>
                <h3 class="service-inner-title">Online pharmacy</h3>
                <p class="service-inner-text">Buy your medicines with our mobile application with a simple
                  delivery system</p>
              </li>

              <li class="service-item">
                <div class="service-img">
                  <img src={img2} />
                </div>
                <h3 class="service-inner-title">Online pharmacy</h3>
                <p class="service-inner-text">Buy your medicines with our mobile application with a simple
                  delivery system</p>
              </li>

              <li class="service-item">
                <div class="service-img">
                  <img src={img3} />
                </div>
                <h3 class="service-inner-title">Consultation</h3>
                <p class="service-inner-text">Free consultation with our trusted doctors and get the best
                  recomendations</p>
              </li>


              <li class="service-item">
                <div class="service-img">
                  <img src={img4} />
                </div>
                <h3 class="service-inner-title">Details info</h3>
                <p class="service-inner-text">Free consultation with our trusted doctors and get the best
                  recomendations</p>
              </li>

              <li class="service-item">
                <div class="service-img">
                  <img src={img5} />
                </div>
                <h3 class="service-inner-title">Emergency care</h3>
                <p class="service-inner-text">You can get 24/7 urgent care for yourself or your children and
                  your
                  lovely family</p>
              </li>

              <li class="service-item">
                <div class="service-img">
                  <img src={img6} />
                </div>
                <h3 class="service-inner-title">Tracking</h3>
                <p class="service-inner-text">Track and save your medical history and health data </p>
              </li>
            </ul>
            <div class="service-link">
              <a class="service-item-link" href="#">Learn more</a>
            </div>

          </div>
        </section>
        <section class=" leading">
          <div class="container">

            <div class="leading-blok">
              <div class="leading-hero">
                <img src={leo} />

              </div>
              <div class="leading-item-title">
                <h3 class="leading-title">
                  Leading healthcare providers
                </h3>
                <span class="leading-span" ></span>
                <p class="leading-text">
                  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride
                  in the solutions we deliver
                </p>
                <a class="leading-link" href="#">Learn more</a>
              </div>
            </div>
          </div>



        </section>
        <section class="download">
          <div class="container" >
            <div class="hero-download" >
              <div class="download-title">
                <h3 class="download-item-title">
                  Download our mobile apps
                </h3>
                <span class="leading-span" ></span>
                <p class="download-text">
                  Our dedicated patient engagement app and
                  web portal allow you to access information instantaneously (no tedeous form, long calls,
                  or administrative hassle) and securely
                </p>
                <a class="download-link" href="#">Download</a>
              </div>
              <div class="download-img">
                <img src={app} />
              </div>

            </div>
          </div>

        </section>
        <section className='customer'>
          <div className='container customer__container'>
            <div className='customer__block'>
              <h2 className='customer__title'>
                What our customer are saying
              </h2>
              <span className='cunstomer__span'></span>


              <div className='customer__bottom-box'>

                <div className='customer__left-block'>
                  <img src={mask} className='mask-img' />
                  <div>
                    <h3 className='mask__title'>
                      Edward Newgate
                    </h3>
                    <p className='mask__text'>
                      Founder Circle
                    </p>
                  </div>
                </div>

                <div className='customer__right-block'>
                  <p className='right-block__text'>
                    “Our dedicated patient engagement app and
                    web portal allow you to access information instantaneously (no tedeous form, long calls,
                    or administrative hassle) and securely”
                  </p>
                </div>

              </div>
            </div>
            <div className='arrow-img'>
              < img src={arrow} className='arrow-img' />
            </div>
          </div>
        </section>
        <section className='check'>
          <div className='container check__container'>
            <h2 className='check__top-title'>
              Check out our latest article
            </h2>
            <span className='check__span'></span>

            <ul className='list__group'>
              <li className='list__group-item'>
                <div>
                  <img className='check__img1' src={check1} />
                </div>
                <div className='list-item_box'>
                  <h3 className='list-item__title'>
                    Disease detection, check
                    up in the laboratory
                  </h3>
                  <p className='list-item__text'>
                    In this case, the role of the health laboratory is very important to do
                    a disease detection...
                  </p>
                  <div className='link__block'>
                    <a className='check__link' href='#'>
                      Read more
                    </a>
                    <img src={next} className='next__img' />

                  </div>
                </div>
              </li>
              <li className='list__group-item'>
                <div>
                  <img className='check__img1' src={check2} />
                </div>
                <div className='list-item_box'>
                  <h3 className='list-item__title'>
                    Herbal medicines that are
                    safe for consumption
                  </h3>
                  <p className='list-item__text'>
                    Herbal medicine is very widely used at this time because of its very good for your health...
                  </p>
                  <div className='link__block'>
                    <a className='check__link' href='#'>
                      Read more
                    </a>
                    <img src={next} className='next__img' />

                  </div>
                </div>
              </li>
              <li className='list__group-item'>
                <div>
                  <img className='check__img1' src={check3} />
                </div>
                <div className='list-item_box'>
                  <h3 className='list-item__title'>
                    Natural care for healthy
                    facial skin
                  </h3>
                  <p className='list-item__text'>
                    A healthy lifestyle should start from now and also for your skin health.
                    There are some...
                  </p>
                  <div className='link__block'>
                    <a className='check__link' href='#'>
                      Read more
                    </a>
                    <img src={next} className='next__img' />

                  </div>
                </div>
              </li>
            </ul>



            <button className='check__btn'>
              View all
            </button>

          </div>
        </section>
      </main>
      <footer className='site-footer'>
        <div className='container footer__container'>
          <div className='footer__left-block'>
            <img src={footlogo} />
            <p className='footer__left-text1'>
              Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
              for everyone
            </p>
            <p className='footer__left-text2'>
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>
          <div className='footer__right-block'>
            <ul className='footer__list-group'>
              <li className='footer__item-list'>

                <p className='footer__item-list-text'>
                  Company
                </p>
                <p className='footer__item-text'>
                  About
                </p>
                <p className='footer__item-text'>
                  Testimonials
                </p>
                <p className='footer__item-text'>
                  Find a doctor
                </p>
                <p className='footer__item-text'>
                  Apps
                </p>

              </li>
              <li className='footer__item-list'>

                <p className='footer__item-list-text'>
                Region
                </p>
                <p className='footer__item-text'>
                Indonesia
                </p>
                <p className='footer__item-text'>
                Singapore
                </p>
                <p className='footer__item-text'>
                Hongkong
                </p>
                <p className='footer__item-text'>
                Canada
                </p>

              </li>
              <li className='footer__item-list'>

                <p className='footer__item-list-text'>
                Help
                </p>
                <p className='footer__item-text'>
                Help center
                </p>
                <p className='footer__item-text'>
                Contact support
                </p>
                <p className='footer__item-text'>
                Instructions
                </p>
                <p className='footer__item-text'>
                How it works
                </p>

              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
