import { LitElement, html, css } from 'lit-element';

export class ExampleEleven extends LitElement {
    render(){
        return html `
            <p>We're in ten component</p>
            <input type="text" placeholder="one" id="iOne" @change="${ this.handleChange }"/>
            <br /><br />
            <input type="text" placeholder="Three" id="iThree" @keyup="${ this.handleKeyup }"/>
            <br /><br />
            <input type="text" placeholder="Two" id="iTwo" disabled />
            <br /><br />
            <input type="text" placeholder="Four" id="iFour" @input="${ this.handleInput }" />
        `
    }

    // Evento @change
    handleChange(e) {
        let valueInput = e.target.value;
        let lengthInput = valueInput.length;
        console.log('change', valueInput, lengthInput)
    }

    // Evento @keyup
    handleKeyup(e) {
        if(e.target.value.length === 4){
            this.shadowRoot.getElementById("iTwo").disabled = false;
        } else {
            this.shadowRoot.getElementById("iTwo").disabled = true;
        }
        console.log(e.target.value.length);
    }

    // Evento @input
    handleInput(e){
        if(e.target.value.length === 4){
            console.log('Es igual a 4', e.target.value.length);
        } else {
            console.log('No es igual', e.target.value.length);
        }
    } 
}

customElements.define('example-eleven', ExampleEleven);