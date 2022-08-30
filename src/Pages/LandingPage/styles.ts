import styled from "styled-components";

export const LandingContent = styled.div`
    max-width: 1440px;
    padding: 0 160px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`

export const BannerHeader = styled.div`
    display: flex;

    div {
        width: 50%;
        flex-direction: column;
    
    }
    
    .content-banner{
        /* display: flex; */
        flex-direction: column;
        margin: 10px 0;

        h1 {
            font-size: 25px;
            font-weight: 700;
            color: #ffffff;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        p {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        button{
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            padding: 10px 30px;
            border: none;
            background-color: #FDC201;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                filter: brightness(0.8);
            }
        }

    }
    .content-banner, h1, p , button{
        margin: 10px 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
    }
`