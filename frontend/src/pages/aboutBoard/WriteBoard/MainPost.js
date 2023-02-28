import { useState } from "react";
import axios from "axios";
import { now } from '../../../functions/time';
import { useNavigate } from 'react-router-dom';
import GetCode from './makeCode';

function PostingMain(){ // This contains the functions of inserting data from user and submit data to Backend
    const [textgroup, SetText] = useState({ title : '', contents : '' }); // The contents of Post
    const BackToBoard = useNavigate();
    const ContentStyle = { 'width' : '500px', 'height' : '300px', 'resize' : 'none' };
    const TitleStyle = { 'width' : '500px' };

    const handleTitle = e => { // When inserted data in title box
        SetText({ title : e.target.value, contents : textgroup.contents});
    }

    const handleContents = e => { // When inserted data in Contents box
        SetText({title : textgroup.title, contents : e.target.value});
    }

    const handleSubmit = e => { // When submit button Clicked then send result to backend
        let data = { time : now, writer : "tester"};
        let code = { codenum : GetCode(data.writer, data.time) };
        data = Object.assign(data, textgroup, code); // combine two objects
        if(!(textgroup.contents == '' || textgroup.title == ''))
        {
            axios.post('/Board/Posting', data)
            .then(res => alert(res.data["response"]))
            .then(() => BackToBoard("/Board/1"));
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

export default PostingMain;