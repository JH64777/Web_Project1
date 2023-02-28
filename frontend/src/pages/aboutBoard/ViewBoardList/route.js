import { Routes, Route } from 'react-router-dom';
import Board from './board';
import Write from '../WriteBoard/writing';
import PostRoute from '../ViewPosting/route';

function BoardRoute(){
    return (
      <Routes>
        <Route path='/:id' element={<Board />} />
        <Route path='/:id/*' element={<PostRoute />} />
        <Route path='/Writing' element={<Write />} />
      </Routes>
    );
  }
export default BoardRoute;