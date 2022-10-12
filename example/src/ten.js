import { LitElement, html, css } from 'lit-element';

export class ExampleTen extends LitElement {
    render(){
        return html `
            <p>We're in ten component</p>
            <button @click="${ this.firstEvent }">Click</button>
        `
    }

    firstEvent() {
        console.log('Click in the button');
    }
}

customElements.define('example-ten', ExampleTen);