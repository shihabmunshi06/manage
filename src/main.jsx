import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.jsx'
import "../src/a-sass/style.scss"

import Top from "../src/layout/1-Top/Top.jsx"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Top />
    <Routes>
      <Route index element={<App />} />
      <Route path='about' element={<App />} />
      <Route path='testimony' element={<App />} />
      <Route path='careers' element={<App />} />
      <Route path='community' element={<App />} />
    </Routes>
  </BrowserRouter>
)
