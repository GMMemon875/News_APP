// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Navbar from './Componanat/Navbar';
import Home from './Componanat/Home';
import Footer from './Componanat/Footer';
import FatchData from './Componanat/FatchData';
import Hero from './Componanat/Hero';

function App() {
  return (
    <> 
    <BrowserRouter>
         <Navbar />
         <Hero />

    <Routes>

      <Route  path='/home' element={<Home />}></Route>
      <Route  path='/business' element={< FatchData cat="business"/>}></Route>
      <Route  path='/general' element={< FatchData cat="general"/>}></Route>
      <Route  path='/sports' element={< FatchData cat="sports"/>}></Route>
      <Route  path='/health' element={< FatchData cat="health"/>}></Route>
      <Route  path='/science' element={< FatchData cat="science"/>}></Route>
      <Route  path='/technology' element={< FatchData cat="technology"/>}></Route>
      <Route  path='/entertainment' element={< FatchData cat="entertainment"/>}></Route>
       


      

       
    </Routes> 
    <Footer />
    
    </BrowserRouter>
    
 

    </>


   
 
  );
}

export default App;
