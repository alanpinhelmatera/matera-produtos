import './reset.css';
import './app.css';
import Cabecalho from '../Cabecalho';
import Modalidades from '../Modalidades';
import Banco from '../Banco';
import Gestao from '../Gestao';
import Rota from '../Rota';
import EventEmitter from '../../utils/EventEmitter';

export function AppRender() {
  const RotaBanco = Rota.bind(null, 'banco', Banco);
  const RotaGestao = Rota.bind(null, 'gestao', Gestao);
  return `
    <header class="cabecalho container">
      ${Cabecalho()}
    </header>
    <main class="container">
      ${Modalidades()}
      ${RotaBanco()}
      ${RotaGestao()}
    </main>
  `;
}

export function AppTrigger() {
  const modalidades = document.querySelectorAll('[data-modalidade]');

  modalidades.forEach(m => {
    m.addEventListener('click', () => {
      EventEmitter.emit('navegarAte', m.attributes['data-modalidade'].value);
    });
  });
}
