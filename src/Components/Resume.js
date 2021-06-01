import React, { Component } from 'react';

const works = [
  {
    company: 'IQVIS Technology',
    title: 'Software Engineer',
    years: 'Nov 2016 - March 2017',
    description: '',
  },
  {
    company: 'Crewlogix',
    title: 'Senior Software Engineer',
    years: 'March 2017 - April 2018',
    description: '',
  },
  {
    company: 'Z-system',
    title: 'MEAN Stack Developer',
    years: 'April 2018 - July 2018',
    description: '',
  },
  {
    company: 'Northbay Solutions',
    title: 'Software Engineer',
    years: 'AUG 2019 - Currently working',
    description: '',
  },
];

const Skills = [
  { name: 'Javascript' },
  { name: 'ES6' },
  { name: 'ReactJs' },
  { name: 'React.js' },
  { name: 'Redux' },
  { name: 'Redux Saga' },
  { name: 'Redux Thunk' },
  { name: 'Angular' },
  { name: 'Node.js' },
  { name: 'Express.js' },
  { name: 'Cordova' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB' },
  { name: 'CSS3' },
  { name: 'HTML5' },
  { name: 'scss' },
  { name: 'Styled Components' },
  { name: 'Bootstrap' },
  { name: 'Ant Design' },
  { name: 'Twilio' },
  { name: 'AWS(S3, Cloudfront, Route 53, Lambda Function, API Gateway)' },
  { name: 'Git' },
];

class Resume extends Component {
  render() {
    if (this.props.data) {
      // var skillmessage = this.props.data.skillmessage;

      var work = works.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className='info'>
              {work.title}
              <span>&bull;</span> <em className='date'>{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = Skills.map(function (skills) {
        return <li key={skills.name}>{skills.name}</li>;
      });
    }

    return (
      <section id='resume'>
        <div className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>
                <div>
                  <h3>Islamia University of Bahawalpur</h3>
                  <p className='info'>
                    Bachelor in Computer Science <span>&bull;</span>
                    <em className='date'>2012 - 2016</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className='nine columns main-col'>{work}</div>
        </div>

        <div className='row skill'>
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            {/* <p>{skillmessage}</p> */}

            <div>
              <ul className='skills'>{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
