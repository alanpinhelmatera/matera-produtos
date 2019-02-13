import './periodo.css';
import Funcionalidade from './Funcionalidade';

export default function Periodo(periodo) {
  return `
    <div id="${periodo.id}" class="periodo">
      <h2 class="periodo__titulo">${periodo.titulo}</h2>
      ${periodo.funcionalidades.map(f => Funcionalidade(f)).join('')}
    </div>
  `;
}
