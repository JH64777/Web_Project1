import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Routes, Route} from "react-router-dom";
import Posting from './writing';
function LoadTitle()
{
  const [title, SetTitle] = useState('');
  const indexValue = useParams().id;

  useEffect(() => {
    axios.get('/Board/index', {
      params : { index : indexValue } // ?index=indexValue
    })
    .then((result) => {
      SetTitle(result);
      console.log(result);
    })
    .catch((err) => alert(err));
  }, []);

  return (
    <ul>
      <h1>Hello</h1>
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
      for(let i = 1; i <= Math.ceil(50 / 5); i++)
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
      <Route path=':id' element={<Board />} />
      <Route path='Writing' element={<Posting />} />
    </Routes>
  );
}

export {Board, BoardRoute};