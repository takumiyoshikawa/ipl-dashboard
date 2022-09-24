import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { TeamPage } from './pages/teamPage';
import { MatchPage } from './pages/matchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>hello world</h1>} />
        <Route path='team/:teamName' element={<TeamPage />} />
        <Route path='team/:teamName/matches/:year' element={<MatchPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
