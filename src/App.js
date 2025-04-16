import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import VistaTecnico from './VistaTecnico';
import MainPanel from './MainPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Página de inicio</h1>} />
          <Route path="/acerca" element={<h1>Página de Acerca de</h1>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/VistaTecnico" element={<VistaTecnico/>} />
          <Route path="/MainPanel" element={<MainPanel/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;