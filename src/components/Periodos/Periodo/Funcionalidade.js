export default function Funcionalidade(funcionalidade) {
  return `
    <button class="periodo__funcionalidade">
      ${funcionalidade.nome}
    </button>
    <div class="periodo__descritivo">
      ${funcionalidade.descritivo}
    </div>
  `;
}
