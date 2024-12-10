import React from 'react'
import EditButtons from './EditButtons'

const Note = ({id,title,content,date,notes,setNotesData}) => {
  return (
    <div className='bg-red-500 max-w-lg h-64 rounded-xl p-3 overflow-hidden flex flex-col justify-between relative' >
        < div className='absolute top-3 right-3'>
          <EditButtons id={id} notes={notes} setNotesData={setNotesData} />
        </div>
        <div>
            <h2 className='mb-1 font-semibold text-xl'>{title} </h2>
            <hr className='border-black mb-1'/>
            <p className='text-lg break-words z-0'>{content} </p>
        </div>
        <div className='w-full z-10 bg-red-500'>
            <span className='text-sm'>{date}</span>
        </div>
    </div>
  )
}

export default Note