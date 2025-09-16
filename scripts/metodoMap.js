function aplicarDesconto(livros) {
  const desconto = 0.3;
  let livrosComDesconto = livros.map((livro) => {
    return { ...livro, preco: (livro.preco - livro.preco * (1 - desconto)).toFixed(2) };
  });
  console.log(4);
  console.log("Desconto aplicado");
  console.log(livros);
  return livrosComDesconto;
}

export default aplicarDesconto;
