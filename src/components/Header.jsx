import React from 'react'
import { MenuIcon } from '../icons/MenuIcon'

function Header({ setOpenMenu }) {

  const handleClose = () => {
    console.log('calingn');
    setOpenMenu(prev => true)
  }

  return (
    <div className=" h-20 shadow-md">
      <div className='flex inset-0 px-3 fixed w-dvw  h-20 bg-white top-0 items-center'>
        <div className="flex-1 ">
          <div onClick={handleClose} className='cursor-pointer text-3xl'><MenuIcon /></div>
        </div>
        <div className="flex-1">
          <img src='logo.png' className='w-auto h-16 object-cover' alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)