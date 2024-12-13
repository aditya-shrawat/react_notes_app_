import React, { useRef } from 'react'
import EditButtons from './EditButtons'

const Note = ({id,title,content,date,notes,setNotesData}) => {
  const noteRef = useRef(null) ; // reference for the whole Note
  const pTagRef = useRef(null); // reference for the p tag

  return (
    <div className='bg-[#F8F9FA]  dark:bg-[#2f2f2f] dark:text-white max-w-lg h-64 max-h-64 rounded-xl p-3 overflow-hidden flex flex-col justify-between relative hover:shadow-lg ' ref={noteRef} >
        < div className='absolute top-3 right-3'>
          <EditButtons id={id} notes={notes} setNotesData={setNotesData} pTagRef={pTagRef} noteRef={noteRef} />
        </div>
        <div className=' max-h-52 w-full'>
          <div className='w-full max-h-16'>
            <h2 className='mb-1 font-semibold text-xl break-words pr-9 '>{title.slice(0, 30)} </h2>
            <hr className='border-black mb-1 dark:border-white'/>
          </div>
          <div className='w-full overflow-auto max-h-32 md:max-h-40 '>
            <p className='text-lg break-words border-none outline-none' ref={pTagRef} >{content} </p>
          </div>
        </div>
        <div className='w-full h-6 bg-[#F8F9FA] dark:bg-[#2f2f2f] dark:text-white'>
            <span className='text-sm'>{date}</span>
        </div>
    </div>
  )
}

export default Note