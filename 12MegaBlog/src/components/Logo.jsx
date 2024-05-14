import React from 'react'
import logoImage from '../assets/travel_tales_logo.png'

function Logo({width = '100px'}) {
  return (
    <img src={logoImage} alt="Logo" style={{ width: width }} />
  )
}

export default Logo