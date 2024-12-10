import React, { useState } from 'react'
import Note from './Note'
import AddNoteBtn from './AddNoteBtn';
import Header from './Header';

const NotesContainer = () => {

  const [noteData,setData] = useState([]) ;
  const [Id,setId] = useState(1) ;

  const handleSave = (newTitle,newContent,newDate)=>{
    const newData = {
      id: Id,
      title: newTitle,
      content:newContent,
      date:newDate,
    }
    setData((prevData)=>[...prevData,newData])
    setId((prevId)=>prevId+1) ;
  }

  return (
    <div className='max-w-6xl m-auto'>
      <Header />
      <AddNoteBtn handleSave={handleSave} />
      <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] z-0 relative'>
          {noteData.map((note,index)=>(
            <Note key={index} id={note.id} title={note.title} content={note.content} date={note.date} notes={noteData} setNotesData={setData} />
          ))}
      </div>
    </div>
  )
}

export default NotesContainer