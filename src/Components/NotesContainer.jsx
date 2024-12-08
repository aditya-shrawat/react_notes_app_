import React from 'react'
import Note from './Note'

const NotesContainer = () => {
  return (
    <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,_1fr))] '>
        <Note />
        <Note />
        <Note />
        <Note />
        
    </div>
  )
}

export default NotesContainer