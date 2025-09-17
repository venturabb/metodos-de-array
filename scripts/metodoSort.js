import { livros } from "./main.js";

let botaoOrdenacao = document.querySelector(".btn-ordenacao");

botaoOrdenacao.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  rodaFuncaoDeFormaAleatoria(livrosOrdenados);
}
