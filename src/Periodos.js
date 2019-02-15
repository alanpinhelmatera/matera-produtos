function createMarkupFuncionalidade(funcionalidades) {
  return funcionalidades
    .map(
      funcionalidade => `
        <button class="periodo__funcionalidade">
          ${funcionalidade.nome}
        </button>
        <div class="periodo__descritivo">
          ${funcionalidade.descritivo}
        </div>
      `
    )
    .join('');
}

function createMarkupProdutos(produtos, todosProdutos) {
  return produtos
    .map(
      produto => `
      <h3 class="periodo__produto">${
        todosProdutos.find(infoProduto => infoProduto.id === produto.id).nome
      }</h3>
      ${createMarkupFuncionalidade(produto.funcionalidades)}
    `
    )
    .join('');
}

function createMarkup({ produtos: todosProdutos, periodos }) {
  return periodos
    .map(
      periodo => `
        <div class="periodo">
          <h2 class="periodo__titulo">${periodo.titulo}</h2>
          ${createMarkupProdutos(periodo.produtos, todosProdutos)}
        </div>
      `
    )
    .join('');
}

export default function renderPeriodos(dados, element) {
  const markup = createMarkup(dados);
  element.innerHTML = markup;
}
