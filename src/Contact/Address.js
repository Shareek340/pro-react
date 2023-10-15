import React from 'react'
import SvgIcon1 from './SvgIcon1'
import './address.css'

function Address() {
  return (
    <div className='address'>
        <div className='Address-text'>
        <div className={`office-contact-section`}>
      <div className={`office-divider`} />
      <div className={`office-location-container`}>
        <p className={`max-width-378-box-sizing-border-box-font-family-inter-font-size-36-font-weight-500-letter-spacing-minus-0-02em-line-height-95-0422592163086-color-white`}>
          Come Visit Our Offices
          <br />
          For A Discovery Call
        </p>
      </div>
      <p className={`office-location-text`}>Our offices are located in Manchester, England</p>
      <div className={`contact-info-container`}>
      <p className={`email-text`}>hello@level8digital.com</p>
        <SvgIcon1 className="svg-container" />
      </div>
    </div>

            
        </div>
        <div className='Address-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63122.11417054791!2d81.17201663580268!3d8.583291986105673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbcb6902dbe27%3A0x7de76a7a331b0fbb!2sTrincomalee!5e0!3m2!1sen!2slk!4v1697292489478!5m2!1sen!2slk" width="1000" height="540" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Address