import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import LangButton from './layout/LangButton'
import Gallery from './components/Gallery'
import Auth from './components/Auth'

const App = () => {
  return (
   
    <>
      <Header />
      <main>
        <Gallery/>
        <Auth/>
      </main>
      <Footer />
      <LangButton/>
    </>
  )
}


export default App
