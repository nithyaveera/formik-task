import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavComp from './component/NavComp';
import Deshbord from './component/Deshbord';
import Add from './component/Add';
import EditComp from './component/EditComp';
import Currentbook from './component/Currentbook';
import Previousbook from './component/Previousbook';


const App = () => {
  let [id, setid] = useState(0)
  return (
    <div style={{ width: '98vw' }}>
      <BrowserRouter>
        <div className='row '>
          <div className='col-md-3' style={{ background:'#353148',color:'wheat'}}>
           <NavComp />
        </div>
          <div className='col-md-9' style={{ background: 'wheat'}}>
          <Routes>
              <Route path='/' element={<Deshbord setid={setid} /> } />
              <Route path='/create' element={<Add />} />
              <Route path='/edit/:id' element={<EditComp id={id} />} />
              <Route path='/cuurent' element={<Currentbook />} />
              <Route path='/previous' element={<Previousbook />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;