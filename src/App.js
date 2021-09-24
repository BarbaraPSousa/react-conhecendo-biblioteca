import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import Formulario from './components/FormularioCadastro'
import './assests/App.css'
import './assests/index.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      notas:[]
    }
  }

  //metodo de criar notas
  criaNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <Formulario
          criarNota={this.criaNota.bind(this)} //<!--props custumizados(injeção de depedência)-->
        />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    )
  }
}

export default App
