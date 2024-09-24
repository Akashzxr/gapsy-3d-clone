import React from 'react'

function Footer() {
  return (
    <div className='fixed bottom-0 flex justify-between p-7 w-full items-center'>
      <div className='hidden sm:flex sm:gap-10'>
        <div className='footer-link'>Facebook</div>
        <div className='footer-link'>Bihance</div>
        <div className='footer-link'>Dribble</div>
        <div className='footer-link'>Instagram</div>
      </div>

      <div>Scroll to Explore</div>
    </div>
  )
}

export default Footer
