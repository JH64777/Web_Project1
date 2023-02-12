import { Link } from 'react-router-dom';
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
        </div>
    );
}

export default Login;