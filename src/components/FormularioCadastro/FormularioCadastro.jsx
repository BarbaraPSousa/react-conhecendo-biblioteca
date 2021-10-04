import React, { Component } from 'react'
import './estilo.css'

class Formulario extends Component {
  constructor(props) {
    // constutor
    super(props)
    this.titulo = ''
    this.texto = ''
    this.categoria = 'Sem Categoria'
    this.state = { categorias: [] }
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this))
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias })
  }

  //metodo
  _handleMudancaCategoria(evento) {
    // cria categoria
    evento.stopPropagation()
    this.categoria = evento.target.value
  }

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
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo, this.texto, this.categoria)
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem Categoria</option>

          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>
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
