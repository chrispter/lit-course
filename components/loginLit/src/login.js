import { LitElement, html } from 'lit-element';
import { generalStyles } from '../css/index';

export class loginComponent extends LitElement {

    static get styles(){
        return [ generalStyles ]
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

    logIn(){
        this.username = this.shadowRoot.querySelector('#username').value;
        this.password = this.shadowRoot.querySelector('#password').value;
        const msgDiv =  this.shadowRoot.querySelector('#msg-error');

        if(this.username === 'test' && this.password === '123456'){
            let data =  {
                username: this.username,
                password: this.password,
            };
            localStorage.setItem('lit-user', JSON.stringify(data));
            location.href = "/view" 
            return;
        }

        msgDiv.innerHTML = `
            <div class="msg-error">Something went wrong!</div>
        `;

        setTimeout(() => {
            msgDiv.innerHTML = '';
        }, 5000);

    }

    render(){
        return html `
            <div class="content">
                <div class="card">
                    <label>Username</label>
                    <input name="username" id="username" type="text" placeholder="Username" class="input-user" />
                    <label>Password</label>
                    <input name="password" id="password" type="password" placeholder="Password" class="input-pass"/>

                    <button class="btn-login" @click="${ this.logIn }">Login</button>

                </div>
                <div id="msg-error"></div>
            </div>
        `; 
    }
};

customElements.define('login-lit', loginComponent);