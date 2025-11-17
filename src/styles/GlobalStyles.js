import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Nunito", sans-serif; 
        text-decoration: none;

    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: rgba(250, 250, 250, 1);
        background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2024%2024'%20width%3D'20'%20height%3D'20'%20fill%3D'none'%20stroke%3D'white'%20stroke-width%3D'1.5'%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%0A%20%20%3Cpath%20d%3D'M12%2021s-1-4%201-6%204-2%204-2-1.5-1.5-3.5-1.5S12%2012%2012%2012'/%3E%0A%20%20%3Cpath%20d%3D'M12%2021s1-4-1-6-4-2-4-2%201.5-1.5%203.5-1.5S12%2012%2012%2012'/%3E%0A%20%20%3Cpath%20d%3D'M12%207c0-1.5%202-4%204-4'/%3E%0A%20%20%3Cpath%20d%3D'M12%207c0-1.5-2-4-4-4'/%3E%0A%20%20%3Cpath%20d%3D'M12%2014v7'/%3E%0A%3C%2Fsvg%3E");
        background-size: 48px 48px;
        background-repeat: repeat;
    }
    
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ffd500ff;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.12); 
    }

    button{
        cursor: pointer;
    }

`

export default GlobalStyles;