import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical,faXmark } from '@fortawesome/free-solid-svg-icons';

const EditButtons = ({id,notes,setNotesData,pTagRef,noteRef }) => {
    // for edit buttons container
    const [isButtonsOn,setButtonsStatus] = useState(false) ;

    const handleEditButtonsDisplay =()=>{
        setButtonsStatus(!isButtonsOn) ;
    }

    // for save button
    const [displaySaveBtn,setDisplaySaveBtn] = useState(false) ;
    const handleSaveBtnDisplay =()=>{
        setDisplaySaveBtn(!displaySaveBtn) ;

        if (!displaySaveBtn && pTagRef.current) {
            pTagRef.current.setAttribute('contentEditable', 'true'); // enable editing
            pTagRef.current.focus(); // focus on the p tag
        } else if (pTagRef.current) {
            pTagRef.current.removeAttribute('contentEditable'); // Disable editing
        }
    }

    // to save the edited content 
    const handleSaveContent = () => {
        if (pTagRef.current) {
          const updatedContent = pTagRef.current.textContent;
          setNotesData((prevNotes) =>
            prevNotes.map((note) =>
              note.id === id ? { ...note, content: updatedContent } : note
            )
          );
          pTagRef.current.removeAttribute('contentEditable'); // disable  editing
        }
    }

    // if we click outside the Note after opening the edit buttons 
    const handleClickOutsideNote = (e)=>{
        if(noteRef.current && !noteRef.current.contains(e.target)){
            if(isButtonsOn){ // if edit buttons are on
                handleEditButtonsDisplay()
            }
            if(displaySaveBtn){ // if save button is on
                handleSaveBtnDisplay()
                handleSaveContent()
            }
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutsideNote);

        // clean up code 
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideNote);
        };
    },[noteRef,handleEditButtonsDisplay,handleSaveBtnDisplay])


  return (
    <div className='absoulate top-3 right-3 p-1'>
        <div className='w-6 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-red-400 z-0' onClick={handleEditButtonsDisplay}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <EditButtonsDiv id={id} notes={notes} setNotesData={setNotesData} isButtonsOn={isButtonsOn} 
        handleEditButtonsDisplay={handleEditButtonsDisplay} handleSaveBtnDisplay={handleSaveBtnDisplay} />
        <SaveEditedNoteBtn displaySaveBtn={displaySaveBtn} handleSaveBtnDisplay={handleSaveBtnDisplay} 
        handleSaveContent={handleSaveContent} />
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
const SaveEditedNoteBtn = ({displaySaveBtn,handleSaveBtnDisplay,handleSaveContent})=>{
    if(!displaySaveBtn){
        return null ;
    }

    const saveBtnClickHandler = ()=>{
        handleSaveContent(); // save content 
        handleSaveBtnDisplay()
    }

    return (
        <div className='bg-red-300 w-14 px-1 py-1 rounded-md z-10 absolute top-0 right-0'>
            <div className='cursor-pointer hover:bg-red-400 w-full px-2 rounded-md text-sm' onClick={saveBtnClickHandler}>Save</div>
        </div>
    )
}

export default EditButtons