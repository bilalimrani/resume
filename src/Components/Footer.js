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

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <ul className='social-links'>{networks}</ul>

            <ul className='copyright'>
              <li>&copy; Copyright 2016 Bilal Imrani</li>
            </ul>
          </div>
          <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#home'>
              <i className='icon-up-open'></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
