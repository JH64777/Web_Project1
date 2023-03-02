import { Link } from 'react-router-dom';
function Main() {
  const box_style = { border : "1px solid", width : "250px" };
  const loginText = { fontSize : "13px", paddingLeft : "140px" };
  return (
    <div>
      <header>
        <h1>Hello Stranger!</h1>
        <hr />
      </header>
      <main>
       <p>
        Welcome to our site <br />
        This place has a lot of contents and bullet board!<br />
        You can use it like community!<br />
        </p>
        <h3>Have Fun!</h3>
        <div style={ box_style }>
          <h4>Here is our contents!</h4>
          <ol>
           <li><Link  to="/AI">AI Contents</Link></li>
           <li><Link to="/Board/1">bullet board</Link></li>
         </ol>
        </div>
        <Link to="/Login" style={ loginText }>You want to Login?</Link>
      </main>
    </div>
  );
}

export default Main;
