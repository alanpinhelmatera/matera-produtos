import dados from './assets/data/dados.json';

export default (function planilha() {
  let dadosInterno = [];

  return {
    async getDados(modalidade) {
      dadosInterno = dados[modalidade];
      return dadosInterno;
    },

    async getPeriodos(idsProdutosSelecionados) {
      return dadosInterno.periodos.filter(p =>
        p.funcionalidades
          .map(f => f.produto)
          .some(idProduto => idsProdutosSelecionados.includes(idProduto))
      );
    }
  };
})();
