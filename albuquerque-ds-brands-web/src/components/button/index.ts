import { CSSResult, unsafeCSS } from "lit";
import { DscButton } from "@albuquerqueDs-npm/design-system-core-web/dist/components/button";
import style from "./style.scss";

export class DsbButton extends DscButton {
  static get styles() {
    return [unsafeCSS(super.styles), unsafeCSS(style)] as unknown as CSSResult;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsb-button": DsbButton;
  }
}

if (!customElements.get("dsb-button")) {
  customElements.define("dsb-button", DsbButton);
}
