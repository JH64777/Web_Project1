import { useState } from "react";
import axios from "axios";

const GetDate = () => { // making Time
    const a = new Date();
    return `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`;
}

const GetCode = (name, time) => { // The code for recovering post we need to fix that
    const code = name + time;
    return code;
}

function PostingMain(){ // This contains the functions of inserting data from user and submit data to Backend
    const [textgroup, SetText] = useState({ title : '', contents : '' }); // The contents of Post
    const ContentStyle = { 'width' : '500px', 'height' : '300px', 'resize' : 'none' };
    const TitleStyle = { 'width' : '500px' };

    const handleTitle = e => { // When inserted data in title box
        SetText({ title : e.target.value, contents : textgroup.contents});
    }

    const handleContents = e => { // When inserted data in Contents box
        SetText({title : textgroup.title, contents : e.target.value});
    }

    const handleSubmit = e => { // When submit button Clicked then send result to backend
        let data = { time : GetDate(), name : "tester"};
        let code = { num : GetCode(data.name, data.time) };
        data = Object.assign(data, textgroup, code); // combine two objects
        console.log(data); // well done
        if(!(textgroup.contents == '' || textgroup.title == ''))
        {
            axios.post('/Board/Posting', data)
            .then(res => alert(res.data["response"]));
        } 
        else {
            alert("Fill data in title and contents!");
        }
    }

    return(
        <div>
            title<br />
            <input type="text" style={TitleStyle} maxLength="50" onChange={handleTitle} value={textgroup.title}/><br />
            Contents<br />
            <textarea style={ContentStyle} onChange={handleContents} value={textgroup.contents}></textarea><br/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}

function Posting(){
    return (
        <div>
            <header>
                <h1>Write Your Posting!</h1>
                <hr />
            </header>
            <main>
                <PostingMain />
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default Posting;