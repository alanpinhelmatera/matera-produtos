import serializa from './Serializa';
import mapeia from './Mapeia';

export default (function planilha() {
  const api = 'https://spreadsheets.google.com/feeds/list/';
  const key = '1tliRVC8jhAiBL7RVvgYP-SkanrkNo0CPrgXTuEy7A-0';
  const aba = { banco: 1, gestao: 2 };

  let dadosInterno = [];

  return {
    async getDados(modalidade) {
      dadosInterno = await fetch(`${api}${key}/${aba[modalidade]}/public/values?alt=json`)
        .then(response => response.json())
        .then(serializa)
        .then(mapeia);
      return { modalidade, ...dadosInterno };
    },

    async getPeriodos(idsProdutosSelecionados) {
      const periodos = dadosInterno.periodos
        .filter(periodo =>
          periodo.produtos
            .filter(produto => produto.funcionalidades.length)
            .map(produto => produto.id)
            .some(idProduto => idsProdutosSelecionados.includes(idProduto))
        )
        .map(periodo => ({
          ...periodo,
          produtos: periodo.produtos.filter(
            produto =>
              idsProdutosSelecionados.includes(produto.id) && produto.funcionalidades.length
          )
        }));

      return {
        ...dadosInterno,
        periodos
      };
    }
  };
})();
