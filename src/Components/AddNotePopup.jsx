import React, { useState } from 'react'

const AddNotePopup = ({ isPopUpOn, clickHandler, handleSave }) => {

    if (!isPopUpOn) {
        return null ;
    }

    const saveHandler = (e)=>{
        e.preventDefault();
        const title = e.target.elements.inputTitle ;
        const content = e.target.elements.inputContent ;
        const now = new Date()
        const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

        if(title.value.trim() || content.value.trim()){
            handleSave(title.value,content.value,date) ;
        }
        else{
            console.log("enter note title")
            alert("Enter Note title or content")
        }
        clickHandler()
    }

  return (
    <div className='w-screen h-screen flex justify-center items-center z-10 fixed top-0 left-0 bg-black bg-opacity-30 backdrop-blur-sm ' >
        <form onSubmit={saveHandler} className='min-w-80 h-auto flex flex-col bg-green-200 p-4 py-6 rounded-lg '>
            <label className='text-lg font-semibold mb-1'>Title</label>
            <input type="text" name="inputTitle" placeholder='Enter Note title' className='px-2 py-1 border-none outline-none rounded-lg text-lg mb-5' />
            <label className='text-lg font-semibold mb-1'>Note Content</label>
            <textarea type='text' name="inputContent"  placeholder='Enter note content' rows={5} className='max-w-full  px-2 py-1 border-none outline-none resize-none rounded-lg text-lg mb-3'></textarea>
            <div className='w-full h-auto mt-3 flex justify-evenly'>
                <button type='submit' className='w-24 h-10 text-xl font-semibold rounded-lg cursor-pointer bg-yellow-200'>Save</button>
                <button type='button' onClick={clickHandler} className='w-24 h-10 text-xl font-semibold rounded-lg cursor-pointer bg-yellow-200'>Cancle</button>
            </div>
        </form>
    </div>
  )
}

export default AddNotePopup