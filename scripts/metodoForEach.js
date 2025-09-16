import { getBuscarLivrosdaAPI } from "./buscarLivrosdaAPI.js";

async function exibirLivrosNaTela() {
  const listaDeLivros = await getBuscarLivrosdaAPI();
  const livrosNaPagina = document.getElementById("lista-livros");

  listaDeLivros.forEach((livro) => {
    livrosNaPagina.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
    </div>`;
  });
}

/* A estrutura é:

<div class="livro">
      <img class="livro__imagens indisponivel" src="" alt="" />
      <h2 class="livro__titulo">Título</h2>
      <p class="livro__descricao">Autor</p>
      <p class="livro__preco" id="preco">Preço</p>
      <div class="tags">
        <span class="tag">Tag</span>
        </div>
    </div>
    */

async function gerarContainerLivro() {
  const listaDeLivros = await getBuscarLivrosdaAPI();
  const livrosNaPagina = document.getElementById("lista-livros");

  listaDeLivros.forEach((livro) => {
    const containerNovoLivro = document.createElement("div");
    containerNovoLivro.classList.add("livro");
    const imagemLivro = document.createElement("img");
    imagemLivro.classList.add("livro__imagens");
    imagemLivro.src = livro.imagem;
    const tituloLivro = document.createElement("h2");
    tituloLivro.classList.add("livro__titulo");
    tituloLivro.innerHTML = livro.titulo;
    const autorLivro = document.createElement("p");
    autorLivro.classList.add("livro__descricao");
    autorLivro.innerHTML = livro.autor;
    const precoLivro = document.createElement("p");
    precoLivro.classList.add("livro__preco");
    precoLivro.id = "preco";
    precoLivro.innerHTML = "R$ " + livro.preco;
    const tagsLivro = document.createElement("div");
    tagsLivro.classList.add("tags");
    const tagIndividual = document.createElement("span");
    tagIndividual.classList.add("tag");
    tagIndividual.innerHTML = livro.categoria;

    tagsLivro.appendChild(tagIndividual);
    containerNovoLivro.appendChild(imagemLivro);
    containerNovoLivro.appendChild(tituloLivro);
    containerNovoLivro.appendChild(autorLivro);
    containerNovoLivro.appendChild(precoLivro);
    containerNovoLivro.appendChild(tagsLivro);

    livrosNaPagina.appendChild(containerNovoLivro);
  });
}

export function rodaFuncaoDeFormaAleatoria() {
  const condicao = Math.random() < 0.5;
  console.log(condicao);
  if (condicao) {
    exibirLivrosNaTela();
    console.log("```````");
  } else {
    gerarContainerLivro();
    console.log("appendChild");
  }
}
