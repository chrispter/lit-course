import { LitElement, html } from 'lit-element';

export class ExampleFive extends LitElement {
    static get properties(){
        return {
            article: { type: Object },
            prop1: { type: String },
            prop2: { type: String},
        }
    }

    constructor() {
        super();
        this.article = {
            title: 'Blog de pueblo en mexico',
            text: 'Peña de Bernal'
        },
        this.prop1 = "Estamos en primera funcion",
        this.prop2 = "Creando plantillas secundarias"
    }

    render(){
        return html `
            <div>Five</div>
            ${ this.showTextOne()}
            ${ this.showTextTwo()}
        `;
    }

    showTextOne(){
        return html `
            <h3>${ this.article.title }</h3>
            <p>${ this.article.text }</p>
        `
    }

    showTextTwo(){
        return html `
            <p>${ this.prop1 }</p>
            <p>${ this.prop2 }</p>
        `
    }
}

customElements.define('example-five', ExampleFive);