import './produtos.css';
import Produto from './Produto';

export default function Produtos(tema, produtos) {
  const ProdutoModalidade = Produto.bind(null, tema);
  return `
    <div class="produtos produtos--tema-${tema}">
      ${produtos.map(p => ProdutoModalidade(p)).join('')}
    </div>
  `;
}
