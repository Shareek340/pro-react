import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import AppLayout from "./components/AppLayout";
import WorkPage from './work/WorkPage';
import Homework from './work/Homework';




function App() {
  return (
    <div className="App">
       <BrowserRouter>
        {" "}
        <Routes>
          <Route index element={<AppLayout />} />
          <Route path="/Next" element={<Homework />} />
         
        </Routes>
      </BrowserRouter>
    
     
   
    </div>
  );
}

export default App;
