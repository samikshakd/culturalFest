import React from 'react'
import { TextCenter } from 'react-bootstrap-icons'


function Contact() {
  return (
    <div className="jumbotron jumbotron-fluid " style={{ paddingTop: '300px', boxSizing: 'content-box', content: 'TextCenter' }}>
      <div className='textalign-center'>
        <h1 className="display-4 text-center"> Feel free to contact us!</h1>
        <h1 className="text-xl-center"> CulturOFest </h1>
        <div className="container1 text-xl-center">
          <p>A blog to explore, learn, and share Electro Funk, Soul, & Hip Hop Music</p>

          <div id="social" className="col-md-12 inline text-center">
            <span id="twitter" className="display: inline-block" style={{ paddingTop: '20px' }} >
              <a href="https://twitter.com/FunkFantasizers" target="_blank"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
            </span>
            <span id="instagram" className="display: inline-block" style={{ paddingTop: '20px' }} >
            <a href="https://twitter.com/FunkFantasizers" target="_blank"><i className="fa fa-instagram fa-2x fa-fw" aria-hidden="true"></i></a>
            </span>
            <span id="whatsapp" className="display: inline-block" style={{ paddingTop: '20px' }} >
            <a href="https://twitter.com/FunkFantasizers" target="_blank"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a>
            </span>
            <span id="facebook" className="display: inline-block" style={{ paddingTop: '20px' }} >
            <a href="https://twitter.com/FunkFantasizers" target="_blank"><i class="fa fa-facebook-square fa-2x fa-fw" aria-hidden="true"></i>
            </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Contact;