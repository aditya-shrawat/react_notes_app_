import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const EditButtons = ({id,notes,setNotesData}) => {

    const [isButtonsOn,setButtonsStatus] = useState(false) ;

    const handleEditButtonsDisplay =()=>{
        setButtonsStatus(!isButtonsOn) ;
    }

  return (
    <div className='absoulate top-3 right-3 cursor-pointer p-1'>
        <FontAwesomeIcon onClick={handleEditButtonsDisplay} className='z-0' icon={faEllipsisVertical} />
        <EditButtonsDiv id={id} notes={notes} setNotesData={setNotesData} isButtonsOn={isButtonsOn} handleEditButtonsDisplay={handleEditButtonsDisplay} />
    </div>
  )
}

const handleDeletation = (id,notes,setNotesData,handleEditButtonsDisplay)=>{
    const updatedNotesData = notes.filter((note)=>note.id !== id);
    setNotesData(updatedNotesData) ;

    handleEditButtonsDisplay()
}

const EditButtonsDiv = ({id,notes,setNotesData,isButtonsOn,handleEditButtonsDisplay})=>{

    if(!isButtonsOn){
        return null ;
    }

    return (
        <div className='bg-red-300 p-2 rounded-lg z-10 absolute top-0 right-0'>
            <ul className='list-none'>
                <li className='cursor-pointer hover:bg-red-400 w-full px-1 rounded-lg mb-1'>Colour</li>
                <li onClick={()=>handleDeletation(id,notes,setNotesData,handleEditButtonsDisplay)} className='cursor-pointer hover:bg-red-400 w-full px-1 rounded-lg'>Delete</li>
            </ul>
        </div>
    )
}

export default EditButtons