import { LitElement, html, unsafeCSS, TemplateResult } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement, property } from "lit/decorators.js";
import style from "./style.scss";

@customElement("dsc-typography")
export class DscTypography extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  @property() component?: string = "";

  @property() variant?: string = "";

  @property() size?: string = "";

  @property() font?: string = "";

  @property() color?: string = "";

  constructor() {
    super();
  }

  get displayPatternSize() {
    const sizes = ["x-display", "display"];
    return sizes.includes(this.size ?? "") ? this.size : "display";
  }

  get headingPatternSize() {
    const sizes = ["x-large", "large", "medium", "small"];
    return sizes.includes(this.size ?? "") ? this.size : "large";
  }

  get subtitlePatternSize() {
    const sizes = ["large", "medium", "small"];
    return sizes.includes(this.size ?? "") ? this.size : "large";
  }

  get paragraphPatternSize() {
    const sizes = ["large-bold","large", "small-bold", "small", "x-small"];
    return sizes.includes(this.size ?? "") ? this.size : "large";
  }

  get labelPatternSize() {
    const sizes = ["large", "small-bold", "small", "x-small"];
    return sizes.includes(this.size ?? "") ? this.size : "large";
  }

  get headingPatternVariant() {
    const headingVariants = ["h1", "h2", "h3", "h4", "h5", "h6"];
    return headingVariants.includes(this.variant ?? "") ? this.variant : "h1";
  }

  get patternComponent() {
    const components = [
      "display",
      "heading",
      "subtitle",
      "paragraph",
      "label",
      "caption",
    ];
    return components.includes(this.component ?? "")
      ? this.component
      : "heading";
  }

  get renderColor() {

    const colors = {
      feedback: {
        success: ["pure", "high", "medium", "low",],
        error: ["pure", "high", "medium", "low",],
        alert: ["pure", "high", "medium", "low",],
      },
      primary: [
        "pure", "light","medium", "dark",
      ],
      secondary: [
        "pure", "light","medium", "dark",
      ],
      neutral: [
        "pure", "high", "medium", "low",
      ]
    } as any

    const splittedColor = this.color?.split("-");
    const colorType = splittedColor![0];

    let colorVariant = "";
    let colorScale = "";
    let colorProp = "";

    if (splittedColor?.length) {
      if (colors[splittedColor[0]]) {
        if (splittedColor.includes("feedback")) {
          if (colors[splittedColor[0]][splittedColor[1]]) {
            colorVariant = `${splittedColor[0]}--${splittedColor[1]}`;
            colorScale = splittedColor?.length > 1 ? splittedColor[2] : "pure";
  
            colorProp = `${colorVariant}--${colorScale}`
            
            return colors[splittedColor[0]][splittedColor[1]]?.includes(`${colorScale}`)
              ? colorProp
              : `${colorVariant}--pure`;

          }
          return "feedback--success--pure"         
        }
        colorVariant = splittedColor[0];
        colorScale = splittedColor?.length > 1 ? splittedColor[1] : "pure";

        colorProp = `${colorVariant}--${colorScale}`
          
        return colors[colorType]?.includes(`${colorScale}`)
          ? colorProp
          : `${colorType}--pure`
      }
    }
    return "primary--pure";
  }

  get fontFamily() {
    return this.font?.toLowerCase() == 'secondary' ? 'secondary' : 'primary'
  }

  renderDisplay() {
    return html` <h2
      part="typography"
      class="typography typography-font-family-${this.fontFamily} typography-${this
        .renderColor} typography-display typography-display--${this
        .displayPatternSize}
        "
    >
      <slot></slot>
    </h2>`;
  }

  renderHeading() {
    return html`${unsafeHTML(`<${this.headingPatternVariant}
      part="typography"
      class="typography typography-font-family-${this.fontFamily} typography-${this.renderColor} typography-heading typography-heading--${this.headingPatternSize}
    ">
      <slot></slot>
    </${this.headingPatternVariant}>`)}`;
  }

  renderSubtitle() {
    return html`<p
      part="typography"
      class="typography typography-font-family-${this.fontFamily} typography-${this
        .renderColor} typography-subtitle typography-subtitle--${this
        .subtitlePatternSize}"
    >
      <slot></slot>
    </p>`;
  }

  renderParagraph() {
    return html`<p
      part="typography"
      class="typography typography-font-family-${this.fontFamily} typography-${this
        .renderColor} typography-paragraph typography-paragraph--${this
        .paragraphPatternSize}"
    >
      <slot></slot>
    </p>`;
  }

  renderLabel() {
    return html`<p
      part="typography"
      class="typography typography-font-family-${this.fontFamily} typography-${this
        .renderColor} typography-label typography-label--${this
        .labelPatternSize}"
    >
      <slot></slot>
    </p>`;
  }

  renderCaption() {
    return html`<span
      part="typography"
      class="typography typography-font-family-${this.fontFamily} typography-${this.renderColor} typography-caption"
      ><slot></slot
    ></span>`;
  }

  render() {
    const components: { [key: string]: TemplateResult<1> } = {
      display: this.renderDisplay(),
      heading: this.renderHeading(),
      subtitle: this.renderSubtitle(),
      paragraph: this.renderParagraph(),
      label: this.renderLabel(),
      caption: this.renderCaption(),
    };

    return html`${components[this.patternComponent ?? "heading"]}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsc-typography": DscTypography;
  }
}
