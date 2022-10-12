import { LitElement, html } from 'lit-element';
import { generalStyles, selectStyles } from '../css';


export class SelectComponent extends LitElement {
    static get styles(){
        return[
            generalStyles,
            selectStyles,
        ]
    }

    static get properties(){
        return {
            blankText: String, 
            disabled: Boolean, 
            items: Array         
        }
    }

    constructor(){
        super()
        this.blankText = 'Campo obligatorio',
        this.disabled = true,
        this.items = [{
                id: 1,
                text: "Seleccione una opción",
                value: 'none'
            },
            {
                id: 2,
                text: "Squirtle",
                value: 'agua'
            },
            {
                id: 3,
                text: "Pikachu",
                value: 'electrico'
            },
            {
                id: 4,
                text: "Charmander",
                value: 'fuego'
            },
        ]
    }

    render() {
        return html `
            <div-select>
                <label class="required">Select general</label>
                <div class="space"></div>
                <select 
                    class="color-select" 
                    @input="${ this.readSelect }"
                    @change="${ this.requiredSelect }"
                >
                    <option value="none">Select pais</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-select>
            <br /><br />
            <div-select>
                <label class="required">Select general</label>
                <div class="space"></div>
                <select 
                    class="color-select" 
                    @input="${ this.readSelect }"
                    @change="${ this.requiredSelect }"
                    ?disabled="${ this.disabled }"
                >
                    <option value="none">Select pais</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-select>
            <br /><br />
            <div-select>
                <label class="required">Select general</label>
                <div class="space"></div>
                <select 
                    class="color-select" 
                    @input="${ this.readSelect }"
                    @change="${ this.requiredSelect }"
                >
                    ${ this.items.map((item) => html`
                        <option value="${ item.value }">${ item.text }</option>
                    `)}
                </select>
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-select>
        `;
    }

    readSelect(e){
        if(e.target.value){
            console.log('Evente change', e.target.value)
        }
    }

    requiredSelect(e){
        let valueSelect = e.target.value;
        if(valueSelect === 'none'){
            this.shadowRoot.getElementById('error').innerHTML = this.blankText;
        } else {
            this.shadowRoot.getElementById('error').innerHTML = '';
        }
    }

}

customElements.define('select-lit', SelectComponent);