import React, { Component } from 'react'
import './estilo.css'
class ListaCategorias extends Component {
  _handleEventoInput(e) {
    if (e.key == 'Enter') {
      let valorCategoria= e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            //interando com as categorias que recebeu como propriedades e para cada cadegoria retorna uma lista com a variavel categoria.
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            )
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_iput"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    )
  }
}

export default ListaCategorias
