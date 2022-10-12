import { LitElement, html } from 'lit-element';

export class ExampleThree extends LitElement {

    static get properties() {
        return {
            prop1: { type: String },
            prop2: { type: String },
            prop3: { type: Boolean },
            prop4: { type: String },
        }
    }

    constructor(){
        super();
        this.prop1 = 'Enlace de Texto';
        this.prop2 = 'myDiv';
        this.prop3 = false;
        this.prop4 = 'Placeholder';
    }

    render(){
        return html `
            <!-- Binder por enlace de texto -->
            <div>${ this.prop1 }</div>

            <!--- Binder por enlace de atributo --->
            <div id="${ this.prop2 }">Enlace de Atributo</div>

            <!--- Enlace de atributo boolean --->
            <input type="text" ?disabled="${ this.prop3 }" />

            <!---- Vinculando la propiedad al valor del elemento --->
            <input type="text"  .value="${ this.prop4 }" />

            <!--- Enlace a un evento --->
            <button @click="${ this.clickHandler }"> Click </button>

        `;
    }

    clickHandler(e){
        console.log('Diste clic en el boton', e)
    }
}

customElements.define('example-three', ExampleThree);