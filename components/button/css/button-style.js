import { css } from 'lit-element';

export const buttonStyles = css `
    .button-primary{
        background-color: rgb(220 38 38);
        border: none;
        color: white;
        text-align: center;
        padding: 10px;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 10px;
        font-family: 'Lucida Console', 'Courier New', monospace;
        cursor: pointer;
    }

    .button-primary:hover {
        box-shadow: 0 6px 8px rgb(0,0,0,0.24);
    }

    .button-primary:disabled,
    .button-primary[disabled]{
        background-color: rgb(254 202 202);
        color: #F6F6F6;
        pointer-events: none;
    }

    .button-second{
        background-color: rgb(22 163 74);
        border: none;
        color: white;
        text-align: center;
        padding: 10px;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 10px;
        font-family: 'Lucida Console', 'Courier New', monospace;
        cursor: pointer;
    }

    .button-second:hover {
        box-shadow: 0 6px 8px rgb(0,0,0,0.24);
    }

    .button-second:disabled,
    .button-second[disabled]{
        background-color: rgb(220 252 231);
        color: #F6F6F6;
        pointer-events: none;
    }

`;