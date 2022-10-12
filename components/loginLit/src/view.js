import  { LitElement, html } from 'lit-element';
import { generalStyles } from '../css';

export class ViewComponnent extends LitElement {

    static get styles(){
        return [ generalStyles ];
    }

    static get properties(){
        return {
            username: { type: String },
            password: { type: String}
        }
    }

    constructor(){
        super()
        this.username = "usernametes";
        this.password = "passwordtest"
    }

    connectedCallback(){
       super.connectedCallback()
       let data = JSON.parse(localStorage.getItem('lit-user'));
       this.username = data.username;
       this.password = data.password;
    }

    logOut(){
        localStorage.removeItem('lit-user');
        location.href = '/'; 
    }

    render(){
        return html `
        <div class="content">
            <div class="card">
                <h2 class="welcome">Welcome ${ this.username }</h2>
                <h4 class="sesion">Login successful!</h4>
                <div class="logout-img">
                    <img src="img/logout.svg" @click="${ this.logOut }" />
                </div>
            </div>
        </div>
        `;
    }
};

customElements.define('view-lit', ViewComponnent);