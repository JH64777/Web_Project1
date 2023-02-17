import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Routes, Route} from "react-router-dom";
import Posting from './writing';
//<Link to="/Game">Game</Link>
function LoadTitle(props)
{
  
  const numbers = props.numbers
  let index = numbers.map((numbers) => <li key={numbers.toString()}>{numbers * numbers}</li>);
  /* () => 13; == () => { return 13; } I didn't know This */
  
  return (
    <ul>
      {index}
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
      <Link to={"/Writing"}>Hello</Link>
    </ul>
  );
}

function Board(){
  const num = [1,2,3,4,5,6];
  const id = useParams();
  const navigation = useNavigate();
  console.log(id);

    return (
        <div>
            <header>
                <h1>Board</h1>
                <hr />
            </header>
            <main>
                <LoadTitle numbers = {num}/>
                <button onClick={()=>navigation('/Writing')}>Write</button>
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
    </Routes>
  );
}

export {BoardRoute, Board};