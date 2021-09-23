import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import Formulario from './components/FormularioCadastro'
import './assests/App.css'
import './assests/index.css'

class App extends Component {

  criaNota(titulo, texto){
    console.log(`uma nova nota foi criada ` + titulo + ` ` + texto)

  }
  render() {
    return (
      <section className="conteudo">
        <Formulario criarNota={this.criaNota}/>
        <ListaDeNotas />
      </section>
    )
  }
}

export default App
