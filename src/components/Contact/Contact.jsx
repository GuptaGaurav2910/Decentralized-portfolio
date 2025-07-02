import React from 'react';
import './Contact.css';

const Contact = () => {

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact <span>Me</span></h2>
        <h4>Let's Work Together</h4>
        <p>
        Are you looking for a developer who combines deep expertise in blockchain technology with advanced Java programming skills? Look no further! Whether you're building decentralized applications, implementing smart contracts, or developing scalable enterprise solutions, I bring a unique blend of skills to the table.
        </p>
        <div className="contact-list">
          <li><i className="fa-sharp fa-solid fa-paper-plane"></i> guptagaurav2910@gmail.com</li>
        </div>
        <div className="contact-icons">
          <a href="https://github.com/GuptaGaurav2910"><i className="fa-brands fa-github fa-beat-fade"></i></a>
          <a href="https://x.com/gauravg10548425"><i className="fa-brands fa-twitter fa-shake"></i></a>
          <a href="https://api.whatsapp.com/send?phone=7733841942&text=%22Hello%20Gaurav!%20%F0%9F%8C%9F%20%20Thank%20you%20so%20much%20for%20taking%20the%20time%20to%20connect%20with%20me%20here.%20I%20really%20appreciate%20it!%20Looking%20forward%20to%20our%20conversation.%22"><i className="fa-brands fa-whatsapp fa-beat-fade"></i></a>
          <a href="https://www.linkedin.com/in/gaurav-g-8337b6234/"><i className="fa-brands fa-linkedin fa-shake"></i></a>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit="">
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Your Email" required />
          <input type="text" placeholder="Enter Your Subject" />
          <textarea name="message" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
