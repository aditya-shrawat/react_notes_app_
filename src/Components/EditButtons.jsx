import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical,faXmark } from '@fortawesome/free-solid-svg-icons';

const EditButtons = ({id,notes,setNotesData}) => {
    // for edit buttons container
    const [isButtonsOn,setButtonsStatus] = useState(false) ;

    const handleEditButtonsDisplay =()=>{
        setButtonsStatus(!isButtonsOn) ;
    }

    // for save button
    const [displaySaveBtn,setDisplaySaveBtn] = useState(false) ;
    const handleSaveBtnDisplay =()=>{
        setDisplaySaveBtn(!displaySaveBtn) ;
    }

  return (
    <div className='absoulate top-3 right-3 p-1'>
        <div className='w-6 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-red-400 z-0' onClick={handleEditButtonsDisplay}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <EditButtonsDiv id={id} notes={notes} setNotesData={setNotesData} isButtonsOn={isButtonsOn} handleEditButtonsDisplay={handleEditButtonsDisplay} handleSaveBtnDisplay={handleSaveBtnDisplay} />
        <SaveEditedNoteBtn displaySaveBtn={displaySaveBtn} handleSaveBtnDisplay={handleSaveBtnDisplay} handleEditButtonsDisplay={handleEditButtonsDisplay}  />
    </div>
  )
}

// edit Buttons component and handlers
const EditButtonsDiv = ({id,notes,setNotesData,isButtonsOn,handleEditButtonsDisplay,handleSaveBtnDisplay})=>{

    if(!isButtonsOn){
        return null ;
    }

    const handleDeletation = ()=>{
        const updatedNotesData = notes.filter((note)=>note.id !== id);
        setNotesData(updatedNotesData) ;
    
        handleEditButtonsDisplay()
    }

    const handleEditBtn = ()=>{
        handleEditButtonsDisplay() // changing display of editButtons
        handleSaveBtnDisplay()  // changing save btn display 
    }

    return (
        <div className='bg-red-300 w-20 px-1 py-2 rounded-md z-10 absolute top-0 right-0'>
            <div className='absolute top-1 right-1 w-5 h-5 flex justify-center items-center rounded-full cursor-pointer' onClick={handleEditButtonsDisplay} >
                <FontAwesomeIcon className='text-sm' icon={faXmark} />
            </div>
            <ul className='list-none mt-4'>
                <li className='cursor-pointer hover:bg-red-400 w-full px-2 rounded-md mb-1' onClick={handleEditBtn}>Edit</li>
                <li onClick={handleDeletation} className='cursor-pointer hover:bg-red-400 w-full px-2 rounded-md'>Delete</li>
            </ul>
        </div>
    )
}

// save button component 
const SaveEditedNoteBtn = ({displaySaveBtn,handleSaveBtnDisplay,handleEditButtonsDisplay})=>{
    if(!displaySaveBtn){
        return null ;
    }

    const saveBtnClickHandler = ()=>{
        handleSaveBtnDisplay()
    }

    return (
        <div className='bg-red-300 w-14 px-1 py-1 rounded-md z-10 absolute top-0 right-0'>
            <div className='cursor-pointer hover:bg-red-400 w-full px-2 rounded-md text-sm' onClick={saveBtnClickHandler}>Save</div>
        </div>
    )
}

export default EditButtons