import React, { Component } from 'react'
import LogInForm from '../components/LogInForm'
import '../App.css'
import fire from '../config/fire'

class LogInPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: "",
            username: "User",
            password: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
    }

    logInHandler = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Successfully logged in");
                this.props.history.push('/dashboard'); // Change to Dashboard
            })
            .catch((err) => {
                console.log("Error: " + err.toString());
            })
    }

    render() {
        return (
            <div className="background-container">
                <div className="login-container justify-content-center">
                    <h1>Bienvenidos!</h1>
                    <h3>Iniciar Sesion</h3>
                    <LogInForm changeHandler={this.changeHandler} logInHandler={this.logInHandler}/>
                </div>
            </div>
            
        )
    }
}

export default LogInPage;