import './reset.css';
import './app.css';
import Cabecalho from '../Cabecalho';
import Banco from '../Banco';

export default function App() {
  return `
    ${Cabecalho()}
    ${Banco()}
  `;
}
