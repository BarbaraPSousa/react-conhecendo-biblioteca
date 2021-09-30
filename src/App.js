import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import ListaCategorias from './components/ListaCategorias'
import Formulario from './components/FormularioCadastro'
import './assests/App.css'
import './assests/index.css'
import Categorias from './dados/Categorias'
import ArrayDeNotas from './dados/Notas'

class App extends Component {
  constructor(props) {
    super(props)
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();

  }
 

  render() {
    return (
      <section className="conteudo">
        <Formulario
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota} 
        />
        <main className="conteudo-principal">
          <ListaCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    )
  }
}

export default App
