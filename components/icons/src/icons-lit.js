import { LitElement, html } from 'lit-element';
import { iconsStyles, generalStyles } from '../css';


export class IconsComponent extends LitElement {
    static get styles(){
        return[
            generalStyles,
            iconsStyles,
        ]
    }

    static get properties(){
        return {
            path1Primary: String,
            path2Primary: String,
            viewBoxPrimary: String,
            fillPrimary: String,
            fillSvgOne: String,
            fillSvgTwo: String,
            fillSvgThree: String,
            fillSvgFour: String,
            fillSvgFive: String,
            viewBoxFind: String,
            pathFind: String,
            viewBoxEdit: String,
            pathEdit: String
        }
    }

    constructor(){
        super()
        this.viewBoxPrimary= "0 0 576 512",
        this.fillSvgPrimary = "none",
        this.path1Primary = "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z",
        this.fillSvgOne = "#11605e",
        this.fillSvgTwo = "#dc2626",
        this.fillSvgThee = "#c88803",
        this.fillSvgFour = "#0d738f",
        this.fillSvgFive = "#bc185d",
        this.viewBoxFind= "0 0 512 512",
        this.pathFind = "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z",
        this.viewBoxEdit= "0 0 512 512",
        this.pathEdit = "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
        this.viewBoxDelete= "0 0 448 512",
        this.pathDelete = "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
    }

    render() {
        return html `
            <div class="grid-column-12">
                <icon-home>
                    <svg width="50" height="50" viewBox="${ this.viewBoxPrimary }">
                        <path d="${ this.path1Primary }" fill="${ this.fillSvgOne }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxPrimary }">
                        <path d="${ this.path1Primary }" fill="${ this.fillSvgTwo }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxPrimary }">
                        <path d="${ this.path1Primary }" fill="${ this.fillSvgThee }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxPrimary }">
                        <path d="${ this.path1Primary }" fill="${ this.fillSvgFour }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxPrimary }">
                        <path d="${ this.path1Primary }" fill="${ this.fillSvgFive }"/>
                    </svg>
                </icon-home>
                <icon-find>
                    <svg width="50" height="50" viewBox="${ this.viewBoxFind }">
                        <path d="${ this.pathFind }" fill="${ this.fillSvgOne }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxFind }">
                        <path d="${ this.pathFind }" fill="${ this.fillSvgTwo }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxFind }">
                        <path d="${ this.pathFind }" fill="${ this.fillSvgThree }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxFind }">
                        <path d="${ this.pathFind }" fill="${ this.fillSvgFour }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxFind }">
                        <path d="${ this.pathFind }" fill="${ this.fillSvgFive }"/>
                    </svg>
                </icon-find>
                <icon-edit>
                    <svg width="50" height="50" viewBox="${ this.viewBoxEdit }">
                        <path d="${ this.pathEdit }" fill="${ this.fillSvgOne }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxEdit }">
                        <path d="${ this.pathEdit }" fill="${ this.fillSvgTwo }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxEdit }">
                        <path d="${ this.pathEdit }" fill="${ this.fillSvgThree }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxEdit }">
                        <path d="${ this.pathEdit }" fill="${ this.fillSvgFour }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxEdit }">
                        <path d="${ this.pathEdit }" fill="${ this.fillSvgFive }"/>
                    </svg>
                </icon-edit>
                <icon-delete>
                    <svg width="50" height="50" viewBox="${ this.viewBoxDelete }">
                        <path d="${ this.pathDelete }" fill="${ this.fillSvgOne }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxDelete }">
                        <path d="${ this.pathDelete }" fill="${ this.fillSvgTwo }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxDelete }">
                        <path d="${ this.pathDelete }" fill="${ this.fillSvgThree }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxDelete }">
                        <path d="${ this.pathDelete }" fill="${ this.fillSvgFour }"/>
                    </svg>
                    <svg width="50" height="50" viewBox="${ this.viewBoxDelete }">
                        <path d="${ this.pathDelete }" fill="${ this.fillSvgFive }"/>
                    </svg>
                </icon-delete>
            </div>
        `;
    }

}

customElements.define('icons-lit', IconsComponent);