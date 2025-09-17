import rodaFuncaoDeFormaAleatoria from "./metodoForEach.js";
import aplicarDesconto from "./metodoMap.js";

export let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBuscarLivrosdaAPI() {
  const resposta = await fetch(endpointDaAPI);
  livros = await resposta.json();

  let livrosComDesconto = aplicarDesconto(livros);
  // console.table(livrosComDesconto);
  rodaFuncaoDeFormaAleatoria(livrosComDesconto);
}

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

  /* let livrosFiltrados = livros.filter((livro) => livro.categoria === categoriaCerta);

   if (categoriaCerta == "disponivel") {
    livrosFiltrados = livros.filter((livro) => livro.quantidade > 0);
  } */

  let livrosFiltrados =
    categoriaCerta == "disponivel"
      ? livros.filter((livro) => livro.quantidade > 0)
      : livros.filter((livro) => livro.categoria === categoriaCerta);

  console.table(livrosFiltrados);
  rodaFuncaoDeFormaAleatoria(livrosFiltrados);
}

let botaoOrdenacao = document.querySelector(".btn-ordenacao");

botaoOrdenacao.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  rodaFuncaoDeFormaAleatoria(livrosOrdenados);
}

getBuscarLivrosdaAPI();
