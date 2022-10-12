import { css } from 'lit-element';

export const inputStyles = css `
    :host{
        --primary-color: #C9D3DF;
        --default-color: #dc2626;
        --secondary-color: #c88803;
        --warning-color: #0d738f;
        --error-msg: #bc185d;
    }

    label {
        font-family: 'Courier New', Courier, monospace;
        font-size: 12px;
    }

    colorInput {
        background-color: var(--primary-color);
    }

    .space{
        margin-top: 5px;
    }

    input {
        width: 235px;
        padding: 5px;
        height: 40px;
        font-size: 16px;
        font-family: 'Courier New', Courier, monospace;
        border: 0;
        border-bottom: 1px solid #000;
        background: transparent;
        background-color: var(--primary-color);
    }

    input:focus {
        border: none;
        outline: none;
        border-bottom: 1px solid var(--secondary-color);
    }
    .error-msg {
        font-size: 12px;
        font-family: 'Courier New', Courier, monospace;
        color: var(--error-msg);
    }

    .required:after {
        content: "*";
        font-family: 'Courier New', Courier, monospace;
        font-size: 14px;
        color: var(--error-msg);
    }

    input:disanled,
    input[disabled] {
        background-color: #ccc;
        color: #f6f6f6;
        pointer-events: none;
        border-bottom: 3px solid #f6f6f6;
    }
`;