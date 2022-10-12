import { css } from 'lit-element';

export const tableStyles = css `
    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 25%;
        background-color: #dde5ee;
    }

    th{
        text-align: center;
        padding: 10px;
    }

    td {
        text-align: center;
        padding: 10px;
        font-weight: normal;
    }

    tr:nth-child(even){
        background-color: #C9D3E0;
    }
`;