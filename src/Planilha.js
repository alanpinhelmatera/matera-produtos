import dados from './assets/data/dados.json';

export default (function planilha() {
  let dadosInterno = [];

  return {
    async getDados(modalidade) {
      dadosInterno = dados[modalidade];
      return dadosInterno;
    },

    async getPeriodos(idsProdutosSelecionados) {
      return {
        ...dadosInterno,
        periodos: dadosInterno.periodos.filter(p =>
          p.produtos
            .map(prod => prod.id)
            .some(idProduto => idsProdutosSelecionados.includes(idProduto))
        )
      };
    }
  };
})();
