import React from 'react'
import './App.css'
import DragInput from './components/drag-input/DragInput'

const App = () => {
  const onFileChange = (files) => {
    console.log(files)
  }

  return (
    <div className='box'>
      <h2 className='header'>
        Drag<span className='header_span'>it.</span>
      </h2>
      <DragInput onFileChange={(files) => onFileChange(files)} />
    </div>
  )
}

export default App