import axios from 'axios';
import { useParams, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Posting(){
    const [value, setValue] = useState('');
    const callnum = useParams().postnum;
    const home = useNavigate();
    useEffect(() => {axios.get(`/Board/postnum/${callnum}`)
    .then(result => {
        setValue(result.data);
    })}, []);

    return (
        <div>
            <header>
                <h2>{value[0]}</h2>
                writer : {value[2]}<br />
                <hr />
            </header>
            <main>
                <pre>
                    {value[1]}
                </pre>
                <br />
                time : {value[3]}
            </main>
            <footer>
                <button onClick={() => home("/Board/1")} >home</button>
            </footer>
        </div>
    );
}

function PostRoute(){
    return (
        <Routes>
            <Route path='/:postnum' element={<Posting />} />
        </Routes>
    );
}

export { Posting, PostRoute };