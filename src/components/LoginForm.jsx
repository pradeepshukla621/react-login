import React from "react";

import '../../src/App.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";




function LoginForm () {
    return (
        <div >
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon" />

                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />

                    </div>

                    <div className="remember-forget">
                        <label ><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have account? <a href="#">Register</a></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginForm;