import './App.scss'
import Cta from './components/cta/cta'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import { Info } from './components/info/info'
import Products from './components/products/products'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Cta />
      <Products />
      <Info />
    </>
  )
}

export default App
