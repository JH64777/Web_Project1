import { Routes, Route } from 'react-router-dom';
import Posting from './posting';

function PostRoute(){
    return (
        <Routes>
            <Route path='/:postnum' element={<Posting />} />
        </Routes>
    );
}

export default PostRoute;