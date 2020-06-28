import React, { Component } from 'react'
import '../App.css'
import fire from '../config/fire'
import RegisterForm from '../components/RegisterForm'

class RegisterPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
    }

    // check the passwords match and the email isn't taken
    registrationSubmitHandler = (e) => {
        e.preventDefault();
        const [email, password, passwordConfirm] = [this.state.email, this.state.password, this.state.passwordConfirm];

        if (password === passwordConfirm) {
            fire.auth().createUserWithEmailAndPassword(email, password)
                .then((u) => {
                    console.log("Succesfully registered");
                })
                .catch((err) => {
                    console.log("Error " + err.toString());
                })
        }
    }

    render() {
        return (
            <div className="register-container">
                <h1>Registracion</h1>
                <RegisterForm changeHandler={this.changeHandler} registrationsubmitHandler={this.registrationSubmitHandler}/>
            </div>
        )
    }
}

export default RegisterPage;