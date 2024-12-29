import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ceeb98f6-dd8d-432b-b687-24fddbb34f11");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res)=> res.json())

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>We're here to help! Reach out to us with any questions, feedback, or support needs. Fill out the form below or use the provided contact details, and our team will get back to you promptly. Let's connect and make learning better together!</p>
        <ul>
          <li> <img src={mail_icon} alt="" />contact123@gmail.com</li>
          <li> <img src={phone_icon} alt="" />+91 9876543210</li>
          <li> <img src={location_icon} alt="" />Kannur, Kerala</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your Name' required />
          <label>Phone Number</label>
          <input type="tel" name='name' placeholder='Enter your Number' required />
          <label>Write Your Message</label>
          <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
          <button type='submit' className="btn dark-btn">Submit!!</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact 