import React, { Component } from 'react'
import PieChart from '../components/PieChart'

class ReportsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tiposDoc: [
                "Pagare",
                "Titulo de Propiedad",
                "Certificado de Ingresos",
                "Poder Notarial"
            ],
            currentType: "",
            list: [
                {
                    numPagare: "0898462820",
                    docTipo: "Pagare",
                    monto: 23,
                    plazo: 4,
                    fechaInicio: "09/14/2019",
                    fechaTermino: "01/14/2020",
                    fechaPagare: "10/20/2019",
                    fechaAlmacenamiento: "12/20/2019",
                    clientes: [
                        {
                        cedula: "8948377561",
                        nombre: "John Johnson",
                        ciudad: "Miami",
                        pais: "Estados Unidos",
                        nacionalidad: "American",
                        profession: "Bankero",
                        direccion: "9428 Elm. Street 1223"
                        }
                    ],
                    informacionFinanciera: {
                        cedula: "984375",
                        nombre: "Nombre de empresa",
                        ciudad: "Miami",
                        pais: "Estados Unidos",
                        direccion: "02394 Sawgras Way 28937"
                    },
                    ubicaciones: {
                        nombre: "storage",
                        usuarioAuth: "Seb89",
                        responsable: "Sebastian",
                        direccion: "9283 Manhatan apt 409"
                    }
                },
                {
                    numPagare: "6840998354",
                    docTipo: "Pagare",
                    monto: 90,
                    plazo: 4,
                    fechaInicio: "08/14/2019",
                    fechaTermino: "12/14/2020",
                    fechaPagare: "10/01/2019",
                    fechaAlmacenamiento: "11/20/2019",
                    clientes: [
                        {
                        cedula: "9925836890",
                        nombre: "Jack Morrison",
                        ciudad: "Miami",
                        pais: "Estados Unidos",
                        nacionalidad: "American",
                        profession: "Bankero",
                        direccion: "9428 Elm. Street 1223"
                        },
                        {
                        cedula: "0929869567",
                        nombre: "Syny Jill",
                        ciudad: "Miami",
                        pais: "Estados Unidos",
                        nacionalidad: "American",
                        profession: "Teacher",
                        direccion: "8954 Custer Ave. 8938"
                        }
                    ],
                    informacionFinanciera: {
                        cedula: "984375",
                        nombre: "Nombre de empresa2",
                        ciudad: "Miami",
                        pais: "Estados Unidos",
                        direccion: "02394 Sawgras Way 28937"
                    },
                    ubicaciones: {
                        nombre: "storage 2",
                        usuarioAuth: "J450n",
                        responsable: "Jason",
                        direccion: "9283 Lav Vegas Blvd apt 798"
                    }
                },
                {
                    numPagare: "0898462820",
                    docTipo: "Titulo de Propiedad",
                    monto: 23,
                    plazo: 2,
                    fechaInicio: "01/20/2020",
                    fechaTermino: "03/20/2020",
                    fechaPagare: "2/20/2020",
                    fechaAlmacenamiento: "2/21/2020",
                    clientes: [
                        {
                        cedula: "8949877561",
                        nombre: "Ashe William",
                        ciudad: "New York",
                        pais: "Estados Unidos",
                        nacionalidad: "American",
                        profession: "Professor",
                        direccion: "7984 Grave Street 1223"
                        }
                    ],
                    informacionFinanciera: {
                        cedula: "984375",
                        nombre: "Nombre de Otra empresa",
                        ciudad: "Miami",
                        pais: "Estados Unidos",
                        direccion: "02394 Sawgras Way 28937"
                    },
                    ubicaciones: {
                        nombre: "storage",
                        usuarioAuth: "rod987",
                        responsable: "Rodrick",
                        direccion: "9283 Manhatan apt 409"
                    }
                },
                {
                    numPagare: "09464836489",
                    docTipo: "Certificado de Ingresos",
                    monto: 23,
                    plazo: 1,
                    fechaInicio: "01/24/2020",
                    fechaTermino: "02/24/2020",
                    fechaPagare: "1/30/2020",
                    fechaAlmacenamiento: "1/25/2020",
                    clientes: [
                        {
                        cedula: "8948377561",
                        nombre: "Scott Kramer",
                        ciudad: "Savannah",
                        pais: "Estados Unidos",
                        nacionalidad: "American",
                        profession: "Bankero",
                        direccion: "9428 Elm. Street 1223"
                        }
                    ],
                    informacionFinanciera: {
                        cedula: "984375",
                        nombre: "Nombre de empresa",
                        ciudad: "Miami",
                        pais: "Estados Unidos",
                        direccion: "02394 Sawgras Way 28937"
                    },
                    ubicaciones: {
                        nombre: "storage",
                        usuarioAuth: "Seb89",
                        responsable: "Sebastian",
                        direccion: "9283 Manhatan apt 409"
                    }
                },
                {
                    numPagare: "8900467653",
                    docTipo: "Poder Notarial",
                    monto: 23,
                    plazo: 3,
                    fechaInicio: "11/20/2019",
                    fechaTermino: "02/14/2020",
                    fechaPagare: "11/22/2019",
                    fechaAlmacenamiento: "12/20/2019",
                    clientes: [
                        {
                        cedula: "8948369761",
                        nombre: "Berry Kramer",
                        ciudad: "Savannah",
                        pais: "Estados Unidos",
                        nacionalidad: "American",
                        profession: "Actor",
                        direccion: "9428 Elm. Street 1223"
                        }
                    ],
                    informacionFinanciera: {
                        cedula: "984375",
                        nombre: "Nombre de empresa",
                        ciudad: "Miami",
                        pais: "Estados Unidos",
                        direccion: "02394 Sawgras Way 28937"
                    },
                    ubicaciones: {
                        nombre: "storage",
                        usuarioAuth: "fred11",
                        responsable: "Fred",
                        direccion: "9283 Manhatan apt 409"
                    }
                }
            ]
        }
    }
    render() {
        return (
            <div className="document-view">
                <h1>Reportes</h1>
                <hr/>
                <PieChart info={this.state}/>
                <br/>
                <input className="btn btn-primary" type="button" value="Descargar PDF de Reportes"/>
            </div>
        )
    }
}

export default ReportsPage;