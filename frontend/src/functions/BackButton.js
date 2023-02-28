import { useNavigate } from 'react-router-dom';

function Button(props){
    const back = useNavigate();

    return (
        <button onClick={() => back(props.path)}>{props.name}</button>
    )
}

export default Button;