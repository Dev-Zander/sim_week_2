import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../assets/auth_logo.png';
import '../App.css'


export default function Home() {
    return (

        


<body>
        <div className="App">
            <div className="main_box">
                <img src={logo} alt="logo" width="165" height="190" />
                <div className="login_box">

                    <p>
                    <p>
                    <p>
                    </p>  
                    </p>
                    </p>
                    <h3>Username</h3>
                    <input className="input" ></input>
                    <p>
                    <h3>Password</h3>
                    <input className="input" type="password"></input>
                    </p>
                    <div className="buttons">
                   <Link to="./Dashboard"> <button className="button">
                    Login</button></Link>
                    
                     <Link to="./Dashboard"><button className="button2">Register</button></Link>
                </div>
                </div>

            </div>


        </div>
        </body>
    )
}