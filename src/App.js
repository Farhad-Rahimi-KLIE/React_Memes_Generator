import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home'
import Edit from './Components/Edit'

function App() {

  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
