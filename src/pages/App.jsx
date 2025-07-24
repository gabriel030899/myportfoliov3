import { React } from 'react'
import MyInfo from '../components/MyInfo'
import NavScreen from '../components/NavScreen'

function App() {

  return (
    <>
      <div className='w-screen h-screen p-3 bg-sky-950 flex'>
        <MyInfo />
        <NavScreen />
      </div>
      
    </>
  )
}

export default App
