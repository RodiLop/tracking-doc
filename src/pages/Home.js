import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import fire from '../config/fire'
import '../App.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
    }
    
    render() {
        console.log(this.props);
        const currentUser = fire.auth().currentUser;
        var content = null;

        if(currentUser) {
            content = <h3>Siga este <Link to={"/dashboard"}>Link</Link> para ir al dashboard.</h3>
        } else {
            content =
                <div>
                    <h3>Siga este <Link to={"/login"}>Link</Link> para iniciar su sesion.</h3>
                    <h3>Siga este <Link to={"/register"}>Link</Link> para crear una cuenta.</h3>
                </div>
        }

        return (
            <div className="container home">
                <h1>Bienvenidos al sistema.</h1>
                { content }
            </div>
        )
    }
}

export default Home;