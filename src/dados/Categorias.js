export default class Categorias {
  constructor() {
    this.categorias = []
    this._inscritos = [] // guarda quem vai ser notificado
  }

  inscrever(fun) {
    this._inscritos.push(fun)
  }

  notificar() {
    this._inscritos.forEach(fun => {
      fun(this.categorias)
    })
  } // para cada inscrito, executa a função que foi passada na categoria

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria)
  }
}
