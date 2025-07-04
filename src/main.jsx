import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import AvePage from './views/2501981560/AvePage';



ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AvePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);