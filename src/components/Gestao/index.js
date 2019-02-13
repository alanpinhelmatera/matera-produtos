import Produtos from '../Produtos';
import Periodos from '../Periodos';

const produtos = [
  {
    id: 1,
    nome: 'teste'
  },
  {
    id: 2,
    nome: 'teste'
  }
];

const periodos = [
  {
    id: 1,
    titulo: 'teste',
    produtos: [
      {
        id: 1,
        nome: 'teste'
      },
      {
        id: 2,
        nome: 'teste'
      }
    ],
    funcionalidades: [
      {
        nome: 'teste',
        descritivo: 'teste'
      }
    ]
  },
  {
    id: 2,
    titulo: 'teste',
    produtos: [
      {
        id: 1,
        nome: 'teste'
      },
      {
        id: 2,
        nome: 'teste'
      }
    ],
    funcionalidades: []
  }
];

class Gestao {
  constructor() {
    this.buscaDados();
  }

  buscaDados() {
    this.periodos = periodos;
    this.produtos = produtos;
  }

  render() {
    const ProdutosGestao = Produtos.bind(null, 'gestao', this.produtos);
    const PeriodosGestao = Periodos.bind(null, this.periodos);
    return `
      ${ProdutosGestao()}
      ${PeriodosGestao()}
  `;
  }
}

export default function GestaoRender() {
  return new Gestao().render();
}
