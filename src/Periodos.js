function createMarkup({ produtos, periodos }) {
  return periodos
    .map(
      p => `
        <div class="periodo">
          <h2 class="periodo__titulo">${p.titulo}</h2>
          ${p.produtos
            .map(
              prod => `
                <h3 class="periodo__produto">${
                  produtos.find(produto => produto.id === prod.id).nome
                }</h3>
                ${prod.funcionalidades
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
