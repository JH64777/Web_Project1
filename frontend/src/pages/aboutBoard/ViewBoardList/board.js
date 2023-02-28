import LoadTitle from "./LoadTitles";
import LoadBottomNav from "./BottomNav";
import Button from '../../../functions/BackButton';

function Board(){
    return (
        <div>
            <header>
                <h1>Board</h1>
                <hr />
            </header>
            <main>
                <LoadTitle />
                <Button path="/Board/Writing" name="Write" />
                <Button path="/" name="home" />
            </main>
            <footer>
              <LoadBottomNav />
            </footer>
        </div>
    );
}

export default Board;