import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      var name = 'Bilal Imrani';
      var profilepic = 'images/' + this.props.data.image;
      var bio = this.props.data.bio;
      var street = 'House # 33 Ittehad town';
      var city = 'Rahim Yar Khan';
      var state = 'Punjab';
      var zip = '64200';
      var phone = '+923156745522';
      var email = 'bimrani816@gmail.com';
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <img
              className='profile-pic'
              src={profilepic}
              alt='Tim Baker Profile Pic'
            />
          </div>
          <div className='nine columns main-col'>
            {/* <h2>About Me</h2>

            <p>{bio}</p> */}
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Contact Details</h2>
                <p className='address'>
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className='columns download'>
                <p>
                  <a href='docs/resume.docx' className='button'>
                    <i className='fa fa-download'></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
