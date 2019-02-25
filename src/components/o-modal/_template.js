import html from 'nanohtml';

export default ({ open }, childrenFragment) => html`
  <div class="js-modal m-modal ${open ? '' : 'm-modal--hidden'}" tabindex="0">
    <div class="m-modal__content">
      <button class="js-modal-close-button m-modal__close-button"><axa-icon icon="cross-gap"></axa-icon></button>
      <div>${childrenFragment}</div>
    </div>
  </div>
`;
