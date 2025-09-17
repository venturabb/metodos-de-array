import { livros } from "./main.js";

const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao) => botao.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  if (this) {
    console.log(this);
  } else {
    return;
  }

  const categoriaCerta = this.value;
  console.log(categoriaCerta);

  let livrosFiltrados = livros.filter((livro) => livro.categoria === categoriaCerta);
  console.table(livrosFiltrados);
  return livrosFiltrados;
}

export default filtrarLivros;
