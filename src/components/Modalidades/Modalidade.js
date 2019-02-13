export default function Modalidade(modalidade) {
  return `
    <li>
      <a
        class="modalidades__link modalidades__link--tema-${modalidade.tema}"
        data-modalidade="${modalidade.tema}"
      >
        ${modalidade.titulo}
      </a>
    </li>
  `;
}
