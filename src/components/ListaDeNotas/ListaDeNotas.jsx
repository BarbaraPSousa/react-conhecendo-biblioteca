import React, { Component } from 'react'
import CardNota from '../CardNota'
import './estilo.css'

class ListaDeNotas extends Component {
  
 /* constructor(props){
    super(props)
    não precisa declarar, pois é feto automatico
  }*/

  render() {
    return (
      // loop
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <div>{nota}</div>
              <CardNota />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListaDeNotas
