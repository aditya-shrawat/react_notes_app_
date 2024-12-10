import React, { useState } from 'react'
import Note from './Note'
import AddNoteBtn from './AddNoteBtn';
import Header from './Header';

const NotesContainer = () => {

  const [noteData,setData] = useState([]) ;

  const handleSave = (newTitle,newContent,newDate)=>{
    const newData = {
      title: newTitle,
      content:newContent,
      date:newDate,
    }
    setData((prevData)=>[...prevData,newData])
  }

  return (
    <div className='max-w-6xl m-auto'>
      <Header />
      <AddNoteBtn handleSave={handleSave} />
      <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] z-0 relative'>
          {noteData.map((note,index)=>(
            <Note key={index} title={note.title} content={note.content} date={note.date} />
          ))}
      </div>
    </div>
  )
}

export default NotesContainer