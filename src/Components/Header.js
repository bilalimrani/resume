import React, { Component } from 'react';

const social = [
  {
    className: 'fa fa-facebook',
    name: 'facebook',
    url: 'https://www.facebook.com/bilal.imrani1/',
  },
  {
    className: 'fa fa-github',
    name: 'github',
    url: 'https://github.com/bilalimrani',
  },
  {
    className: 'fa fa-linkedin',
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/bilal-imrani-722281103/',
  },
];

class Header extends Component {
  render() {
    var networks = social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Works
              </a>
            </li>
            {/* <li>
              <a className='smoothscroll' href='#testimonials'>
                Testimonials
              </a>
            </li> */}
            <li>
              <a className='smoothscroll' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>I'm Bilal Imrani.</h1>
            <h3>
              I'm Senior Javascript Developer. Seeking a career opportunity as a
              Software Developer that allows to apply and enhance analytical and
              programming skills.
            </h3>
            <hr />
            <ul className='social'>{networks}</ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
