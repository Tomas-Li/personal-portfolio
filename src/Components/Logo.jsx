import React from 'react'

import emptyImage from '../assets/images/Tvacia.png'
import solidImage from '../assets/images/Tsola.png'

import './Logo.css'

const Logo = () => {
  return (
    <div className='logos-container'>
      <img src={emptyImage} alt='Empty Logo' className='empty-logo'/>
      <img src={solidImage} alt='Solid Logo' className='solid-logo'/>
    </div>
  )
}

export default Logo