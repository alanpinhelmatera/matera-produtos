import './modalidades.css';
import Modalidade from './Modalidade';

export default function Modalidades(modalidades) {
  return `
    <ul class="modalidades">
      ${modalidades.map(m => Modalidade(m)).join('')}
    </ul>
  `;
}
