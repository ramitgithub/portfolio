import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'

function Footer() {
  return (
    <div className='footer'>
      <img src={wave} alt="" style={{width:'100%'}}/>
      <div className="f-content">
        <span>ram736196@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/ram736169?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
           <Instagram color='white' size='3rem'/>
          </a>
          <a href="https://www.facebook.com/ram.antikiller?mibextid=ZbWKwL">
           <Facebook color='white' size='3rem'/>
          </a>
          <a href="https://www.linkedin.com/in/ram-sharma-376204267/">
           <LinkedIn color='white' size='3rem'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
