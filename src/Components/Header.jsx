import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
     <div className='mb-5'>
        <div className='flex justify-between p-2 mb-1 text-2xl font-semibold'>
            <h1>Notes</h1>
            <FontAwesomeIcon icon={faCircleHalfStroke} className='cursor-pointer hover:scale-105 ' />
        </div>
        <div className='bg-gray-200 w-full px-3 py-2 text-lg flex items-center rounded-xl'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="search" className='bg-transparent w-full px-2 border-none outline-none' />
        </div>
     </div>
  )
}

export default Header