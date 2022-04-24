import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'


import './Form.css'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_dw8dpae', 'template_4s3xq9k', refForm.current,'u9HtB8wtuBQqD8J2v')
      .then(() => {
          alert('Message successfully sent!')
          window.location.reload(false)
        }, () => {
          alert('Failed to send the message, please try again')
        }
    )
  }

  return (
    <div className='contact-form'>
      <form className='form-container' ref={refForm} onSubmit={sendEmail}>
        <div className='half'>
          <input placeholder="Name" type="text" name="name" required />
          <input placeholder="Email" type="email" name="email" required />
        </div>
        <div className="form-row">
          <input placeholder="Subject" type="text" name="subject" required />
        </div>
        <div className="form-row">
          <textarea placeholder="Message" name="message" required style={{resize:'none'}} ></textarea>
        </div>
        <button type="submit" className="flat-button">SEND</button>
      </form>
    </div>
  )
}

export default Contact