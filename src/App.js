import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './componentes/index';
import Dicas from './componentes/dicas';
import Candidaturas from './componentes/candidaturas';
import Mentorias from './componentes/mentorias';
import Header from './componentes/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/candidaturas' element={<Candidaturas />} />
          <Route path='/dicas' element={<Dicas />} />
          <Route path='/mentorias' element={<Mentorias />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
