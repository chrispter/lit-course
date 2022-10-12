import { LitElement, html } from 'lit-element';

export class ExampleTwo extends LitElement {
    static get properties(){
        return {
            prop1: { type: String },
            prop2: { type: Number },
            prop3: { type: Boolean },
            prop4: { type: Array },
            prop5: { type: Object },
        }
    }

    constructor(){
        super();
        this.prop1 = 'Hola mundo, este es un string',
        this.prop2 = 10,
        this.prop3 = true,
        this.prop4 = ['apple', 'banana', 'melon', 'lemon', 'strawberry'],
        this.prop5 = [{
            mark: 'Ford',
            model: 'Mustang',
            year: 1996
        }, {
            mark: 'Volkwagen',
            model: 'Vocho',
            year: 1954
        }],

        console.log(this.prop1);
        console.log(this.prop2);
        console.log(this.prop3);
        console.log(this.prop4);
        console.log(this.prop5);
    }

    render(){
        return html `
            <p>Estamos en mi segundo componente</p>
            <p>${ this.prop1 }</p>
            <p>El valor de la prop2: ${ this.prop2 }</p>
            <p>${ this.prop3 ? html`<p style="color: green;">Verdadero</p>` : html`<p style="color: red;">Falso</p>`}</p>
            
            <p>Prop 4 que es un array</p>
            <ul>
            ${this.prop4.map((item, i) => (
                html`<li key="${ i }">${ item }</li>`
            ))}
            </ul>

            <ul>
                ${this.prop5.map((item) => (
                    html`<li>${ item.mark } | ${ item.model } | ${ item.year }</li>`
                ))}
            </ul>
        `
    }
}

customElements.define('example-two', ExampleTwo);