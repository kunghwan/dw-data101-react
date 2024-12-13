import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import LangButton from './layout/LangButton'
import Gallery from './components/Gallery'

const App = () => {
  return (
   
    <>
      <Header />
      <main>
        <Gallery/>
      </main>
      <Footer />
      <LangButton/>
    </>
  )
}


export default App
