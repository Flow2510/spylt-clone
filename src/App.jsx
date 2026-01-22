import './App.scss'
import Cta from './components/cta/cta'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import { Info } from './components/info/info'
import Intro from './components/intro/intro'
import Media from './components/media/media'
import Products from './components/products/products'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Products />
      <Info />
      <Cta />
      <Media />
    </>
  )
}

export default App
