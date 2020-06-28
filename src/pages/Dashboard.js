import React, { Component } from 'react'
import DashboardCard from '../components/DashboardCard'
import fire from '../config/fire'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        const currentUser = fire.auth().currentUser;
        if (!currentUser) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="dashboard">
                <DashboardCard
                    page={'/document-admin'}
                    img_path={'/images/doc-search-image.jpg'}
                    img_alt={'Busque Documento'}
                    title={'Administrar Documento'}
                    content={'Use informacion relacionada al documento para encotrar su locacion.'}
                    />
                <DashboardCard
                    page={'/document-create'}
                    img_path={'/images/make-document-image.jpg'}
                    img_alt={'Crea Documento'}
                    title={'Crear Documento'}
                    content={'Crea un documento y documenta donde se guarda.'}/>
                <DashboardCard
                    page={'/reports'}
                    img_path={'/images/report-image.jpg'}
                    img_alt={'Reportes'}
                    title={'Reportes'}
                    content={'Ver reportes de data disponible.'}/>
            </div>
        );
    }
}

export default Dashboard;