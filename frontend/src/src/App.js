import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Game from './pages/game';
import AI from './pages/ai';
import Board from './pages/board';
import Login from './pages/login';
import Account from './pages/account';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/AI" element={<AI />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Account" element={<Account />}/>
      </Routes>
    </div>
  );
}

export default App;
