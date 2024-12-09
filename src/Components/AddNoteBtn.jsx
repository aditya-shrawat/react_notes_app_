import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddNotePopup from './AddNotePopup';

const AddNoteBtn = () => {

  const [isPopUpOn, setPopup] = useState(false) ;

  const clickHandler = ()=>{
    setPopup (!isPopUpOn) ;
  }

  return (
    <>
    <div onClick={clickHandler} className='bg-gray-300 h-12 w-12 flex justify-center items-center rounded-full cursor-pointer fixed bottom-10 right-10'>
        <FontAwesomeIcon icon={faPlus} className='text-2xl' />
    </div>
    <AddNotePopup isPopUpOn={isPopUpOn} clickHandler={clickHandler} />
    </>
  )
}

export default AddNoteBtn