import { CSSResult, unsafeCSS } from "lit";
import { DscTypography } from "@albuquerqueDS-npm/design-system-core-web/dist/components/typography";
import style from "./style.scss";

export class DsbTypography extends DscTypography {
  static get styles() {
    return [unsafeCSS(super.styles), unsafeCSS(style)] as unknown as CSSResult;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsb-typography": DsbTypography;
  }
}

if (!customElements.get("dsb-typography")) {
  customElements.define("dsb-typography", DsbTypography);
}
