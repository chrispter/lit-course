import { css } from 'lit-element';

export const generalStyles = css `
    .card {
        background-color: #f6f6f6;
        width: 60%;
        border-radius: 10px;
        margin: 30px auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px;
    }

    input[type=text],
    input[type=password] {
        width: 250px;
        height: 30px;
        padding: 10px 10px 10px 50px;
        font-size: 14px;
        margin-bottom: 15px;
        border: none;
        border-bottom: 2px solid #c6c6c6;
        background-color: white;
        background-position: 10px 10px;
        background-repeat: no-repeat;
    }

    .input-user{
        width: 50%;
        background-image: url('img/username.svg');
    }

    .input-pass{
        width: 50%;
        background-image: url('img/password.svg');
    }

    input:focus {
        border: 1px solid #c6c6c6;
    }

    label {
        display: block;
        color: #666;
        margin-bottom: 15px;
        text-align: left;
        width: 300px;
    }

    .btn-login {
        border: none;
        color: #FFF;
        background-color: #666;
        width: 310px;
        padding: 15px;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
    }

    .btn-login:hover {
        background-color: #555;
    }

    .welcome{
        font-size: 1.5rem;
    }

    .sesion {
        font-size: 1rem;
    }

    .logout-img {
        width: 40px;
        height: auto;
        border-radius: 50%;
        padding: 20px;
        background-color: #666;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

    .msg-error {
        width: 250px;
        color: #fff;
        background-color: #ff6666;
        text-align: center;
        border-radius: 10px;
        margin-top: 20px;
        padding: 15px;
    }

    .msg-good{
        width: 250px;
        color: #fff;
        background-color: #337541;
        text-align: center;
        border-radius: 10px;
        margin-top: 20px;
        padding: 15px;
    }
`;