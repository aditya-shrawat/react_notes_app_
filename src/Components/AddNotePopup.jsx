import React from 'react'

const AddNotePopup = ({ isPopUpOn, clickHandler }) => {

    if (!isPopUpOn) {
        return null ;
    }

  return (
    <div className='w-screen h-screen flex justify-center items-center z-10 fixed top-0 left-0 bg-black bg-opacity-30 backdrop-blur-sm ' >
        <div className='min-w-72 h-auto flex flex-col bg-green-200 p-4 py-6 rounded-lg '>
            <span className='text-lg font-semibold mb-1'>Title</span>
            <input type="text" name="" id="" placeholder='Enter Note title' className='px-2 py-1 border-none outline-none rounded-lg text-lg mb-5' />
            <span className='text-lg font-semibold mb-1'>Note Content</span>
            <textarea name="" id="" placeholder='Enter note content' className='max-w-full h-24 max-h-24 px-2 py-1 border-none outline-none rounded-lg text-lg mb-3'></textarea>
            <div className='w-full h-auto mt-3 flex justify-evenly'>
                <button className='px-6 py-1 text-xl font-semibold rounded-lg cursor-pointer bg-yellow-200'>Save</button>
                <button onClick={clickHandler} className='px-6 py-1 text-xl font-semibold rounded-lg cursor-pointer bg-yellow-200'>Cancle</button>
            </div>
        </div>
    </div>
  )
}

export default AddNotePopup