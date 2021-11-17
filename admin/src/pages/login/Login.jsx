import { useEffect, useState } from "react";
import './login.css';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCall";
import { refresh } from "../../redux/userRedux";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(refresh());
    }, [dispatch]);

    const handleLogin = e => {
        e.preventDefault();
        login(dispatch, { username, password });
    }
    return (
        <div className="main">
            <img src="./android-chrome-192x192.png" alt="" className="logo" />
            <h2 className="title">Login</h2>
            <p className="desc">Manage your website</p>
            <form className="login-form" style={{ width: "40%", marginBottom: "90px" }}>
                <div className="form-custom">
                    <label>Username</label>
                    <input type="mail" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-custom">
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(Object(e.target.value))} />
                </div>
                {error && <span className="error">Something went wrong!</span>}
                <div className="submit">
                    <button className="btn-custom" id="btnLogin"
                        onClick={handleLogin}
                        disabled={isFetching}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
