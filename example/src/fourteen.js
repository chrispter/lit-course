import { LitElement, html, css } from 'lit-element';

export class ExampleFourteen extends LitElement {
    static get styles(){
        return css`
            h3 {
                color: greenyellow;
                background-color: black;
            }

            .fuchsia{
                color: fuchsia;
            }

            .cyan{
                color: cyan;
            }
        `;
    }

    static get properties(){
        return {
            myBool: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.myBool = false;
    }

    render(){
        return html `
            <p>We're in fourteen component</p>
            <h3 class="${ this.myBool ? 'fuchsia' : 'cyan' }">Soy texto en ${ this.myBool }</h3>
            <br />

            <button @click="${ this.clickHandler }">Click change</button>
        `
    }

    clickHandler(){
        this.myBool = !this.myBool;
    }
}

customElements.define('example-fourteen', ExampleFourteen);