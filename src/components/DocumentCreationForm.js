import React from 'react'

function DocumentCreationForm(props) {
    const hrStyle = {
        backgroundColor: "rgb(0, 153, 255)"
    }

    return (
        <div>
            <form>
                <div className="d-flex flex-wrap">
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="numero-pagare">Numbero Pagare</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="numero-pagare" name="numeroPagare"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="doc-type">Tipo de Documento</label>
                        <br/>
                        <select type="text" className="form-control" columns="2" id="doc-type" name="docType">
                            {props.tiposDocumento.map((tipo) => <option key={tipo} value={tipo}>{tipo}</option>)}
                        </select>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="monto">Monto</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="monto" name="monto"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="plazo">Plazo (Meses)</label>
                        <br/>
                        <input type="number" className="form-control" columns="2" id="plazo" name="plazo" placeholder="0"/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="start-date">Fecha Inicio</label>
                        <br/>
                        <input type="date" className="form-control" columns="2" id="start-date" name="startDate"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="end-date">Fecha Termino</label>
                        <br/>
                        <input type="date" className="form-control" columns="2" id="end-date" name="endDate"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="pagare-date">Fecha Pagare</label>
                        <br/>
                        <input type="date" className="form-control" columns="2" id="pagare-date" name="pagareDate"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="store-date">Fecha Almacenamiento</label>
                        <br/>
                        <input type="date" className="form-control" columns="2" id="store-date" name="storeDate"/>
                    </div>
                </div>
                <br/>
                <h2>Informacion de Clientes</h2>
                <hr style={hrStyle}/>
                <h3 className="document-form-item form-group col-lg-3 mr-auto">Cliente 1</h3>
                <br/>
                <div className="d-flex flex-wrap">
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="cedula-client-1">Cedula</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="cedula-client-1" name="cedulaClientOne"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="name-client-1">Nombre</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="name-client-1" name="nameClientOne"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="city-client-1">Ciudad</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="city-client-1" name="cityClientOne"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="country-client-1">Pais</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="country-client-1" name="countryClientOne"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="nationality-client-1">Nacionalidad</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="nationality-client-1" name="nationalityClientOne"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="profession-client-1">Profesion</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="profession-client-1" name="professionClientOne"/>
                    </div>
                    <div className="document-form-item form-group col-lg-7 mr-auto">
                        <label htmlFor="address-client-1">Direccion</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="address-client-1" name="addressClientOne"/>
                    </div>
                </div>

                <br/>
                <h3 className="document-form-item form-group col-lg-3 mr-auto">Cliente 2</h3>
                <br/>
                <div className="d-flex flex-wrap">
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="cedula-client-2">Cedula</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="cedula-client-2" name="cedulaClientTwo"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="name-client-2">Nombre</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="name-client-2" name="nameClientTwo"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="city-client-2">Ciudad</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="city-client-2" name="cityClientTwo"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="country-client-2">Pais</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="country-client-2" name="countryClientTwo"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="nationality-client-2">Nacionalidad</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="nationality-client-2" name="nationalityClientTwo"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="profession-client-2">Profesion</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="profession-client-2" name="professionClientTwo"/>
                    </div>
                    <div className="document-form-item form-group col-lg-7 mr-auto">
                        <label htmlFor="address-client-1">Direccion</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="address-client-1" name="addressClientTwo"/>
                    </div>
                </div>

                <br/>
                <h3 className="document-form-item form-group col-lg-3 mr-auto">Cliente 3</h3>
                <br/>
                <div className="d-flex flex-wrap">
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="cedula-client-3">Cedula</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="cedula-client-3" name="cedulaClientThree"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="name-client-3">Nombre</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="name-client-3" name="nameClientThree"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="city-client-3">Ciudad</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="city-client-3" name="cityClientThree"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="country-client-3">Pais</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="country-client-3" name="countryClientThree"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="nationality-client-3">Nacionalidad</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="nationality-client-3" name="nationalityClientThree"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="profession-client-3">Profesion</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="profession-client-3" name="professionClientThree"/>
                    </div>
                    <div className="document-form-item form-group col-lg-7 mr-auto">
                        <label htmlFor="address-client-3">Direccion</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="address-client-3" name="addressClientThree"/>
                    </div>
                </div>

                <br/>
                <h2>Informacion de Empresa Financiera</h2>
                <hr style={hrStyle}/>
                <div className="d-flex flex-wrap">
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="cedula-empresa">Cedula</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="cedula-empresa" name="cedulaEmpresa"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="name-empresa">Nombre</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="name-empresa" name="nameEmpresa"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="city-empresa">Ciudad</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="city-empresa" name="cityEmpresa"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="country-empresa">Pais</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="country-empresa" name="countryEmpresa"/>
                    </div>
                    <div className="document-form-item form-group col-lg-7 mr-auto">
                        <label htmlFor="address-empresa">Direccion</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="address-empresa" name="addressEmpresa"/>
                    </div>
                </div>

                <br/>
                <h2>Ubicaciones</h2>
                <hr style={hrStyle}/>
                <div className="d-flex flex-wrap">
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="name-location">Nombre</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="name-location" name="nameLocation"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="auth-user">Usuario Autorizado</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="auth-user" name="authUser"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="responsible-location">Responsable</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="responsible-location" name="responsibleLocation"/>
                    </div>
                    <div className="document-form-item form-group col-lg-7 mr-auto">
                        <label htmlFor="address-location">Direccion</label>
                        <br/>
                        <input type="text" className="form-control" columns="2" id="address-location" name="addressEmpresa"/>
                    </div>
                    <div className="document-form-item form-group col-lg-3 mr-auto">
                        <label htmlFor="file">Subir PDF</label>
                        <br/>
                        <input type="file" className="form-control" columns="2" id="file" name="file"/>
                    </div>
                </div>
                <br/>
                <input type="button" className="btn btn-primary" value="Crear Documento"  onClick={props.createHandler}/>
            </form>
        </div>
    )
}

export default DocumentCreationForm;