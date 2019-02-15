import planilha from './Planilha';
import renderPeriodos from './Periodos';

const produtos = document.querySelector('.produtos');
const periodos = document.querySelector('.periodos');

function makeRequest(idsProdutosSelecionados) {
  planilha.getPeriodos(idsProdutosSelecionados).then(dados => {
    renderPeriodos(dados, periodos);
  });
}

export default function selectProdutoTrigger() {
  produtos.addEventListener('change', () => {
    const selecionados = document.querySelectorAll('input[data-id-produto]:checked');
    makeRequest(Array.from(selecionados, s => s.getAttribute('data-id-produto')));
  });
}
