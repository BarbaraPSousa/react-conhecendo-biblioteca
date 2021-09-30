export default class ArrayDeNotas {
  constructor() {
    this.notas = []
  }

  adicionarNotas(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota)
  }

  apagarNota(indece) {
    this.notas.splice(indece, 1)
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo
    this.texto = texto
    this.categoria = categoria
  }
}
