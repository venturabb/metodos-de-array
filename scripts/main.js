import rodaFuncaoDeFormaAleatoria from "./metodoForEach.js";
import aplicarDesconto from "./metodoMap.js";
import calcularValorTotalLivrosDisponiveis from "./metodoReduce.js";

const valorTotalLivrosNaPagina = document.getElementById("valor_total_livros_disponiveis");
console.log(valorTotalLivrosNaPagina);

export let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBuscarLivrosdaAPI() {
  const resposta = await fetch(endpointDaAPI);
  livros = await resposta.json();

  let livrosComDesconto = aplicarDesconto(livros);
  // console.table(livrosComDesconto);
  rodaFuncaoDeFormaAleatoria(livrosComDesconto);
}

getBuscarLivrosdaAPI();

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
    categoriaCerta == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoriaCerta);

  console.table(livrosFiltrados);
  rodaFuncaoDeFormaAleatoria(livrosFiltrados);

  if (categoriaCerta == "disponivel") {
    function exibirValorTotalLivros() {
      valorTotalLivrosNaPagina.innerHTML = `
          <div class="livros__disponiveis">
          <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalLivrosDisponiveis}</span></p>
          </div>`;
    }

    const valorTotalLivrosDisponiveis = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalLivros();
  }
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria === categoria);
}

let botaoOrdenacao = document.querySelector(".btn-ordenacao");

botaoOrdenacao.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  rodaFuncaoDeFormaAleatoria(livrosOrdenados);
}
