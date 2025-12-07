import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { FoodApp } from './FoodApp';
import './style.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
     <FoodApp />
   </BrowserRouter>
  </StrictMode>
)
