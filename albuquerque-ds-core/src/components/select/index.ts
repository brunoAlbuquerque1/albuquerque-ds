import { LitElement, html, unsafeCSS, PropertyValueMap} from "lit";
import { when } from 'lit/directives/when.js';

import { icons } from '../../utils/js/helperImport.js'
import { parseProp } from '../../utils/ts/parseProp';
import { getIcon } from '../../utils/ts/getIcon'
import { buttonComponents, HTMLButtonComponentAttribute, HTMLButtonTypeAttribute } from './types'

import { customElement, property } from "lit/decorators.js";
import style from "./style.scss";

import '../icon'
@customElement("dsc-select")
export class DscSelect extends LitElement {
    static get styles() {
        return unsafeCSS(style);
    }

    @property() component: HTMLButtonComponentAttribute = "primary";

    @property({type: String}) disabled? = "false";

    @property({type: String}) loading? = "false";

    @property() iconLeft?: string = "";

    @property() iconRight?: string = "";

    @property() buttonType: HTMLButtonTypeAttribute = "button";


    constructor() {
        super();
    }

    get patternComponent() {
        return buttonComponents.includes(this.component!)
            ? this.component
            : "primary";
    }

    get parseDisabledProp() {
        const propIsEmpty = this.getAttribute('disabled')?.length === 0

        return parseProp(this.disabled!, propIsEmpty)
    }

    get parseLoadingProp() {
        const propIsEmpty = this.getAttribute('loading')?.length === 0

        return parseProp(this.loading!, propIsEmpty)
    }

    updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {

        this.style.cssText =  this.parseDisabledProp || this.parseLoadingProp ? 'display: inline-block; pointer-events: none; width: 100%;' : 'pointer-events: default;'

        this.closest('form')?.addEventListener('keypress', (e) => {
            if(!(this.parseDisabledProp || this.parseLoadingProp)) {
                this.buttonType === 'submit' && e.key.toLowerCase() === 'enter' && this.click()
            }
        })
    }

    render() {
        
        return html`
        <button
            part="button"
            type="${this.buttonType}"
            aria-disabled="${this.parseDisabledProp}"
            class="button button-${this.patternComponent}${this.parseLoadingProp ? '--loading':''}"
            ?disabled=${this.parseDisabledProp}
        >

            ${when(this.parseLoadingProp, () => html`
                <dsc-icon
                    .icon="${icons.CircleNotch}" 
                    size="md">
                </dsc-icon>`
            , () => html`
                ${when(!!this.iconLeft, () => 
                    html`<dsc-icon
                            .icon="${icons[getIcon(this.iconLeft!)]}"
                            size="md"
                        ></dsc-icon>`)}
            
                    <slot></slot>

                ${when(!!this.iconRight, () => 
                    html`<dsc-icon
                            .icon="${icons[getIcon(this.iconRight!)]}"
                            size="md"
                        ></dsc-icon>`)}
                `
            )}
        </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsc-select": DscSelect;
  }
}
