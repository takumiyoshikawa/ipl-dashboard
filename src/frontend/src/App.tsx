import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { TeamPage } from './pages/teamPage';
import { MatchPage } from './pages/matchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='team/:teamName' element={<TeamPage />} />
          <Route path='team/:teamName/matches/:year' element={<MatchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
