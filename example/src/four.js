import { LitElement, html } from 'lit-element';

export class ExampleOne extends LitElement {
    render(){
        return html `
            <!--- <div>Hola usuario <slot>desconicido</slot></div>-->
            <div>
                <slot name="name"></slot>
                <slot name="age"></slot>
                <slot name="job"></slot>
            </div>
        `
    }
}

customElements.define('example-four', ExampleOne);