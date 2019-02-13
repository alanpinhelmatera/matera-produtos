import './checkbox.css';

export default function Produto(tema, produto) {
  return `
    <label class="checkbox checkbox--tema-${tema}">
      <div class="checkbox__container">
        <input class="checkbox__input" type="checkbox" value="${produto.id}" />
        <div class="checkbox__frame"></div>
        <div class="checkbox__background">
          <svg
            xml:space="preserve"
            class="checkbox__checkmark"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              class="checkbox__checkmark-path"
              d="M4.1,12.7 9,17.6 20.3,6.3"
              fill="none"
              stroke="white"
            >
            </path>
          </svg>
        </div>
      </div>
      <span class="checkbox__label">
        ${produto.nome}
      </span>
    </label>
  `;
}
