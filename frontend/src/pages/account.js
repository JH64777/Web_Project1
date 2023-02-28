import { useState, useRef } from 'react';
import axios from 'axios';
import Button from '../functions/BackButton';

function Account(){
    const [account, SetAccount] = useState({ user_id : '', user_password : '', user_nickname : '', Email : '' });
    const [Visible, SetVisible] = useState({visibility : "hidden"});
    const [Code, SetCode] = useState(''); // to Insert and identify Code is right.
    const ReceievedCode = useRef(''); // The Code will saved from Back
    const checkValueCode = useRef({"response" : false});
    const checkValueID = useRef({"response" : false}); // The identifing Clicking check box ID
    const checkValueNN = useRef({"response" : false}); // The identifing Clicking check box NickName

    const handleChangeID = e => { // when the ID value is changed
        SetAccount({ user_id: e.target.value, user_password: account.user_password, user_nickname : account.user_nickname, Email : account.Email });
        checkValueID.current = {"response" : false}; // For preventing hack
    }

    const handleChangePW = e => { // when the Password value is changed
        SetAccount({ user_id: account.user_id, user_password: e.target.value, user_nickname : account.user_nickname, Email : account.Email });
    }

    const handleChangeNN = e => { // when the Nickname value is changed
	    SetAccount({ user_id: account.user_id, user_password: account.user_password, user_nickname : e.target.value, Email : account.Email });
        checkValueNN.current = {"response" : false}; // For preventing hack
    }

    const handleChangeMail = e => {
        SetAccount({ user_id: account.user_id, user_password: account.user_password, user_nickname : account.user_nickname, Email : e.target.value });
    }

    const handleChangeCode = e => {
        SetCode(e.target.value);
    }

    const handleSubmitt = e => { // when submitt button is clicked
        if(account.user_id == '' || account.user_password == '' || account.user_nickname == '' || account.Email == '') // if empty id or password
        {
            alert("You Don't Insert Value id or password or nickname or email!");
        }
        else { // if inserted values in id and password
            if(checkValueID.current.response && checkValueNN.current.response && checkValueCode.current.response){ // if check box clicked and there is no problem
                const postInfo = { method : "Post", headers : {'content-type' : 'application/json'}, body : JSON.stringify(account) } // The inform of message
                fetch('http://localhost:3001/Account', postInfo) // send message
                .then(response => response.json())
                .then((data) => {
                    if(data.response == 'error') { // if error occured
                        alert("Please check your id or nickname!");
                    }
                    else { 
                        alert(data.response); // if code work well then alert "Well Done!"
                        window.location = "http://localhost:3001/Login"; // return to Login site
                     }
                });  
            }
            else { alert("Please Check your id or nickname or email!"); } // if check box no clicked
        }
        
    }

    const handleCheckID = e => {
        if(account.user_id == ''){ // if ID is empty
            alert("You didn't insert ID!");
        }
        else { // ID is inserted from user
            const postInfo = { method : "POST", headers : {'content-type' : 'application/json'}, body : JSON.stringify({"user_id" : account.user_id}) }; // HTTP message information
            fetch('http://localhost:3001/Account/Check', postInfo)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                if(data.response){
                    alert("You can use it!");
                    checkValueID.current = data;
                }
                else {
                    alert("There is same id. Please Change your ID!");
                }
            });
        }
    }

    const handleCheckNN = e => {
	    if(account.user_nickname == ''){
		    alert("You didn't insert Your nickname!");
	    }
        else{
	        const postInfo = { method : "POST", headers : {'content-type' : 'application/json'}, body : JSON.stringify({"user_nickname" : account.user_nickname}) };
	        fetch('http://localhost:3001/Account/CheckNick', postInfo)
	        .then(response => response.json())
            .then((data) => {
                if(data.response){
                    alert("You can use it!");
                    checkValueNN.current = data;
                }
                else{
                    alert("There is same NickName. Please Change your NickName!");
                }
            });
        }
    }

    const handleSendmail = e => {
        if(account.Email != '')
        {axios.post('/Account/SendMail', {Email : account.Email})
        .then((res) => {
            console.log(res.data.response);
            if(res.data.response)
            {
                alert("Well Done! Please Check Code in Your Email");
                SetVisible({ visibility : "visible" });
                ReceievedCode.current = res.data.code; // To identifing Code is right
            }
            else {
                alert("Please Check Your Email");
            }
        });}
        else{
            alert("Please Insert currect Email!");
        }
    }

    const handleCheckCode = e => {
        if(Code == ReceievedCode.current){
            alert("WelCome!");
            checkValueCode.current = {"response" : true};
        }
        else{
            alert("Please Check again your Code!");
        }
    }

    return (
        <div>
            <header>
                <h1>Account</h1>
                <hr />
            </header>
            <main>
                id<br />
                <input type="text" value={account.user_id} onChange={handleChangeID} /><button onClick={handleCheckID}>Check</button><br />
                password<br />
                <input type="password" value={account.user_password} onChange={handleChangePW} /><br />
	    	    nickname<br />
	    	    <input type="text" value={account.user_nickname} onChange={handleChangeNN} /><button onClick={handleCheckNN}>Check</button><br />
                E-mail<br />
                <input type="text" value={account.Email} onChange={handleChangeMail} /><button onClick={handleSendmail}>Sendmail</button>
                <div style={Visible}>
                    code<br />
                    <input type="text" value={Code} onChange={handleChangeCode} /><button onClick={handleCheckCode}>sendCode</button>
                </div>
                <br />
                <button onClick={handleSubmitt}>Submitt</button>
            </main>
            <footer>
                <Button path="/Login" name="login" /> 
            </footer>
        </div>
    );
}

export default Account;
