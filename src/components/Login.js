import React from 'react'
import { Link } from "react-router-dom";
import './Login.css'
function Login() {
    return (
      <div className="login">
        <Link  to="/">
          <img
            className="login__logo"
                    src=""
                    alt='CARFact'
          />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
            //   onClick={signIn}
            //   className="login__signInButton"
            >
              Sign In
            </button>
          </form>
                <button
                    // onClick={register}
                    className="login__registerButton">
            Create your  Account
          </button>
        </div>
      </div>
    );
}

export default Login
