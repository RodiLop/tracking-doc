import React from 'react'


function DocumentDisplay(props) {
    const docObj = {...props.location.state.doc};
    const hrStyle = {
        backgroundColor: "rgb(0, 153, 255)"
    }

    const acciones =  ['','enviar boveda sucursal', 'enviar boveda central', 'enviar a notaria', 'recuperar de boveda', 'modificar', 're-escanear'];

    // info for all clients
    const clientList = docObj.clientes;
    var clientCounter = 0;

    console.log(props)
    return (
        <div className="document-view">
            <h1>Vista de Documento</h1>
            <br/>
            <div className="text-left">
                <h5>Tipo de Documento: {docObj.docTipo}</h5>
                <h5>Numero Pagare: {docObj.numPagare}</h5>
                <h5>Monto: {docObj.monto}</h5>
                <h5>Plazo: {docObj.plazo} meses</h5>
                <h5>Fecha Incio: {docObj.fechaInicio}</h5>
                <h5>Fecha Termino: {docObj.fechaTermino}</h5>
                <h5>Fecha Pagare: {docObj.fechaPagare}</h5>
                <h5>Fecha Almacenamiento: {docObj.fechaAlmacenamiento}</h5>
            </div>
            <hr style={hrStyle}/>
            <h1>Informacion de Clientes</h1>
            <hr style={hrStyle}/>
            {clientList.map((cliente) =>
            <div className="text-left">
                <h4>Cliente {++clientCounter}</h4>
                <h5>Cedula: {cliente.cedula}</h5>
                <h5>Nombre: {cliente.nombre}</h5>
                <h5>Profession: {cliente.profession}</h5>
                <h5>Nacionalidad: {cliente.nacionalidad}</h5>
                <h5>Pais: {cliente.pais}</h5>
                <h5>Ciudad: {cliente.ciudad}</h5>
                <h5>Direccion: {cliente.direccion}</h5>
            </div>)}
            <hr style={hrStyle}/>
            <h1>Empresa Financiera</h1>
            <hr style={hrStyle}/>
            <div className="text-left">
                <h5>Nombre: {docObj.informacionFinanciera.nombre}</h5>
                <h5>Cedula: {docObj.informacionFinanciera.cedula}</h5>
                <h5>Pais: {docObj.informacionFinanciera.pais}</h5>
                <h5>Ciudad: {docObj.informacionFinanciera.ciudad}</h5>
                <h5>Direccion: {docObj.informacionFinanciera.direccion}</h5>
            </div>
            <hr style={hrStyle}/>
            <h1>Ubicaciones</h1>
            <hr style={hrStyle}/>
            <div className="text-left">
                <h5>Nombre: {docObj.ubicaciones.nombre}</h5>
                <h5>Responsable: {docObj.ubicaciones.responsable}</h5>
                <h5>Usuario Autorizado: {docObj.ubicaciones.usuarioAuth}</h5>
            </div>
            <hr style={hrStyle}/>
            <h1>Actualizar con Movimiento</h1>
            <form>
                <div className="d-flex flex-wrap">
                    <div className="form-group form-group col-lg-3 mr-auto">
                        <label htmlFor="ubicacion-hasta">Nueva Ubicacion</label>
                        <br/>
                        <input type="text" className="form-control" id="ubicacion-hasta" name="ubicacionHasta"/>
                    </div>
                    <div className="form-group form-group col-lg-3 mr-auto">
                        <label htmlFor="usuario-requirente">Usuario Requirente</label>
                        <br/>
                        <input type="text" className="form-control" id="usuario-requirente" name="usuarioRequirente"/>
                    </div>
                    <div className="form-group form-group col-lg-3 mr-auto">
                        <label htmlFor="usuario-auth">Usuario Autorizador</label>
                        <br/>
                        <input type="text" className="form-control" id="usuario-auth" name="usuarioAuth"/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    <div className="form-group form-group col-lg-3 mr-auto">
                        <label htmlFor="plazo">Plazo</label>
                        <br/>
                        <input type="text" className="form-control" id="plazo" name="plazo"/>
                    </div>
                    <div className="form-group form-group col-lg-3 mr-auto">
                        <label htmlFor="tipo">Tipo</label>
                        <br/>
                        <input type="text" className="form-control" id="tipo" name="tipo"/>
                    </div>
                    <div className="form-group form-group col-lg-3 mr-auto">
                        <label htmlFor="accion">Accion</label>
                        <br/>
                        <select type="text" className="form-control" columns="2" id="accion" name="accion">
                            {acciones.map((accion) => <option key={accion} value={accion}>{accion}</option>)}
                        </select>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    <div className="form-group form-group col-lg-11 mr-auto">
                        <label htmlFor="comentario">Comentarios</label>
                        <br/>
                        <textarea type="text" className="form-control" id="comentario" name="comentario"/>
                    </div>
                </div>
                <br/>
                <input type="button" className="btn btn-primary" value="Subir Movimiento"/>
            </form>

        </div>
    )
}

export default DocumentDisplay;