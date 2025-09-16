import aplicarDesconto from "./metodoMap.js";
import filtrarLivros from "./metodoFilter.js";

export let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

export async function getBuscarLivrosdaAPI() {
  const resposta = await fetch(endpointDaAPI);
  livros = await resposta.json();

  console.log(3);
  console.log("função fetch");
  console.log(livros);

  const livrosFiltrados = filtrarLivros(livros);
  console.table(livrosFiltrados);

  let livrosComDesconto = aplicarDesconto(livros);

  livrosComDesconto.forEach((livro) => {
    // console.table(livro);
  });

  console.log(5);
  console.table(livrosComDesconto);
  console.log(livros);
  return livrosComDesconto;
}
