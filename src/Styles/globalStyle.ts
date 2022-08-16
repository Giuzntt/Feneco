import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html{
        @media (max-with: 1080px) {
            font-size: 93.75%;
        }
        @media (max-with: 720px){
            font-size: 87.5%;
        }
    }


    
`;