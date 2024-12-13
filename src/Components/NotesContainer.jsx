import React, { useState } from 'react'
import Note from './Note'

const NotesContainer = ({noteData,setData,searchedNotes}) => {

  const notesToRender = searchedNotes.length !== 0 ? searchedNotes : noteData;

  return (
    <div className=''>
      <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] z-0 relative'>
          {notesToRender.map((note)=>(
            <Note key={note.id} id={note.id} title={note.title} content={note.content} date={note.date} notes={noteData} setNotesData={setData} />
          ))}
      </div>
    </div>
  )
}

export default NotesContainer