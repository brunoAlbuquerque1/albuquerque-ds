import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { hostContextHelper } from "../../utils/ts/hostContextHelper";
import { setRootStyle } from "../../utils/ts/setRootStyle";

export class DsbProvider extends LitElement {
  @property()
  brand: string;
  @property()
  mode: string;

  constructor() {
    super();
    this.brand = "wol";
    this.mode = "dark";
  }

  updated() {
    hostContextHelper(this);

    // const provider = document.querySelector("dsb-provider");
    // const brand = provider.getAttribute('brand').toUpperCase();
    // const mode = provider.getAttribute('mode').toUpperCase();

    setRootStyle(this.brand, this.mode);
  }

  render() {
    return unsafeHTML(`
    <slot></slot>
   `);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsb-provider": DsbProvider;
  }
}

if (!customElements.get("dsb-provider")) {
  customElements.define("dsb-provider", DsbProvider);
}
