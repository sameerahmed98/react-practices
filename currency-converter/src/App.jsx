import { useState, useEffect } from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [fromLabel, setFromLabel] = useState('from')
  const [toLabel, setToLabel] = useState('To')
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [amount, setAmount] = useState(1)
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  useEffect(() => {
    convert()
  }, [currencyInfo])

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}
      >
        <InputBox
          label={fromLabel}
          amount={amount}
          onAmonutChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
          defaultCurrency={from}
          allCurrencies={options}

        />
        <br/>
        <br/>
        <InputBox
          label={toLabel}
          amount={convertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}
          defaultCurrency={to}
          allCurrencies={options}

        />
<br/><br/>
        <button
        type='submit'
        >
          Convert Now
        </button>

      </form>
    </>
  )
}

export default App
