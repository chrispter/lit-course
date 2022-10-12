import { css } from 'lit-element';

export const weatherStyles = css `

    .cp-form {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .cp-form select {
        padding: 10px 5px;
        margin-right: 10px;
    } 

    .btn-form {
        border: none;
        border-radius: 10px;
        width: 100px;
        background-color: #6e727d;
        color: #fff;
    }

    .btn-form:hover {
        background-color: #9BA1AD;
    }

    .result {
        width: 90%;
        padding: 30px 5%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .box {
        width: 20%;
        height: auto;
        background-color: #27282b;
        color: #fff;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
    }

    .box p {
        padding: 5px 0;
        margin: 0px;
    }

    .type{
        font-size: 16px;
    }

    .grade {
        font-size: 22px;
        font-weight: 800;
    }

    .date {
        font-size: 16px;
    }
`;