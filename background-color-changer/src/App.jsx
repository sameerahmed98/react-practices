import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#000')

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='button-wrapper fixed bottom-10 w-full flex justify-center'>
        <div className='all-buttons flex gap-3 bg-white py-4 px-10 inline-block rounded-xl'>
          <button
          style={{backgroundColor: 'red'}}
          className='px-8 py-2 text-white rounded-lg'
          onClick={() => {setColor('red')}}
          >
            Red
          </button>
          <button
          style={{backgroundColor: 'green'}}
          className='px-8 py-2 text-white rounded-lg'
          onClick={() => {setColor('green')}}
          >
            Green
          </button>
          <button
          style={{backgroundColor: 'blue'}}
          className='px-8 py-2 text-white rounded-lg'
          onClick={() => {setColor('blue')}}
          >
            Blue
          </button>
          <button
          style={{backgroundColor: 'olive'}}
          className='px-8 py-2 text-white rounded-lg'
          onClick={() => {setColor('olive')}}
          >
            Olive
          </button>
          <button
          style={{backgroundColor: 'orange'}}
          className='px-8 py-2 text-white rounded-lg'
          onClick={() => {setColor('orange')}}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
