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
    background-color: black;
    opacity: 0.8;

    div {
        width: 50%;
        flex-direction: column;
    img{
        width: 95%;
        height: 100%;
        overflow: hidden;

    }
    
    }
    .content-banner, h1,h2, p , button{
        margin: 10px 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        
    }
    
    .content-banner{
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
        .subtitle{
            font-size: 16px;
            font-weight: 300;
            color: #ffffff;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            .text-link{
                text-decoration:underline white;
                color: #ffffff;
                margin-left: 5px;
            }
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
    
`

export const MainContent = styled.div`
.title-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    hr {
        border-color: #fdc201;
        
        width: 30%;
        transform: rotate(180deg);
    }
    h1 {
        font-size: 30px;
        font-weight: 700;
        color: #fdc201;
        text-transform: uppercase;

    }
}

.content-main{
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        position: relative;
        height: 397px;
        width: 30%;
        border-radius: 5px;
        height: 100px;
        border: 1px solid black;
       
    }
}

`;