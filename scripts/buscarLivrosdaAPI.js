let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBuscarLivrosdaAPI() {
  const resposta = await fetch(endpointDaAPI);
  livros = await resposta.json();
  return livros;
  livros.forEach((livro) => {
    console.table(livro);
  });
  // console.table(livros);
  // new Promise((resolve, reject) => {});
}

export default getBuscarLivrosdaAPI;
