import React from 'react'

const Header = () => {
  return (
    <>
      <div id='headerContainer'>
        <span id='headerinfo'>RENTBRO</span>
        <ul className='headerList'>
            <li>Services</li>
            <li>Appartment</li>
            <li>Contact</li>
            <li>Pricing</li>
        </ul>
          <ul className='headerList'>
            <li>Sign In</li>
            <li><button className='btn'>Register</button></li>
          </ul>
      </div>
      <hr id='line' />
    </>
  )
}

export default Header