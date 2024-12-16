// import React from 'react'
// import Header from './layout/Header'
// import Footer from './layout/Footer'
// import LangButton from './layout/LangButton'
// import Gallery from './components/Gallery'
// import Auth from './components/Auth'

// const App = () => {
//   return (
   
//     <>
//       <Header />
//       <main>
//         <Gallery/>
//         <Auth/>
//       </main>
//       <Footer />
//       <LangButton/>
//     </>
//   )
// }


// export default App
import React from 'react'
import Gal from './components/Gal'
import SampleHeader from "./layout/SampleHeader"
import SampleGal from './components/SampleGal'


const App = () => {
  return (
    <>
    <SampleHeader/>
      <main>
      <SampleGal/>
      </main>
    </>
  )
}
        
export default App
        

