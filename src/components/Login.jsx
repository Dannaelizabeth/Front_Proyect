import React from "react";
import logo from "../img/logo.png"
import {BiUser} from "react-icons/bi"
const Login = () => {
  return (
    <section className="hero is-danger is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
            
          <div>
          <img  src={logo}/>
          </div>
          
            <div className="colunm is-4">
                <form className="box">
                    <h1 className="title is-2">Sign In</h1>
                    <div className="field">
                        <label className="label">Email:</label>
                        <div className="control has-icons-left has-icons-right">
                            <input 
                            type="text"
                            className="input"
                            placeholder="Email"
                            />

                            <span className="icon is-small is-left">
                                <BiUser />

                            </span>
                        </div>
                    </div>

                </form>
            </div>

            </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Login