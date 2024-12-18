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
    <div className='w-screen h-screen flex justify-center items-center z-10 fixed top-0 left-0 bg-black bg-opacity-25 backdrop-blur-sm ' >
        <form onSubmit={saveHandler} className='min-w-80 h-auto flex flex-col bg-[#eff1f3] border-2 border-[#DEE2E6] dark:border-[#4a4b4b] dark:bg-[#272727] dark:text-white p-4 py-6 rounded-lg '>
            <label className='text-lg font-semibold mb-1'>Title</label>
            <input type="text" name="inputTitle" placeholder='Enter Note title' className='px-2 py-1  outline-none rounded-lg dark:text-white text-lg mb-5 border-2 border-[#DEE2E6] dark:bg-[#353535] dark:border-[#4a4b4b]' />
            <label className='text-lg font-semibold mb-1 dark:text-white'>Note Content</label>
            <textarea type='text' name="inputContent"  placeholder='Enter note content' rows={5} className='max-w-full  px-2 py-1  outline-none resize-none rounded-lg dark:text-white text-lg mb-3 border-2 border-[#DEE2E6] dark:bg-[#353535] dark:border-[#4a4b4b]'></textarea>
            <div className='w-full h-auto mt-3 flex justify-evenly'>
                <button type='submit' className='w-24 h-10 text-xl font-semibold rounded-lg cursor-pointer bg-[#f9c74f] text-white'>Save</button>
                <button type='button' onClick={clickHandler} className='w-24 h-10 text-xl font-semibold rounded-lg cursor-pointer bg-[#f9c74f] text-white'>Cancle</button>
            </div>
        </form>
    </div>
  )
}

export default AddNotePopup