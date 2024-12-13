import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = ({noteData,searchText,setSearchText,setSearchedNotes,toggleDarkMode}) => {

  const handleSearch = ()=>{
    if(searchText.trim()===''){
      return ;
    }
    const filteredNotes = noteData.filter((note)=>{
      if((note.title.toLowerCase().includes(searchText.toLowerCase())) || (note.content.toLowerCase().includes(searchText.toLowerCase())) ){
        return note ;
      }
    })

    setSearchedNotes(filteredNotes) ;
  }
  // 3c3d3e
  return (
     <div className='mb-5 '>
        <div className='flex justify-between p-2 mb-1 text-2xl font-semibold'>
            <h1 className='font-serif dark:text-white'>StickyNotes</h1>
            <FontAwesomeIcon onClick={toggleDarkMode} icon={faCircleHalfStroke} className='cursor-pointer hover:scale-105 dark:text-white ' />
        </div>
        <div className='bg-[#e8eaed] dark:bg-[#2f2f2f] dark:text-white w-full px-3 py-2 text-lg flex items-center border-2 border-[#DEE2E6] dark:border-[#4a4b4b] rounded-xl'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder='Search' className='bg-transparent w-full px-2 border-none outline-none mx-1' />
            <button onClick={handleSearch} className='bg-[#f9c74f] px-2 rounded-lg font-semibold text-lg text-white '>Search</button>
        </div>
     </div>
  )
}

export default Header