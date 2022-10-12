import { LitElement, html, css } from 'lit-element';
import { statusList, genderList } from '../catalogs';
import { generalStyles, searchStyles } from '../css';
import { buttonStyles } from 'button/css';
import { cardStyles } from 'card/css';
import { inputStyles } from 'input/css';
import { selectStyles } from 'select/css'


export class SearchComponent extends LitElement {
    static get styles(){
        return[
            generalStyles,
            searchStyles,
            cardStyles,
            buttonStyles, 
            inputStyles,
            selectStyles,
            css `
                .btn-form {
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `
        ]
    }

    static get properties(){
        return {
            listStatus: { type: Array },
            listGender: { type: Array },  
            inputType: { type: String },
            placeHolderName: { type: String },
            placeHolderSpecies: { type: String},  
            placeHolderType: { type: String }, 
            placeHolderPage: { type: String },
            params: { type: Object },
            data: { type: Array } 
        }
    }

    constructor(){
        super()
        this.listGender = genderList,
        this.listStatus = statusList,
        this.inputType = 'text',
        this.placeHolderName = 'Name',
        this.placeHolderSpecies = 'Specie',
        this.placeHolderType = 'Type',
        this.placeHolderPage = 'Page',
        this.params = {
            name: '',
            status: '',
            species: '',
            type: '',
            gender: '',
            page: ''
        } 
        this.results = []
    }

    async searchParams(){

        this.clean();
        
        this.params.name = this.shadowRoot.querySelector('#name').value;
        this.params.species = this.shadowRoot.querySelector('#species').value;
        this.params.type = this.shadowRoot.querySelector('#type').value;
        this.params.page = this.shadowRoot.querySelector('#page').value;
        
        if(this.shadowRoot.querySelector('#status').value !== 'option'){
            this.params.status = this.shadowRoot.querySelector('#status').value;
        }
        
        if(this.shadowRoot.querySelector('#gender').value !== 'option'){
            this.params.gender = this.shadowRoot.querySelector('#gender').value;
        }    
        
       

        const url = `https://rickandmortyapi.com/api/character/?name=${ this.params.name }&status=${ this.params.status }&species=${ this.params.species }&type=${ this.params.type }&gender=${ this.params.gender }&page=${ this.params.page }`;

        const response = await fetch(url);
        const { results } = await response.json();

        if(results === undefined){
            this.shadowRoot.getElementById('card').innerHTML = `
                <div class="search-error">There aren't results.</div>
            `
            return;
        }
        
        results.forEach(result => {
            this.shadowRoot.getElementById('card').innerHTML += `
                <div class="result-card">
                    <img src="${ result.image }" />
                    <p>Name: ${result.name }</p>
                    <p>Specie: ${ result.species }</p>
                    <p>Status: ${ result.status }</p>
                    <p>Gender: ${ result.gender }</p>
                    <p>Type: ${ result.type }</p>
                </div>
            `;
        });
    }

    clean(){
        this.shadowRoot.querySelector('#card').innerHTML = ''
    }

    cleanParams(){
        this.shadowRoot.querySelector('#name').value = '';
        this.shadowRoot.querySelector('#status').value = '';
        this.shadowRoot.querySelector('#gender').value = '';
        this.shadowRoot.querySelector('#species').value = '';
        this.shadowRoot.querySelector('#page').value = '';
        this.shadowRoot.querySelector('#type').value = ''
    }

   

    render() {
        return html `
        <div class="content">
            <div class="form">
                <div-input>
                    <input 
                        id="name"
                        class="colorInput" 
                        .placeholder="${ this.placeHolderName }"
                        .type="${ this.inputType }" 
                    />
                </div-input>
                <div-select>
                    <select 
                        class="color-select"
                        id="status" 
                    >
                        ${ this.listStatus.map((select) => html`
                            <option value="${ select.value }">${ select.text }</option>
                        `)}
                    </select>
                </div-select>
                <div-input>
                    <input
                        id="species"
                        class="colorInput" 
                        .placeholder="${ this.placeHolderSpecies }"
                        .type="${ this.inputType }" 
                    />
                </div-input>
                <div-input>
                    <input 
                        id="type"
                        class="colorInput" 
                        .placeholder="${ this.placeHolderType }"
                        .type="${ this.inputType }" 
                    />
                </div-input>
                <div-select>
                    <select 
                        class="color-select" 
                        id="gender"
                    >
                        ${ this.listGender.map((select) => html`
                            <option value="${ select.value }">${ select.text }</option>
                        `)}
                    </select>
                </div-select>
                <div-input>
                    <input 
                        id="page"
                        class="colorInput" 
                        .placeholder="${ this.placeHolderPage }"
                        .type="${ this.inputType }" 
                    />
                </div-input>
                <button-second 
                    class="button-second btn-form" 
                    @click="${ this.searchParams }"
                >
                    Search
                </button-second>
                <button-second 
                    class="button-second btn-clean" 
                    @click="${ this.cleanParams }"
                >
                    Clean Form
                </button-second>
            </div>
            <div class="content-card" id="card">
                <div id="search-error"></div>
            </div>
        </div>
        `;
    }
}

customElements.define('search-lit', SearchComponent);