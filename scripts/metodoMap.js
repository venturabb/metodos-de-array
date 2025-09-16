function aplicarDesconto(livros) {
  const desconto = 0.3;
  let livrosComDesconto = livros.map((livro) => {
    return { ...livro, preco: (livro.preco - livro.preco * (1 - desconto)).toFixed(2) };
  });
  return livrosComDesconto;
}

export default aplicarDesconto;
