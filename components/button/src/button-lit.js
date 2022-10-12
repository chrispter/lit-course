import { LitElement, html } from 'lit-element';
import { buttonStyles, generalStyles } from '../css';


export class ButtonComponent extends LitElement {
    static get styles(){
        return[
            buttonStyles,
            generalStyles,
        ]
    }

    static get properties(){
        return {
            disabled: { type: Boolean } 
        }
    }

    constructor(){
        super()
        this.disabled = false;
    }

    render() {
        return html `
            <button-primary 
                class="button-primary" 
                @click="${ this.clickButton }"
                ?disabled="${ this.disabled }"
            >Click</button-primary>

            <button-second 
                class="button-second" 
                @click="${ this.clickButton }"
                ?disabled="${ this.disabled }"
            >Click</button-second>
        `;
    }

    clickButton(){
        console.log('Message');
    }
}

customElements.define('button-lit', ButtonComponent);