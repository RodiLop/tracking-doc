import React from 'react'
import fire from '../config/fire'

function LogOut(props) {

    const logOut = () => {
        fire.auth().signOut();
        props.history.push('/');
    }

    return (
        <div>
            {logOut()}
        </div>
    )
}

export default LogOut;