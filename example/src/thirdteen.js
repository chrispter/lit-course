import { LitElement, html, css } from 'lit-element';

export class ExampleThirdteen extends LitElement {

    static get properties(){
        return {
            clicks: { type: Number }
        }
    }

    constructor(){
        super()
        this.clicks = 0
    }

    render(){
        return html `
            <p>We're in thirdteen component</p>
            <button @click="${ this.handlePlus }">+ Plus </button>
            <button @click="${ this.handleMinus }">- minus</button>
            <p>Contador: ${ this.clicks }</p>
        `
    }

    handlePlus(){
        this.clicks++;
        console.log('plus');
    }

    handleMinus(){
        this.clicks--;
        console.log('minus')
    }
}

customElements.define('example-thirdteen', ExampleThirdteen);