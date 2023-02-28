import { Link } from 'react-router-dom';
import Button from '../functions/BackButton';
function Login(){
    return (
        <div>
            <header>
                <h1>Login</h1>
                <hr />
            </header>
            <main>
                <Link to="/Account">You don't have Account? Click here!</Link>
            </main>
            <footer>
                <Button path="/" name="main" />
            </footer>
        </div>
    );
}

export default Login;