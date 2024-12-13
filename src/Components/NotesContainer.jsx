import React from 'react'
import Note from './Note'

const NotesContainer = ({noteData,setData}) => {

  return (
    <div className=''>
      <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] z-0 relative'>
          {noteData.map((note,index)=>(
            <Note key={note.id} id={note.id} title={note.title} content={note.content} date={note.date} notes={noteData} setNotesData={setData} />
          ))}
      </div>
    </div>
  )
}

export default NotesContainer