import React from 'react'
import { Link } from 'react-router-dom'

function AdminLink(props) {

    const list = props.list;
    var content = null;

    if (props.currentType !== "") {
        const newList = list.filter(doc => doc.docTipo === props.currentType);
        content = newList.map((doc) => <Link className="list-group-item list-group-item-primary col-lg-6 m-auto" to={ { pathname: '/document-display', state: { doc } } } key={doc.numPagare}><h5>{doc.numPagare} {doc.ubicaciones.nombre} {doc.clientes[0].nombre}</h5></Link>);
    } else {
        content = list.map((doc) => <Link className="list-group-item list-group-item-primary col-lg-6 m-auto" to={ { pathname: '/document-display', state: { doc } } } key={doc.numPagare}><h5>{doc.numPagare} {doc.ubicaciones.nombre} {doc.clientes[0].nombre}</h5></Link>);
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default AdminLink;