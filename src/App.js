import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import Formulario from './components/FormularioCadastro'
import './assests/App.css'
import './assests/index.css'

class App extends Component {

  constructor(props){
    super(props)
    this.notas = []
  }
  //metodo de criar notas
  criaNota(titulo, texto){
    const novaNota = {titulo, texto}
    this.notas.push(novaNota)
    console.log(this.notas.length);

  }
  render() {
    return (
      <section className="conteudo">
        <Formulario criarNota={this.criaNota.bind(this)} //<!--props custumizados(injeção de depedência)--> 
        /> 
        <ListaDeNotas notas={this.notas}/> 
      </section>
    ) 
  }
}

export default App
