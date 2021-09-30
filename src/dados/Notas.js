export default class ArrayDeNotas {
  constructor() {
    this.notas = []
    this._inscritos = []
  }

  adicionarNotas(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria)
    this.notas.push(novaNota)
  }

  apagarNota(indece) {
    this.notas.splice(indece, 1)
  }

  inscrever(fun) {
    this._inscritos.push(fun)
  }

  notificar() {
    this._inscritos.forEach(fun => {
      fun(this.categorias)
    })
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo
    this.texto = texto
    this.categoria = categoria
  }
}
