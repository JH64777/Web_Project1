// import axios from 'axios';

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

function Board(){
  const num = [1,2,3,4,5,6];

  const handleClick = e => {
    window.location = "http://localhost:3001/Board/Writing";
  }

    return (
        <div>
            <header>
                <h1>Board</h1>
                <hr />
            </header>
            <main>
                <LoadTitle numbers = {num}/>
                <button onClick={handleClick}>Write</button>
            </main>
        </div>
    );
}

export default Board;