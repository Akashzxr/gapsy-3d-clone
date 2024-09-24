import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
  return (
    <div className='fixed z-10 mt-9 pl-5 flex w-full justify-between pr-10'>
      <div>
        <img src='/logo.svg'/>
      </div>

      <div className='flex gap-2'>
        <button className='more-btn w-12 h-10 rounded-md bg-black'><FontAwesomeIcon className='content text-white relative z-10' icon={faBars}/></button>
        <button className='more-btn w-20 h-10 rounded-md bg-black text-white'><span className='content relative z-10'>Hire Us</span></button>
      </div>
    </div>
  )
}

export default Header
