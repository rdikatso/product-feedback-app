// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './css/App.css'
import { DesktopSuggestions } from './components/DesktopSuggestions';
import { data } from './data.js';


function App() {

  return (
      <div className="App">
        <DesktopSuggestions />
      </div>
  )
}
export default App