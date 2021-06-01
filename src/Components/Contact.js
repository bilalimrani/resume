import React, { useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';

function Contact() {
  const [data, setData] = useState({});
  const alert = useAlert();

  const contactUs = (e) => {
    debugger;
    e.preventDefault();
    console.log('data', data);
    alert.show('Thank You for contacting me.');
    axios
      .post('/contactus', data)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section id='contact'>
      <div className='row section-head'>
        <div className='two columns header-col'>
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className='ten columns'>
          <p className='lead'>Please Contact me</p>
        </div>
      </div>

      <div className='row'>
        <div className='eight columns'>
          <div>
            <label htmlFor='contactName'>
              Name <span className='required'>*</span>
            </label>
            <input
              type='text'
              defaultValue=''
              size='35'
              id='contactName'
              name='contactName'
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='contactEmail'>
              Email <span className='required'>*</span>
            </label>
            <input
              type='text'
              defaultValue=''
              size='35'
              id='contactEmail'
              name='contactEmail'
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='contactSubject'>Subject</label>
            <input
              type='text'
              defaultValue=''
              size='35'
              id='contactSubject'
              name='contactSubject'
              onChange={(e) => setData({ ...data, subject: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='contactMessage'>
              Message <span className='required'>*</span>
            </label>
            <textarea
              cols='50'
              rows='15'
              id='contactMessage'
              name='contactMessage'
              onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
          </div>

          <div>
            <button className='submit' onClick={contactUs}>
              Submit
            </button>
          </div>

          <div id='message-warning'> Error boy</div>
          <div id='message-success'>
            <i className='fa fa-check'></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        {/* <aside className='four columns footer-widgets'>
            <div className='widget widget_contact'>
              <h4>Address and Phone</h4>
              <p className='address'>
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>

            <div className='widget widget_tweets'>
              <h4 className='widget-title'>Latest Tweets</h4>
              <ul id='twitter'>
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href='#'>http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href='#'>2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href='#'>http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href='#'>3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside> */}
      </div>
    </section>
  );
}

export default Contact;
