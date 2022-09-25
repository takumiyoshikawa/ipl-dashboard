import React from 'react';
import './App.scss';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { TeamPage } from './pages/teamPage';
import { MatchPage } from './pages/matchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='team/:teamName' element={<TeamPage />} />
          <Route path='team/:teamName/matches/:year' element={<MatchPage />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
