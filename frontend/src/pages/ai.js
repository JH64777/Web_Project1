import loadimg from './images/default.png';
import { useState } from 'react';
import axios from 'axios';
import Button from '../functions/BackButton';

function AI(){
    const [photoV, SetPV] = useState(loadimg);
    const photoSize = {"width" : "200px", "height" : "200px"};
    const [imgValue, SetImg] = useState('');
    
    const handleChange = e => {
        SetPV(URL.createObjectURL(e.target.files[0])); // when file is uploaded make URL information from file data
        SetImg(e.target.files[0]);
    }

    const handlesubmit = e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('ImgFile', imgValue);
        axios.post('/IMG', formData)
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)});
    }

    return (
        <div>
            <header>
                <h1>AI</h1>
                <hr />
            </header>
            <main>
                Insert Your Photo!<br />
                <img src={ photoV } style={photoSize} alt="error" /><br />
                <form onSubmit={handlesubmit} encType='multipart/form-data'>
                    <input type="file" onChange={handleChange} name='ImgFile' accept='image/*'/><br />
                    <button type="submit">submit</button>
                </form>
            </main>
            <footer>
                <Button path="/" name="main" />
            </footer>
        </div>
    );
}

export default AI;