import { LitElement, html } from 'lit-element';
import { dividerStyles, generalStyles } from '../css';


export class DividerComponent extends LitElement {
    static get styles(){
        return[
            generalStyles,
            dividerStyles,
        ]
    }

    static get properties(){
        return {
            title: { type: String },
            text: { type: String },
        }
    }

    constructor(){
        super()
        this.title = 'Rick Sánchez';
        this.text = 'Citadel of Ricks'
    }

    render() {
        return html `
            <div class="grid-column-1">
                <divider-dashed>
                    <hr class="dashed">
                </divider-dashed>
            </div>
            <br /><br />
            <div class="grid-column-1">
                <divider-dotted>
                    <hr class="dotted">
                </divider-dotted>
            </div>
            <br /><br />
            <div class="grid-column-1">
                <divider-solid>
                    <hr class="solid">
                </divider-solid>
            </div>
        `;
    }

}

customElements.define('divider-lit', DividerComponent);