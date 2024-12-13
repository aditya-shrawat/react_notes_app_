import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddNotePopup from './AddNotePopup';

const AddNoteBtn = ({handleSave}) => {

  const [isPopUpOn, setPopup] = useState(false) ;

  const clickHandler = ()=>{
    setPopup (!isPopUpOn) ;
  }

  return (
    <>
    <div onClick={clickHandler} className='bg-[#f9c74f] h-12 w-12 text-2xl text-white flex justify-center items-center rounded-full cursor-pointer fixed bottom-10 right-10 z-10'>
        <FontAwesomeIcon icon={faPlus} />
    </div>
    <AddNotePopup isPopUpOn={isPopUpOn} clickHandler={clickHandler} handleSave={handleSave}  />
    </>
  )
}

export default AddNoteBtn