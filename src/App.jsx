import React from "react";
import Header from "./components2/Header"
import Gallery from "./components2/Gallery"
import Detail from "./components2/Detail"
import Input from "./components2/Input"
// import Reason from "./components/Reason";
// import Poster from "./components/Poster";
// import FAQ from "./components/FAQ";
// import LB from "./components/LB";
import Poster from "./components2/Poster";
import Reason from "./components2/Reason";

const App = () => {


  return (
    <div>
      <Header/>
      <Gallery/>
      <Input/>
      <Detail/>
      <Poster/>
      <Poster/>
      {/* <Poster/>   */}
      <Reason/>
      {/* <FAQ/>
      <LB/>  */}
    </div>
  );
}

export default App;



