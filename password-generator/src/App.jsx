import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumbAllowed, setIsNumbAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [password, setPassword] = useState('')
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(isNumbAllowed) str += '1234567890'
    if(isCharAllowed) str += '!@#$%^&*()_+~{}|":?><'

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, isNumbAllowed, isCharAllowed, setPassword])

  const handleCopyDiv = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000);
  }

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='main-wrapper w-full text-white text-center flex justify-center h-screen items-center'>
        <div className='max-w-7xl w-full bg-gray-900 p-8 rounded'>
          <h1 className='text-2xl font-semibold'>Generate Your Strong Password</h1>

          <div className='fields mt-7 flex justify-center'>
            <input
              type='text'
              className='bg-transparent py-2 px-4 rounded-l-lg border-slate-500 border-2 w-1/3'
              value={password}
              readOnly
              ref={passRef}
            />
            <button
            className='bg-teal-600 py-3 px-6 rounded-r-lg hover:bg-teal-800 transition'
            onClick={() => {
              copyPasswordToClipboard()
              handleCopyDiv()
            }}
            >
              Copy
            </button>
          </div>

          <div className='other-inputs flex justify-center gap-20'>
            <div className='flex flex-col-reverse'>
              <input
                type='range'
                min='8'
                max='40'
                value={length}
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label>
                Character Range is: ({length})
              </label>
            </div>
            <div className='checkboxes flex justify-center gap-5'>
              <div className='flex gap-2 items-center'>
                <input
                  type='checkbox'
                  defaultValue={isNumbAllowed}
                  onChange={() => {setIsNumbAllowed((prev) => !prev)}}
                />
                <label>Numbers</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input
                  type='checkbox'
                  defaultValue={isCharAllowed}
                  onChange={() => {setIsCharAllowed((prev) => !prev)}}
                />
                <label>Characters</label>
              </div>
            </div>
          </div>

          {isCopied && (
            <div className='sucess-message bg-green-500 py-2 px-8 w-fit rounded inline-block mt-5'>
              <p>Copied</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
