import React, { Component } from 'react'
import './estilo.css'

class Formulario extends Component {

  constructor(){ // constutor
    super();
    this.titulo = "";
  }

  handleMudancaTitulo(evento) { //metodo de escrever o Titulo
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)} //evento de digitar
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input "
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    )
  }
}
export default Formulario
