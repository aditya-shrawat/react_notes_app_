import React from 'react'
import NotesContainer from './Components/NotesContainer'
import AddNoteBtn from './Components/AddNoteBtn'
import Header from './Components/Header'

const App = () => {
  return (
    <div className=' p-6 relative'>
      <Header />
      <NotesContainer />
      <AddNoteBtn />
    </div>
  )
}

export default App