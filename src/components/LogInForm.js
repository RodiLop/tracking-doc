import React from 'react'
import '../App.css'

function LogInForm(props) {
    return (
        <div className="login-form">
            <form className="col-lg-3 m-auto" onSubmit={props.logInHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="email" className="form-control" id="user-email" name="email" value={props.email} onChange={props.changeHandler}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="user-password">Password</label>
                    <br/>
                    <input type="password" className="form-control" id="user-password" name="password" value={props.password} onChange={props.changeHandler}/>
                </div>

                <div>
                    <input type="submit" className="btn btn-primary" value="Iniciar Sesion"  onClick={props.logInHandler}/>
                </div>
            </form>
        </div>
    )
}

export default LogInForm;