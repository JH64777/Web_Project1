import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import AI from './pages/ai';
import Login from './pages/login';
import Account from './pages/account';
import BoardRoute from './pages/aboutBoard/ViewBoardList/route';
import Board from './pages/aboutBoard/ViewBoardList/board';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/AI" element={<AI />} />
        <Route path='/Board' element={<Board />} />
        <Route path="/Board/*" element={<BoardRoute />} /> {/* You can use dynamic parameter in URI using useParam() in Board.js*/}
        <Route path="/Login" element={<Login />} />
        <Route path="/Account" element={<Account />} />
        <Route path='*' element={<h1>Not Found 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
