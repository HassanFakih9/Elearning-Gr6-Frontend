import React from 'react';
import '../CSS/Contact.css'; 
import img1 from './Images/icon-fb.png';
import img2 from './Images/icon-insta.png';
import img3 from './Images/icon-link.png';
import img4 from './Images/Mention-amico (1) 1.png';
function Contact() {

  return (
    <footer>
      <div className="container">
        <div className="column1">
          <p className="follow">Follow us</p>
          <a href="www.facebook.com">
            <div className="item1">
              <img className="imgg1" src={img1} alt="Images"/>
            </div>
          </a>

          <a href="www.facebook.com">
            <div className="item2">
              <img
                src={img2}
                alt="Images"
                className="imgg2"
              />
            </div>
          </a>
          <a href="www.facebook.com">
            <div className="item3">
              <img
                src={img3}
                alt="Images"
                className="imgg3"
              />
            </div>
          </a>
        </div>
        <div className="column2">
          <div className="title">Get in touch</div>
          <form action="process_form.php" method="post">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <div className="input-container">
                <input type="text" id="name" name="name" required />
                <div className="line"></div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <div className="input-container">
                <input type="email" id="email" name="email" required />
                <div className="line"></div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <div className="input-container">
                <textarea id="message" name="message" required></textarea>
                <div className="line"></div>
              </div>
            </div>
            <div className="form-group3">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <div className="column3">
          <img src={img4} alt="Images" className="Mention-amico" />
        </div>
      </div>
    </footer>
  );
}

export default Contact;
