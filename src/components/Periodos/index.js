import './periodos.css';
import Periodo from './Periodo';

export default function Periodos(periodos) {
  return `
    <div class="periodos">
      ${periodos.map(p => Periodo(p)).join('')}
    </div>
  `;
}
