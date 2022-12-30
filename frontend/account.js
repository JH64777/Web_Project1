import { useState, useRef } from 'react';
function Account(){
    const [account, SetAccount] = useState({ id : '', password : '' });
    const checkValue = useRef({"response" : false}); // The identifing Clicking check box

    const handleChangeID = e => { // when the ID value is changed
        SetAccount({ id: e.target.value, password: account.password });
    }

    const handleChangePW = e => { // when the Password value is changed
        SetAccount({ id: account.id, password: e.target.value });
    }

    const handleSubmitt = e => { // when submitt button is clicked
        let bug;
        if(account.id == '' || account.password == '') // if empty id or password
        {
            alert("You Don't Insert Value id or password!");
        }
        else { // if inserted values in id and password
            if(checkValue.current.response){ // if check box clicked and there is no problem
                const postInfo = { method : "Post", headers : {'content-type' : 'application/json'}, body : JSON.stringify(account) } // The inform of message
                fetch('http://localhost:3001/Account', postInfo) // send message
                .then(response => response.json())
                .then((data) => {
                    if(data.response == 'error') { // if error occured
                        alert("Please check your id!");
                        checkValue.current = {"response" : false}; // The error is occured by same id in DB
                    }
                    else { alert(data.response); } // bug has value "Well Done!"
                });  
            }
            else { alert("Please Check your id!"); } // if check box no clicked
        }
        
    }

    const handleCheck = e => {
        if(account.id == ''){ // if ID is empty
            alert("You didn't insert ID!");
        }
        else { // ID is inserted from user
            const postInfo = { method : "POST", headers : {'content-type' : 'application/json'}, body : JSON.stringify(account) }; // HTTP message information
            fetch('http://localhost:3001/Account/Check', postInfo)
            .then(response => response.json())
            .then((data) => {
                if(data.response){
                    alert("You can use it!");
                    checkValue.current = data;
                }
                else {
                    alert("There is same id. Please Change your ID!");
                }
            });
        }
    }

    return (
        <div>
            <header>
                <h1>Account</h1>
                <hr />
                id
                <input type="text" value={account.id} onChange={handleChangeID} /><button onClick={handleCheck}>Check</button><br />
                password
                <input type="password" value={account.password} onChange={handleChangePW} /><br />
                <button onClick={handleSubmitt}>Submitt</button>
            </header>
        </div>
    );
}

export default Account;
