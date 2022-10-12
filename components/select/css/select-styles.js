import { css } from 'lit-element';

export const selectStyles = css `
    :host{
       --primary-color: #C9D3DF;
       --default-color: #dc2626;
       --secondary-color: #c88803;
       --warning-color: #0d738f;
       --error-msg: #bc185d;
    }

    .color-select {
        background-color: var(--primary-color);
    }

    .space{
        margin-top: 5px;
    }

    select {
        width: 250px;
        padding: 8px 10px;
        border: none;
        height: 50px;
        border-bottom: 3px solid #000;
        font-family: "Lucia Console", "Courier New", monospace;
        font-size: 16px;
    }

    select:focus{
        border: none;
        outline: none;
        border-bottom: 3px solid gray;
    }

    .error-msg {
        font-family: "Lucia Console", "Courier New", monospace;
        font-size: 12px;
        color: var(--error-msg);
    }

    .required:after {
        content: "*";
        font-family: "Lucia Console", "Courier New", monospace;
        font-size: 14px;
        color: var(--error-msg);
    }

    select:disabled,
    select[disabled] {
        background-color: #ccc;
        color: #f6f6f6;
        pointer-events: none;
        border-bottom: 3px solid #f6f6f6;
    }
`;