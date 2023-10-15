import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import AppLayout from "./components/AppLayout";
import WorkPage from './work/WorkPage';
import Homework from './work/Homework';
import Homecontact from './Contact/Homecontact';




function App() {
  return (
    <div className="App">
       <BrowserRouter>
        {" "}
        <Routes>
          <Route index element={<AppLayout />} />
          <Route path="/Next" element={<Homework />} />
          <Route path='/contact' element ={<Homecontact/>}/>
         
        </Routes>
      </BrowserRouter>
    
     
   
    </div>
  );
}

export default App;
