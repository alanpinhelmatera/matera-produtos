function createMarkup({ produtos, periodos }) {
  return periodos
    .map(
      periodo => `
        <div class="periodo">
          <h2 class="periodo__titulo">${periodo.titulo}</h2>
          ${periodo.produtos
            .map(
              produto => `
                <h3 class="periodo__produto">${
                  produtos.find(infoProduto => infoProduto.id === produto.id).nome
                }</h3>
                ${produto.funcionalidades
                  .map(
                    f => `
                      <button class="periodo__funcionalidade">
                        ${f.nome}
                      </button>
                      <div class="periodo__descritivo">
                        ${f.descritivo}
                      </div>
                    `
                  )
                  .join('')}
              `
            )
            .join('')}
        </div>
      `
    )
    .join('');
}

export default function renderPeriodos(dados, element) {
  const markup = createMarkup(dados);
  element.innerHTML = markup;
}
