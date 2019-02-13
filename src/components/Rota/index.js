import EventEmitter from '../../utils/EventEmitter';

class Rota {
  constructor(rota, componente) {
    this.rota = rota;
    this.componente = componente;
    EventEmitter.on('navegarAte', rotaSolicitada => {
      this.rotaAtual = rotaSolicitada;
      EventEmitter.emit('renderApp');
    });
  }

  render() {
    if (this.rotaAtual === this.rota) {
      return this.componente();
    }
    return '';
  }
}

export default function RotaRender(rota, componente) {
  return new Rota(rota, componente).render();
}
