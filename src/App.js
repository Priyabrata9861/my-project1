import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from './component/Layout';
import NoPage from './component/NoPage';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product'; 
import Contact from './component/Contact';
import Show from './component/Show'

import './App.css';

const App= () =>{
  return(
    <>

    <Show/>
    
    </>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="About" element={<About />} />
//         <Route path="Product" element={<Product />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="*" element={<NoPage />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>

  )
};
export default App;

