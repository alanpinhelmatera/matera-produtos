import './cabecalho.css';
import logoPng from '../../img/logo.png';

export default function Cabecalho() {
  return `
    <header class="cabecalho container">
      <img class="cabecalho__logo" src="${logoPng}" />
      <h1 class="cabecalho__titulo-principal">Selecione o produto desejado</h1>
    </header>
  `;
}
