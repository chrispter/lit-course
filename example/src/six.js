import { LitElement, html, css } from 'lit-element';

export class ExampleSix extends LitElement {
    static get styles(){
        const mainColor = css `brown`;
        return css `
            h1 {
                color: ${ mainColor }
            }
        `;
    }
    render(){
        return html `
            <p>Estamos en mi septimo componente</p>
            <h1>Mostarndo static styles</h1>
        `
    }
}

customElements.define('example-six', ExampleSix);