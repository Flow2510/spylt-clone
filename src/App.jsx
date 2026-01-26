import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Cta from './components/cta/cta'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import { Info } from './components/info/info'
import Intro from './components/intro/intro'
import Map from './components/map/map'
import Media from './components/media/media'
import Products from './components/products/products'
import Loader from './components/loader/loader'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const valueRef = useRef(0);
  const elRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      valueRef.current += 1;

      if (elRef.current) {
        elRef.current.textContent = valueRef.current + "%";
      }

      if (valueRef.current >= 100) {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 33);

    return () => clearInterval(interval);
  }, []);

  if (isLoading)
    return <Loader elRef={elRef} />;

  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Products />
      <Info />
      <Cta />
      <Media />
      <Map />
      <Footer />
    </>
  )
}

export default App
