import logoPng from './assets/img/logo.png';

function createMarkup() {
  return `
    <img class="cabecalho__logo" src="${logoPng}">
    <h1 class="cabecalho__titulo-principal">Selecione o produto desejado</h1>
  `;
}

export default function renderCabecalho(element) {
  const markup = createMarkup();
  element.innerHTML = markup;
}
