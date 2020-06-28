import React from 'react'
import { Link } from 'react-router-dom';

function DashboardCard(props) {
    return (
        <div className="card" style={ { width: "18rem" } }>
            <img className="card-img-top" src={process.env.PUBLIC_URL + props.img_path} alt={props.img_alt}/>
            <div className="card-body">
                <Link to={props.page}>
                    <h5 className="card-title">{props.title}</h5>
                </Link>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    )
}

export default DashboardCard;