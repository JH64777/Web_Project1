import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Routes, Route} from "react-router-dom";
import Write from './writing';
import {Posting, PostRoute} from './posting';

function LoadTitle()
{
  const [title, SetTitle] = useState('');
  const id = useParams().id;
    useEffect(() => {
    axios.get(`/Board/index/${id}`)
    .then((result) => {
      let list = [];
      for(let i = 0 ; i < result.data.length; i++){
        list.push(<li key={i}><Link to={`/Board/${id}/${result.data[i].num}`}>{result.data[i].title}</Link></li>);
      }
      return list;
    })
    .then(Title => SetTitle(Title))
    .catch((err) => alert(err));}, [id]); // useEffect run callback function when Being rendered
    // parameter id is checking that value is same thing when rendering is done if value is same then callback is not run but not same thing then run callback function

  return (
    <ul>
      {title}
    </ul>
  );
}

// 100 / 5 = 20 1 ~ 20 

function LoadBottomNav(){
  const style = {
    display : "inline",
    margin : "10px"
  };
  const [List, SetList] = useState("");

  useEffect(() =>{ // useEffect prevent rerendering so I use it.
    axios.post("/Board/Count",{ request : 123 })
    .then((result) => {
      let ls = [];
      for(let i = 1; i <= Math.ceil(result.data / 5); i++)
      {
        ls.push(<li style={style}><Link to={`/Board/${i}`}>{i}</Link></li>);
      }
      return ls;
    })
    .then((result) => SetList(result));
  }, []);
  
  return(
    <ul>
      {List}
    </ul>
  );
}

function Board(){
  const navigation = useNavigate();
    return (
        <div>
            <header>
                <h1>Board</h1>
                <hr />
            </header>
            <main>
                <LoadTitle />
                <button onClick={()=>navigation('/Board/Writing')}>Write</button>
            </main>
            <footer>
              <LoadBottomNav />
            </footer>
        </div>
    );
}

function BoardRoute(){
  return (
    <Routes>
      <Route path='/:id' element={<Board />} />
      <Route path='/:id/*' element={<PostRoute />} />
      <Route path='/Writing' element={<Write />} />
    </Routes>
  );
}

export {Board, BoardRoute};