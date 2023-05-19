import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createSvgElement } from '../../utils/ts/svgHelper';
import style from "./style.scss";

@customElement("dsc-icon")
export class DscIcon extends LitElement {
    static get styles() {
        return unsafeCSS(style);
    }

    @property() size?: string = "";

    @property() icon?: string = "";

    constructor() {
        super();
    }

    get patternSize() {
        const sizes = ['sm', 'md', 'lg']

        return sizes.includes(this.size as string) ? this.size : 'md';
    }
    
    render() {
        return html`
            <div part="icon-asset" class="icon icon--${this.patternSize}">
                ${createSvgElement(String(this.icon))}
            </div>
        `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsc-icon": DscIcon;
  }
}
