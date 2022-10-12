import { LitElement, html } from "lit-element";
import { weatherStyles } from "../../css";
import { cityList } from '../../catalogs'

class SelectLit extends LitElement {

    static get styles(){
        return [ weatherStyles ]
    }
 
    static get properties(){
        return {
            listCity: { type: Array },
            params: { type: Object },
        }
    }

    constructor(){
        super()
        this.listCity = cityList;
        this.params = {
            id: ''
        }
    }

    handleSelect(e){
        if(e.target.value){
            console.log(e.target.value)
        }
    }

    async searchWeather(){
        clearInner();
        this.params.id = this.shadowRoot.querySelector('#city').value;
        const url = `https://www.metaweather.com/api/location/${ this.params.id }`
        const response = await fetch(url);
        const data = await response.json();

        if(data.consolidated_weather){
            data.consolidated_weather.forEach(element => {
                this.shadowRoot.getElementById('#result').innerHTML += `
                <div class="box">
                    <p class="type">${ element.weather_state_name }</p>
                    <p class="grade">${ (element.the_temp).toFixed(0) }</p>
                    <p class="date">${ element.applicable_date }</p>
                </div>
                `;
            });
            return;
        }

        this.shadowRoot.getElementById('#result').innerHTML = `
            <div> Not results found</div>
        `;
        
        setTimeout(() => {
            this.shadowRoot.getElementById('#result').innerHTML = '';
        }, 3000);
    }

    clearInner(){
        this.shadowRoot.getElementById('#result').innerHTML = '';
    }

    render(){
        return html `
            <div class="cp-form">
                <select id="city" @input="${ this.handleSelect }">
                    ${ this.listCity.map((city) => html`
                        <option 
                            value="${ city.id }"
                        >${ city.description }</option>
                    `)}
                </select>
                <input class="btn-form" type="submit" value="Search" @click="${ this.searchWeather }"/>
            </div>
            <div class="result">
                
            </div>
        `;
    }

}

customElements.define('select-lit', SelectLit)