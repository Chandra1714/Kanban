import { useState } from 'react'
import { BoardProvider } from './BoardContext'
import Boards from './components/Boards'



function App() {

  return (
    <>
    <BoardProvider>
      <Boards/>
      </BoardProvider>
    </>
  )
}

export default App
