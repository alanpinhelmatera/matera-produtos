import planilha from './Planilha';
import renderProdutos from './Produtos';

const modalidades = document.querySelector('.modalidades');
const produtos = document.querySelector('.produtos');
const periodos = document.querySelector('.periodos');

function makeRequest(modalidade) {
  planilha.getDados(modalidade).then(dados => {
    if (dados && dados.produtos) {
      renderProdutos(dados, produtos);
    } else {
      produtos.innerHTML = '';
    }
    periodos.innerHTML = '';
  });
}

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

    makeRequest(modalidade);
  });
}
