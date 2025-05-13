import { useState } from 'react'

import './App.css'
import Tasklist from './components/Tasklistpage'
import CreateTasklist from './components/Createtasklist';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';


function App() {
  
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Tasklist/>} />
        <Route path="/new-task-list" element={<CreateTasklist />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
