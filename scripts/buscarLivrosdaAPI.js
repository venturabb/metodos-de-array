import aplicarDesconto from "./metodoMap.js";

let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBuscarLivrosdaAPI() {
  const resposta = await fetch(endpointDaAPI);
  livros = await resposta.json();

  let livrosComDesconto = aplicarDesconto(livros);

  livrosComDesconto.forEach((livro) => {
    console.table(livro);
  });

  return livrosComDesconto;
  // console.table(livros);
}

export default getBuscarLivrosdaAPI;
