import React, { useRef } from 'react'
import EditButtons from './EditButtons'

const Note = ({id,title,content,date,notes,setNotesData}) => {
  const noteRef = useRef(null) ; // reference for the whole Note
  const pTagRef = useRef(null); // reference for the p tag

  return (
    <div className='bg-red-500 max-w-lg h-64 rounded-xl p-3 overflow-hidden flex flex-col justify-between relative' ref={noteRef} >
        < div className='absolute top-3 right-3'>
          <EditButtons id={id} notes={notes} setNotesData={setNotesData} pTagRef={pTagRef} noteRef={noteRef} />
        </div>
        <div>
            <h2 className='mb-1 font-semibold text-xl'>{title} </h2>
            <hr className='border-black mb-1'/>
            <p className='text-lg break-words z-0 border-none outline-none' ref={pTagRef} >{content} </p>
        </div>
        <div className='w-full z-10 bg-red-500'>
            <span className='text-sm'>{date}</span>
        </div>
    </div>
  )
}

export default Note