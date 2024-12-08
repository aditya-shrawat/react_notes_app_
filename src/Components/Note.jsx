import React from 'react'

const Note = () => {
  return (
    <div className='bg-red-500 min-h-52 rounded-xl p-4 flex flex-col justify-between relative' >
        {/* <EditButtons /> */}
        <div>
            <h2 className='mb-1'>Note title haksdhfk </h2>
            <p>Note content ljhdf;lha sahdfash </p>
        </div>
        <div>
            <span>13/11/14 7:30</span>
        </div>
    </div>
  )
}

export default Note