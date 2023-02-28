import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  export default LoadBottomNav;