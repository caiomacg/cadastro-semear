import React from 'react';
import ReactDOM from 'react-dom/client';
import Formulario from './components/Form';
import Footer from './components/Footer';

import './components/Form.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Formulario />
    <Footer />
  </React.StrictMode>
);


