import data from './assets/data/data.json';
import renderProdutos from './Produtos';

const modalidades = document.querySelector('.modalidades');
const produtos = document.querySelector('.produtos');

export default function selectModalidadeTrigger() {
  modalidades.addEventListener('click', e => {
    const { target } = e;
    const modalidade = target.getAttribute('data-modalidade');

    if (modalidade === 'banco') {
      produtos.classList.remove('produtos--tema-gestao');
      produtos.classList.add('produtos--tema-banco');
    } else {
      produtos.classList.remove('produtos--tema-banco');
      produtos.classList.add('produtos--tema-gestao');
    }

    renderProdutos(data[modalidade], produtos);
  });
}
