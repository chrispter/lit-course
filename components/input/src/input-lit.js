import { LitElement, html } from 'lit-element';
import { generalStyles, inputStyles } from '../css';


export class InputComponent extends LitElement {
    static get styles(){
        return[
            generalStyles,
            inputStyles,
        ]
    }

    static get properties(){
        return {
            msgValue: { type: String },
            placeholder: { type: String },
            blankText: { type: String },
            maxLengthText: { type: Number },
            minLengtText: { type: Number } ,
            inputType: { type: String },
            disabled: { type: Boolean },        
        }
    }

    constructor(){
        super()
        this.msgValue = "Value";
        this.inputType = "text";
        this.placeholder = "Test";
        this.blankText = "Campo obligatorio";
        this.maxLengthText = 5;
        this.minLengtText = 2;
        this.disabled = false;
    }

    readInput(e){
        if(e.target.value){
            console.log('Change')
        }
    }

    requiredInput(e){
        let valueInput = e.target.value;
        let lengthValue = e.target.value.length;
        console.log(lengthValue, this.maxLengthText);
        if(valueInput === ""){
            this.shadowRoot.getElementById("error").innerHTML = this.blankText; 
        } else if(lengthValue < this.minLengtText){
            this.shadowRoot.getElementById("error").innerHTML = "Minimo" + this.minLengtText + "caracteres"; 
        } else if(lengthValue > this.maxLengthText){
            this.shadowRoot.getElementById("error").innerHTML = "Pasaste maximo de caracteres"; 
        } else {
            this.shadowRoot.getElementById("error").innerHTML = ''; 
        }
    }

    render() {
        return html `
            <div-input>
                <label class="required" >Input general</label>
                <div class="space"></div>
                <input 
                    class="colorInput" 
                    .placeholder="${ this.placeholder }"
                    .type="${ this.inputType }" 
                    .value="${ this.msgValue}"
                    @change="${ this.readInput }" 
                    @keyup="${ this.requiredInput }"
                />
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-input>
            <div-input>
                <label class="required" >Input general</label>
                <div class="space"></div>
                <input 
                    class="colorInput" 
                    .placeholder="${ this.placeholder }"
                    .type="${ this.inputType }" 
                    .value="${ this.msgValue}"
                    @change="${ this.readInput }" 
                    @keyup="${ this.requiredInput }"
                    ?disabled="${ this.disabled }"
                />
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-input>
        `;
    }
}

customElements.define('input-lit', InputComponent);