import { exibirLivrosNaTela, gerarContainerLivro } from "./metodoForEach.js";
// import filtrarLivros from "./metodoFilter.js";

function rodaFuncaoDeFormaAleatoria() {
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

rodaFuncaoDeFormaAleatoria();

//
