import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../components/App.js'
import Breeds from "../components/Breeds.js"
import Cats from "../components/Cats.js"
 
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})