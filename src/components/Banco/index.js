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

class Banco {
  constructor() {
    this.buscaDados();
  }

  buscaDados() {
    this.periodos = periodos;
    this.produtos = produtos;
  }

  render() {
    const ProdutosBanco = Produtos.bind(null, 'banco', this.produtos);
    const PeriodosBanco = Periodos.bind(null, this.periodos);
    return `
      ${ProdutosBanco()}
      ${PeriodosBanco()}
  `;
  }
}

export default function BancoRender() {
  return new Banco().render();
}
