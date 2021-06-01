import React, { Component } from 'react';

const Projects = [
  {
    title: 'Droptrim',
    category: 'Tracking website`s visitors',
    image: 'droptrim.png',
    url: 'https://droptrim.com/',
  },
  {
    title: 'TSBS',
    category: 'Teaching',
    image: 'tsbs.png',
    url: 'https://teachingsidebyside.com/',
  },
  {
    title: 'IPMS Bdata',
    category: 'IIot',
    image: 'bdata.png',
    url: 'hwwtp.bdata.ca',
  },
  {
    title: 'UXTClan',
    category: 'Company Portfolio',
    image: 'uxtclan.png',
    url: 'https://uxtclan.herokuapp.com/',
  },
];

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = Projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return (
          <div key={projects.title} className='columns portfolio-item'>
            <div className='item-wrap'>
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} height='120px' src={projectImage} />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className='link-icon'>
                  <i className='fa fa-link'></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Works.</h1>

            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds cf'
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
