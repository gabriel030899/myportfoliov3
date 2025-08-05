import { React } from 'react'
import MyInfo from '../components/MyInfo'
import NavScreen from '../components/NavScreen'

function App() {

  return (
    <>
      <div className='w-screen h-screen p-3 bg-gray-900 flex gap-2'>
        <MyInfo />
        <NavScreen />
      </div>
      
    </>
  )
}

export default App
