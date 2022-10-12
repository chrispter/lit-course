import { LitElement, html } from 'lit-element';

export class ExampleOne extends LitElement {
    render(){
        return html `
            <p>Estamos en mi primer componente</p>
        `
    }
}

customElements.define('ejercicio-uno', ExampleOne);