import { LitElement, html, css } from 'lit-element';

export class ExampleFifteen extends LitElement {
    static get styles(){
        return css `
            .green {
                display: block;
                padding: 20px;
                background-color: green;
                color: white;
            }

            .red {
                display: block;
                padding: 20px;
                background-color: red;
                color: black;
            }
        `;
    }

    static get properties(){
        return {
            resp: { type: String },
            resp1: { type: String },
            resp2: { type: String },
            resp3: { type: String },
            resp4: { type: String },
            titleQuestion: { type: String },
            myBool: { type: Boolean }
        }
    }   

    constructor(){
        super()
        this.resp = '';
        this.resp1 = 'Charizard';
        this.resp2 = 'Oddish';
        this.resp3 = 'Rapidash';
        this.resp4 = 'Cyndaquil';
        this.titleQuestion = '¿Cual no es de tipo fuego?';
        this.myBool = false;
    }
    
    render(){
        return html `
            <p>We're in ten component</p>
            <h2>${this.titleQuestion}</h2>
            <p>${ this.resp1 }</p>
            <p>${ this.resp2 }</p>
            <p>${ this.resp3 }</p>
            <p>${ this.resp4 }</p>

            <input type="text" @change="${ this.question }"/>
            <p>Tu respuesta es: ${ this.resp }</p>

            ${ this.myBool ? (
                html `<p class="green">Correcto Felicidades</p>`
            ) : ( 
                html `<p class="red">Incorrecto</p>`
            )}
        `
    }

    question(e){
        let value = e.target.value;
        this.resp = value;

        if(value === this.resp2){
            this.myBool = true
        } else {
            this.myBool = false
        }
    }
}

customElements.define('example-fifteen', ExampleFifteen);