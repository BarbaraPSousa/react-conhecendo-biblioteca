import React, { Component } from 'react'
import './estilo.css'

class Formulario extends Component {
  constructor(props) {
    // constutor
    super(props)
    this.titulo = ''
    this.texte = ''
  }

  //metodo
  _handleMudancaTitulo(evento) {
    //escrever o Titulo
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  _criarNota(evento) {
    evento.preventDefault() // não recarega a PG
    evento.stopPropagation() // não deixa propagar informações
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)} //evento de digitar titulo
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input "
          onChange={this._handleMudancaTexto.bind(this)} // evento de texto
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    )
  }
}
export default Formulario
