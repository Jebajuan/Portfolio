import './css/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="hc">Contact</h1>
      <div className="contact-card">
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/jebajuan-samuel-a832b825b/" target="_blank" rel="noopener noreferrer" className="contact-link">
             LinkedIn
          </a>
          <p className="contact-detail">
             jebaimmanuel@gmail.com
          </p>
          <p className="contact-detail">
             +91 9498315377
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;