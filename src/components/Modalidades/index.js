import './modalidades.css';
import Modalidade from './Modalidade';

const modalidades = [
  {
    titulo: 'Matera Banco',
    tema: 'banco'
  },
  {
    titulo: 'Matera Gestão',
    tema: 'gestao'
  }
];

class Modalidades {
  constructor() {
    this.buscaDados();
  }

  buscaDados() {
    this.modalidades = modalidades;
  }

  render() {
    return `
      <ul class="modalidades">
        ${modalidades.map(m => Modalidade(m)).join('')}
      </ul>
    `;
  }
}

export default function ModalidadesRender() {
  return new Modalidades().render();
}
