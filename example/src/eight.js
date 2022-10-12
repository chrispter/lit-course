import { LitElement, html } from 'lit-element';
import { stylesModule } from './css/styles';

export class ExampleEight extends LitElement {
    static get styles(){
        return [
            stylesModule
        ]
    }
    render(){
        return html `
            <p>Estamos en mi octavo componente</p>
            <button class="btn-styles">Click</button>
        `
    }
}

customElements.define('example-eight', ExampleEight);