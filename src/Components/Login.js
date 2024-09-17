import React from 'react'

export const Login = () => {
  return (
    <div className="container">
        <div className="form">
            <h2>LOGIN</h2>
            <input type="username" placeholder="SUC NUMBER"/><br/>
            <input type="password" placeholder="PASSWORD"/><br/>
            <a href="#forget">Forget password? Click Here!</a><br/><br/>
            <div className="form-submit">
                <button onClick={() => console.log("click me")}>Login</button>
                <button  onClick={() => console.log("click me")}>signin</button>
            </div>

        </div>
    </div>
  )
}
