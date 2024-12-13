import React, { useEffect, useState } from 'react'
import NotesContainer from './Components/NotesContainer'
import AddNoteBtn from './Components/AddNoteBtn'
import Header from './Components/Header'

const App = () => {

  const [noteData,setData] = useState([]) ;
  const [Id,setId] = useState(1) ;
  const [searchText,setSearchText] = useState('') ;
  const [searchedNotes,setSearchedNotes] = useState([]) ;

  // retriving data from local Storage and seting it to noteData
  useEffect(() => {
    const savedNotes = localStorage.getItem("storedNotes");
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);

      const orderedNotes = parsedNotes.map((note) => ({
        id: note.id,
        title: note.title,  
        content: note.content,
        date: note.date ,
      }));
      setData(orderedNotes); 
      // setting id after the last id and i added some random num to id 
      let lastIdx = noteData.length ;
      lastIdx += Math.random();
      setId(lastIdx + 1);
    }
  }, []);
  

  // when new note get created this fxn will create new note
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

  // storing the noteData in local storage whenerever it get updated or changed
  useEffect(()=>{
    if(noteData.length >0){
      localStorage.setItem("storedNotes",JSON.stringify(noteData)) ;
    }
  },[noteData])

  return (
    <div className='min-w-screen min-h-screen bg-[#eff1f3] '>
      <div className=' p-4 max-w-6xl min-h-screen m-auto '>
        <Header noteData={noteData} searchText={searchText} setSearchText={setSearchText} setSearchedNotes={setSearchedNotes} />
        <NotesContainer noteData={noteData} setData={setData} searchedNotes={searchedNotes} />
        <AddNoteBtn handleSave={handleSave} />
      </div>
    </div>
  )
}

export default App