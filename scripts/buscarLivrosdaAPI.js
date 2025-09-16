import aplicarDesconto from "./metodoMap.js";
import filtrarLivros from "./metodoFilter.js";

export let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

export async function getBuscarLivrosdaAPI() {
  const resposta = await fetch(endpointDaAPI);
  livros = await resposta.json();

  const livrosFiltrados = filtrarLivros(livros);

  if (livrosFiltrados) {
    let livrosComDesconto = aplicarDesconto(livrosFiltrados);
    console.table(livrosComDesconto);
    return livrosComDesconto;
  } else {
    let livrosComDesconto = aplicarDesconto(livros);
    console.table(livrosComDesconto);
    return livrosComDesconto;
  }
}
