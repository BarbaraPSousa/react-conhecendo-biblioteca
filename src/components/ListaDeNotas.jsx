import React, { Component } from 'react'
import CardNotas from './cardNotas/CardNotas'

class ListaDeNotas extends Component {
  render() {
    return(
      <ul>
        {Array.of("Trabalhos", "Trabalhos","Estudos").map((categoria, index) =>{
          return(
            <li key={index}>
              <div>{categoria}</div>
              <CardNotas/>
            </li>
          )
        })}
      </ul>
    )
  }
    
}

export default ListaDeNotas
