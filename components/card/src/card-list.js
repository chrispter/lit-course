import { LitElement, html } from 'lit-element';
import { cardStyles, generalStyles } from '../css';


export class CardComponent extends LitElement {
    static get styles(){
        return[
            cardStyles,
            generalStyles,
        ]
    }

    static get properties(){
        return {
            title: { type: String },
            text: { type: String },
        }
    }

    constructor(){
        super()
        this.title = 'Rick Sánchez';
        this.text = 'Citadel of Ricks'
    }

    render() {
        return html `
            <div class="grid-column-4">
                <card-album class="card-album">
                    <img src="img/1.jpeg" />
                    <p class="title">${ this.title }</p>
                </card-album>
                <card-album class="card-album">
                    <img src="img/1.jpeg" />
                    <p class="title">${ this.title }</p>
                </card-album>
                <card-album class="card-album">
                    <img src="img/1.jpeg" />
                    <p class="title">${ this.title }</p>
                </card-album>
                <card-album class="card-album">
                    <img src="img/1.jpeg" />
                    <p class="title">${ this.title }</p>
                </card-album>
            </div>
            <br /><br />
            <div class="grid-column-1">
                <card class="card">
                    <p>${ this.text }</p>
                </card>
            </div>
        `;
    }

}

customElements.define('card-lit', CardComponent);