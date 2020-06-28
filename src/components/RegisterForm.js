import React from 'react'

function RegisterForm(props) {
    return (
        <div className="register-form">
            <form className="col-lg-4 m-auto" onSubmit={props.registrationsubmitHandler}> {/* was form */}
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

                <div className="form-group">
                    <label htmlFor="user-password-confirm">Confirme Password</label>
                    <br/>
                    <input type="password" className="form-control" id="user-password-confirm" name="passwordConfirm" value={props.password} onChange={props.changeHandler}/>
                </div>

                <div>
                    <input type="submit" className="btn btn-primary" value="Registrar" onClick={props.registrationsubmitHandler}/>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;