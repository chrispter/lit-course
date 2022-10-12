import { css } from 'lit-element';

export const searchStyles = css `
    .form {
        width: 250px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #f5f5f5;
        padding: 0 10px;  
    }

    .form input,
    .form select {
        width: 250px;
        height: 50px;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 15px 10px;
        background-color: #f5f5f5;
    }

    .btn-form {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content {
        width: 100%;
        height: auto;
        display: flex;
    }

    .content-card {
        width: calc(100% - 250px);
        padding: 0 5%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .result-card {
        width: 23%;
        height: auto;
    }

    .search-error{
        width: 80%;
        background-color: #ed4343;
        color: #f5f5f5;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        margin: auto;
    }

    .btn-clean{
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ed4343 !important;
        margin-top: 5px;
    }
`;