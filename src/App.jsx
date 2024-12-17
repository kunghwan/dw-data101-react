import React from "react";
import Poster from "./components/Poster";
import Header from "./components2/Header"
import Gallery from "./components2/Gallery"
import Detail from "./components2/Detail"
import Input from "./components2/Input"
import Reason from "./components/Reason";


const App = () => {


  return (
    <div>
      <Header/>
      <Gallery/>
      <Input/>
      <Detail/>
      <Poster/>
      <Poster/>
      <Reason/>
     
    </div>
  );
}

export default App;



