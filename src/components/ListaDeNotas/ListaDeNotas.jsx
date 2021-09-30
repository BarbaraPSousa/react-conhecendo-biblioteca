import React, { Component } from 'react'
import CardNota from '../CardNota'
import './estilo.css'

class ListaDeNotas extends Component {


  render() {
    return (
      // loop
      <ul className="lista-notas">
        {this.props.notas.map((nota, index, categoria) => {
          return (
            <li className="lista-notas_item" key={index}>
              
              <CardNota 
              indece={index}
              apagarNota={this.props.apagarNota}
              titulo={nota.titulo} 
              texto={nota.texto}
              categoria={nota.categoria}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListaDeNotas
