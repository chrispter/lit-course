import { LitElement, html } from 'lit-element';
import { generalStyles, tableStyles } from '../css';


export class TableComponent extends LitElement {
    static get styles(){
        return[
            generalStyles,
            tableStyles,
        ]
    }

    static get properties(){
        return {
            headboard: Array,
            lists: Array,            
        }
    }

    constructor(){
        super()
        this.headboard = [
            { title: 'First Name'},
            { title: 'Last Name'},
            { title: 'Points'}
        ],
        this.lists = [
            {id: 50, firstName: "Loki", lastName: "Laufeyson"},
            {id: 91, firstName: "Steve", lastName: "Rogers"},
            {id: 72, firstName: "Clinton", lastName: "Barton"},
            {id: 83, firstName: "Tony", lastName: "Stark"},

        ]
    }

    render() {
        return html `
            <table>
                <tr>
                    ${ this.headboard.map((title) => html `
                            <th>${ title.title }</th>
                        `
                    )}
                </tr>
               ${ this.lists.map((list) => html `
                    <tr>
                        <td>${ list.firstName }</td>
                        <td>${ list.lastName }</td>
                        <td>${ list.id }</td>
                    </tr>
                    `
                )}
            </table>
        `;
    }

}

customElements.define('table-lit', TableComponent);