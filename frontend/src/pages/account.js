import { useState, useRef } from 'react';
function Account(){
    const [account, SetAccount] = useState({ id : '', password : '', nickname : '' });
    const checkValueID = useRef({"response" : false}); // The identifing Clicking check box ID
    const checkValueNN = useRef({"response" : false}); // The identifing Clicking check box NickName

    const handleChangeID = e => { // when the ID value is changed
        SetAccount({ id: e.target.value, password: account.password, nickname : account.nickname });
        checkValueID.current = {"response" : false}; // For preventing hack
    }

    const handleChangePW = e => { // when the Password value is changed
        SetAccount({ id: account.id, password: e.target.value, nickname : account.nickname });
    }

    const handleChangeNN = e => { // when the Nickname value is changed
	    SetAccount({ id: account.id, password: account.password, nickname : e.target.value });
        checkValueNN.current = {"response" : false}; // For preventing hack
    }

    const handleSubmitt = e => { // when submitt button is clicked
        if(account.id == '' || account.password == '' || account.nickname == '') // if empty id or password
        {
            alert("You Don't Insert Value id or password or nickname!");
        }
        else { // if inserted values in id and password
            if(checkValueID.current.response && checkValueNN.current.response){ // if check box clicked and there is no problem
                const postInfo = { method : "Post", headers : {'content-type' : 'application/json'}, body : JSON.stringify(account) } // The inform of message
                fetch('http://localhost:3001/Account', postInfo) // send message
                .then(response => response.json())
                .then((data) => {
                    if(data.response == 'error') { // if error occured
                        alert("Please check your id or nickname!");
                    }
                    else { 
                        alert(data.response); // if code work well then alert "Well Done!"
                        window.location = "http://localhost:3001/Login";
                     }
                });  
            }
            else { alert("Please Check your id or nickname!"); } // if check box no clicked
        }
        
    }

    const handleCheckID = e => {
        if(account.id == ''){ // if ID is empty
            alert("You didn't insert ID!");
        }
        else { // ID is inserted from user
            const postInfo = { method : "POST", headers : {'content-type' : 'application/json'}, body : JSON.stringify(account) }; // HTTP message information
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
	    if(account.nickname == ''){
		    alert("You didn't insert Your nickname!");
	    }
        else{
	        const postInfo = { method : "POST", headers : {'content-type' : 'application/json'}, body : JSON.stringify(account) };
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

    return (
        <div>
            <header>
                <h1>Account</h1>
                <hr />
            </header>
            <main>
                id<br />
                <input type="text" value={account.id} onChange={handleChangeID} /><button onClick={handleCheckID}>Check</button><br />
                password<br />
                <input type="password" value={account.password} onChange={handleChangePW} /><br />
	    	    nickname<br />
	    	    <input type="text" value={account.nickname} onChange={handleChangeNN} /><button onClick={handleCheckNN}>Check</button><br />
                <button onClick={handleSubmitt}>Submitt</button>
            </main>
        </div>
    );
}

export default Account;
