import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNoteBtn = () => {
  return (
    <div className='bg-gray-300 h-12 w-12 flex justify-center items-center rounded-full cursor-pointer fixed bottom-10 right-10'>
        <FontAwesomeIcon icon={faPlus} className='text-2xl' />
    </div>
  )
}

export default AddNoteBtn