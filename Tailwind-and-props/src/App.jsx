import Card from './components/card'
import imgJacket from './assets/classNameic-utility-jacket.jpg'
import imgHoodie from './assets/hoodie.jpg'
import imgShoe from './assets/nikeshoes.jpg'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-orange-400 text-black p-4 rounded-xl m-16'>Tailwind CSS and Props Basics</h1>
      <div className='m-12'>
        <Card productName = 'Denim Jacket' stockDetail = 'Out of stock' price = '50.99' imageSource = {imgJacket}/>
      </div>
      <div className='m-12'>
        <Card productName = 'Hoodie' stockDetail = 'In stock' price = '150.99' imageSource = {imgHoodie}/>
      </div>
      <div className='m-12'>
        <Card productName = 'Nike Shoes' stockDetail = 'Out of stock' price = '1950.99' imageSource = {imgShoe}/>
      </div>
    </>
  )
}

export default App
