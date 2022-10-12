import { LitElement, html, css } from 'lit-element';

export class ExampleTwelve extends LitElement {

    static get properties() {
        return {
            countries: { type: Array }
        }
    }

    constructor(){
        super()
        this.countries = ["Mexico", "Colombia", "Alemania", "Holanda"]
    }

    render(){
        return html `
            <p>We're in twelve component</p>
            
            <select @change="${ this.showValue }">
                <option selected>---</option>
                ${this.countries.map(i => (
                    html `
                        <option vlue="${ i }"> ${ i }</option>
                    `
                ))}
            </select>
        `
    }

    showValue(e){
        let value = e.target.value;
        console.log(value)
    }
}

customElements.define('example-twelve', ExampleTwelve);