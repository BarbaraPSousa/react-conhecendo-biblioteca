import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import ListaCategorias from './components/ListaCategorias'
import Formulario from './components/FormularioCadastro'
import './assests/App.css'
import './assests/index.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notas: [],
      categorias: ["Games", "Musica"]
      
    }
  }

  //metodo de criar notas
  criaNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria] //cria nova lista de categoria
    const novoEstado = { ...this.state, categorias: novoArrayCategorias } // estadua atual, referenciado a nova lista
    this.setState(novoEstado) //add novo estado
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
          categorias={this.state.categorias}
          criarNota={this.criaNota.bind(this)} //<!--props custumizados(injeção de depedência)-->
        />
        <main className="conteudo-principal">
          <ListaCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    )
  }
}

export default App
