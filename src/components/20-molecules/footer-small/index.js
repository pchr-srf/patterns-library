import { LitElement, html, css, unsafeCSS } from 'lit-element';
import footerSmallCSS from './index.scss';
import { repeat } from 'lit-html/directives/repeat';

class AXAFooterSmall extends LitElement {
  static tagName = 'axa-footer-small';
  static styles = css`
    ${unsafeCSS(footerSmallCSS)}
  `;

  static get properties() {
    return {
      languageLinks: { type: Array },
      disclaimerLinks: { type: Array },
      copyrightText: { type: String },
    };
  }

  constructor() {
    super();
    this.languageLinks = [];
    this.disclaimerLinks = [];
    this.copyrightText = '';
  }

  render() {
    return html`
      <article class="m-footer-small">
        <ul class="m-footer-small__list">
          ${repeat(
            this.languageLinks,
            languageItem => html`
              <li class="m-footer-small__list-item">
                <a class="m-footer-small__link" href="${languageItem.link}">${languageItem.text}</a>
              </li>
            `
          )}
        </ul>

        <div class="m-footer-small__disclaimer">
          <ul class="m-footer-small__list">
            ${repeat(
              this.disclaimerLinks,
              languageItem => html`
                <li class="m-footer-small__list-item">
                  <a class="m-footer-small__link" href="${languageItem.link}">${languageItem.text}</a>
                </li>
              `
            )}
          </ul>
          <div>${this.copyrightText}</div>
        </div>
      </article>
    `;
  }
}

customElements.define(AXAFooterSmall.tagName, AXAFooterSmall);

export default AXAFooterSmall;
