import React from 'react'

const GoogleReview = () => {
  return (
    <div className="w-full h-96">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.635518909355!2d100.5578231!3d13.7405031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310313bfc5b1a90f%3A0xfe0e4d3fc99f65b3!2sTriumph%20Property%20-%20Best%20Real%20Estate%20Agent%20Bangkok!5e0!3m2!1sen!2sbd!4v1719222129967!5m2!1sen!2sbd"
        title="Google Map"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default GoogleReview