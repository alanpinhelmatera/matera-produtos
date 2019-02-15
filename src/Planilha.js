import dados from './assets/data/dados.json';

export default (function planilha() {
  let dadosInterno = [];

  return {
    async getDados(modalidade) {
      dadosInterno = dados[modalidade];
      return dadosInterno;
    },

    async getPeriodos(idsProdutosSelecionados) {
      const periodos = dadosInterno.periodos
        .filter(periodo =>
          periodo.produtos
            .map(produto => produto.id)
            .some(idProduto => idsProdutosSelecionados.includes(idProduto))
        )
        .map(periodo => ({
          ...periodo,
          produtos: periodo.produtos.filter(produto => idsProdutosSelecionados.includes(produto.id))
        }));

      return {
        ...dadosInterno,
        periodos
      };
    }
  };
})();
