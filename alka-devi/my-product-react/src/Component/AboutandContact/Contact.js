import fbicon from "../Images/fb.jpg";
import igicon from "../Images/ig.jpg";
import xicon from "../Images/xtwitter.jpg";
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className="text-center text-color">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feedback, or inquiries, please don't hesitate
        to contact us. Our team is here to assist you.
      </p>
      <h2>Contact Information</h2>
      <p>
        <strong>Email:</strong> contact@example.com
      </p>
      <p>
        <strong>Phone:</strong> +123-456-7890
      </p>
      <p>
        <strong>Address:</strong> 123 Main Street, City, Country, ZIP
      </p>
      <h2>Send Us a Message</h2>
      <h3>On</h3>
      <div className="d-flex justify-content-center">
        <img className="d-block icon mx-3" src={fbicon} alt="Facebook" />
        <img className="d-block icon mx-3" src={igicon} alt="Instagram" />
        <img className="d-block icon mx-3" src={xicon} alt="X" />
      </div>
      <h6>On our Social Media Platforms</h6>
    </div>
  );
};

export default ContactUs;
