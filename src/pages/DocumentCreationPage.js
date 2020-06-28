import React, { Component } from 'react'
import DocumentCreationForm from '../components/DocumentCreationForm'
import { Link } from 'react-router-dom';

class DocumentCreationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            tiposDocumento: [
                "Pagare",
                "Titulo de Propiedad",
                "Certificado de Ingresos",
                "Poder Notarial"
            ]
        }
    }

    createHandler = (e) => {
        this.setState({ submitted: true });
    }

    render() {
        
        var content = null;
        if (!this.state.submitted) {
            content = <div className='document-form-container'>
                <h1>Formulario de Documento</h1>
                <hr/><br/>
                <DocumentCreationForm createHandler={this.createHandler} tiposDocumento={this.state.tiposDocumento}/>
            </div>
        } else {
            content = <div className='document-form-container'>
                <h3 className="alert alert-success">Documento creado!</h3>
                <Link to="/dashboard">
                    <h4>Dashboard</h4>
                </Link>
            </div>
        }

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default DocumentCreationPage;