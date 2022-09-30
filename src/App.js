import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Section from "./Section";
import React,{useState} from 'react';




function App() {
  const [count,setCount] =useState(0);
  return (
    <div>
      <Navigation count={count} />
      <Header />
      <Section setCount={setCount}/>
      <Footer />
    </div>
  );
}

export default App;
