import { LitElement, html  } from "lit-element";
import { weatherStyles } from '../css';
import './components'

class WeatherApp extends LitElement {

    static get styles(){
        return [ weatherStyles ]
    }

    render(){
        return html`
            <div>
                <select-lit></select-lit>
            </div>
        `
    }
}

customElements.define('weather-lit', WeatherApp);