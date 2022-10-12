import { LitElement, html, css } from 'lit-element';
import { stylesModule } from './css/styles';

export class ExampleNine extends LitElement {
    static get styles(){
        return css `
            :host {
                --primary-color: blue;
                --font-size: 3.2rem;
                --padding-left: 16px;
            }

            p {
                color: var(--primary-color);
                font-size: var(--font-size);
                padding-left: var(--padding-left);
            }
        `;
    }
    render(){
        return html `
            <p>We're in nine component</p>
        `
    }
}

customElements.define('example-nine', ExampleNine);