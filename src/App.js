import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import Formulario from './components/FormularioCadastro'
import './assests/App.css'
import './assests/index.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notas: []
    }
  }

  //metodo de criar notas
  criaNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  //metodo de deletar notas
  deletarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    this.setState({ notas: arrayNotas })
  }

  render() {
    return (
      <section className="conteudo">
        <Formulario
          criarNota={this.criaNota.bind(this)} //<!--props custumizados(injeção de depedência)-->
        />
        <ListaDeNotas
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}
        />
      </section>
    )
  }
}

export default App
