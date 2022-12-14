import { css } from 'lit-element';

export const cardStyles = css `
    .card-album {
        box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
        max-width: 300px;
        margin: auto;
        text-align: center;
        font-family: arial;
        padding: 10px;
    }

    .title {
        color: grey;
        font-size: 22px;
    }

    img {
        width: 100%;
        height: auto;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
        margin: auto;
        width: 80%;
        padding: 20px;
        font-family: arial;
    }
`;