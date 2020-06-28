import React from 'react'
import { Pie } from 'react-chartjs-2'

function PieChart(props) {

    //"Pagare","Titulo de Propiedad","Certificado de Ingresos","Poder Notarial"
    var pagareNum = 0, tituloNum = 0, certNum = 0, poderNum = 0;
    props.info.list.map((doc) => {
        if (doc.docTipo === "Pagare"){
            return pagareNum++;
        }
        if (doc.docTipo === "Titulo de Propiedad"){
             return tituloNum++;
        }
        if (doc.docTipo === "Certificado de Ingresos"){
            return certNum++;
        }
        if (doc.docTipo === "Poder Notarial"){
            return poderNum++;
        }
        else {
            return null;
        }
    })

    const data = {
        chartData:{
            labels: props.info.tiposDoc,
            datasets:[
              {
                label:'',
                data:[
                  pagareNum,
                  tituloNum,
                  certNum,
                  poderNum,
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                ]
              }
            ]
          }
    }

    console.log(props);
    return (
        <div className="chart">
            <Pie
            data={data.chartData}
            options={{
                title:{
                text:'Numero de Diferentes Documentos ',
                fontSize:50
                }
            }}
            />

        </div>
    )
}

export default PieChart;