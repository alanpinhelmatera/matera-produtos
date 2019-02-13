import Modalidades from '../Modalidades';
import Produtos from '../Produtos';
import Periodos from '../Periodos';

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
    this.modalidades = [];
    this.produtos = [];
    this.periodos = [];
    this.buscaDados();
  }

  buscaDados() {
    this.modalidades = modalidades;
    this.periodos = periodos;
    this.produtos = produtos;
  }

  render() {
    const ProdutosBanco = Produtos.bind(null, 'banco');
    return `
      <main class="container">
        ${Modalidades(this.modalidades)}
        ${ProdutosBanco(this.produtos)}
        ${Periodos(this.periodos)}
      </main>
  `;
  }
}

export default function BancoRender() {
  return new Banco().render();
}
