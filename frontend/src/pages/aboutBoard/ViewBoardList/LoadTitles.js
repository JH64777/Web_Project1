import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function LoadTitle()
{
  const [title, SetTitle] = useState('');
  let id = useParams().id;
  id = id === undefined ? 1 : id;
  
  const linkStyle = { "text-decoration" : "none", "color" : "Black" };

    useEffect(() => {
    axios.get(`/Board/index/${id}`)
    .then((result) => {
      let list = [];
      for(let i = 0 ; i < result.data.length; i++){
        list.push(<li key={i}><Link to={`/Board/${id}/${result.data[i].num}`} style={linkStyle}>{result.data[i].title}</Link></li>);
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

export default LoadTitle;