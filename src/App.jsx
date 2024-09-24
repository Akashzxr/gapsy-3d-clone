import React, { Suspense, useRef } from 'react';
import ModelCanvas from './components/Newmodel';
import Header from './components/Header';
import Footer from './components/Footer';
import RespomsiveCanvas from './components/ResponsiveModel';


function App() {
  const ref = useRef();
  return (
    <>
    <div className='font-neuemontreal'>
     <Header/>
     <ModelCanvas/>
     {/* <RespomsiveCanvas/> */}
     <Footer/>
     </div>
    </>
  )
}

export default App
