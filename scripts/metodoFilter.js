import { livros } from "./buscarLivrosdaAPI.js";

const botaoFront = document.getElementById("btnFiltrarLivrosFront");
const botaoBack = document.getElementById("btnFiltrarLivrosBack");
const botaoDados = document.getElementById("btnFiltrarLivrosDados");

const botoes = document.querySelectorAll(".btn");
console.log(1);
console.log(botoes);

botoes.forEach((botao) => botao.addEventListener("click", filtrarLivros));
/* botoes.forEach((botao) =>
  botao.addEventListener("click", (evento) => {
    botao = evento.target;
    const categoria = botao.value;
    console.log(categoria);
       
    const categoria2 = idBotao.value;
    console.log(categoria2); 
  })
); */

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

  /*
  const categoria2 = "front-end";

  const idBotao = evento.target.id;
  console.log(idBotao);
  const botaoClicado = document.getElementById(idBotao);
  console.log(botaoClicado);
  const categoria = botaoClicado.value;
  console.log(categoria); */
}

export default filtrarLivros;
