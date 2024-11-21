import { useState } from 'react'


import Routine from './components/Routine'
import Demo from './components/Demo'
import Routine2 from './components/Routine2'

function App() {
  

  return (
    <>
    <div className='p-[50px] '>
    <Routine />
    <Demo />
    <Routine2 />
    </div>
    </>
  )
}

export default App
